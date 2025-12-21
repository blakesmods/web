export const useDocsMetadata = () => {
  const route = useRoute();

  const params = computed(() => parseDocsRouteParams(route.params));

  return {
    version: computed(() => params.value.version ?? ""),
    mod: computed(() => getMod(params.value.mod ?? "")),
    slug: computed(() => params.value.slug ?? ""),
    isLatestVersion: computed(
      () => params.value.version === getDocsLatestVersion()
    )
  };
};

export const useDoc = async () => {
  const route = useRoute();
  const { version, mod, slug } = useDocsMetadata();

  const { data: page } = await useAsyncData(route.path, () =>
    queryCollection("docs")
      .path(createDocsPath(version.value, mod.value?.mod_id, slug.value))
      .first()
  );

  return page;
};

export const useDocsPagination = async () => {
  const route = useRoute();
  const { version, mod, slug, isLatestVersion } = useDocsMetadata();

  const { data } = await useAsyncData("docs-pagination" + route.path, () =>
    queryCollectionItemSurroundings(
      "docs",
      createDocsPath(version.value, mod.value?.mod_id, slug.value)
    )
  );

  const previous = computed(() => {
    const doc = data.value?.[0];
    if (doc && isLatestVersion.value) {
      doc.path = removeDocsVersionFromPath(doc.path, version.value);
    }

    return doc;
  });

  const next = computed(() => {
    const doc = data.value?.[1];
    if (doc && isLatestVersion.value) {
      doc.path = removeDocsVersionFromPath(doc.path, version.value);
    }

    return doc;
  });

  return [previous, next] as const;
};

export const useDocsLatestArticleURL = async () => {
  const route = useRoute();
  const { version, mod, slug } = useDocsMetadata();

  const { data } = await useAsyncData(
    () => `docs-latest-article-url-${route.path}`,
    () =>
      queryCollection("docs")
        .path(
          createDocsPath(getDocsLatestVersion(), mod.value?.mod_id, slug.value)
        )
        .select("path")
        .limit(1)
        .first(),
    { watch: [version, mod, slug] }
  );

  return computed(() => {
    if (!mod.value) {
      return "/docs";
    }

    if (!data.value || !slug.value) {
      return `/docs/${mod.value.mod_id}`;
    }

    return `/docs/${mod.value.mod_id}/${slug.value}`;
  });
};

export const useDocsSidebarLinks = async () => {
  const { version } = useDocsMetadata();

  const { data } = await useAsyncData(
    () => `docs-sidebar-${version.value}`,
    () =>
      queryCollection("docs")
        .where("path", "LIKE", createDocsPathSQL(version.value))
        .select("path", "title", "category", "hidden")
        .all(),
    { watch: [version] }
  );

  return computed(() => {
    const documents = {} as Record<string, any[]>;

    if (!data.value) {
      return documents;
    }

    for (const doc of data.value.filter(d => d.category && !d.hidden)) {
      if (!documents[doc.category]) {
        documents[doc.category] = [];
      }

      // the latest version doesn't have the version in the url
      if (doc.path && version.value === getDocsLatestVersion()) {
        doc.path = removeDocsVersionFromPath(doc.path, version.value);
      }

      documents[doc.category]!.push(doc);
    }

    return documents;
  });
};

export const useDocsVersions = async () => {
  const { mod, slug } = useDocsMetadata();

  const { data } = await useAsyncData(
    () => `docs-versions-${mod.value?.mod_id}/${slug.value ?? "index"}`,
    () =>
      queryCollection("docs")
        .where("mod", "=", mod.value?.mod_id)
        .orWhere(group =>
          group
            .where("path", "LIKE", `%/${slug.value}`)
            .where("path", "LIKE", `%/${mod.value?.mod_id}`)
        )
        .select("path", "minecraft")
        .order("minecraft", "DESC")
        .all(),
    { watch: [mod, slug] }
  );

  return computed(() =>
    getDocsVersions().map(v => {
      let doc = data.value?.find(
        d => d.minecraft === v && d.path.endsWith(slug.value)
      );

      if (!doc) {
        const index = data.value?.find(
          d => d.minecraft === v && !d.path.endsWith(slug.value)
        );

        if (!index) {
          return [
            {
              id: v,
              label: v,
              to: v === getDocsLatestVersion() ? "/docs" : `/docs/${v}`
            }
          ];
        }

        doc = index;
      }

      if (doc.minecraft === getDocsLatestVersion()) {
        doc.path = removeDocsVersionFromPath(doc.path, doc.minecraft);
      }

      return [
        {
          id: doc.minecraft,
          label: doc.minecraft,
          to: doc.path
        }
      ];
    })
  );
};

export const useDocsSearch = async () => {
  const { version, isLatestVersion } = useDocsMetadata();
  const query = computed(() => ({
    collection: "docs",
    version: version.value
  }));

  const { data } = await useFetch("/api/search", {
    query,
    key: () => `docs-search/${version.value}`
  });

  return computed(() => {
    const documents = {} as Record<string, any[]>;

    if (data.value) {
      for (const doc of data.value as any[]) {
        if (!doc.category) {
          continue;
        }

        if (!documents[doc.category]) {
          documents[doc.category] = [];
        }

        // the latest version doesn't have the version in the url
        if (isLatestVersion.value) {
          doc.id = removeDocsVersionFromPath(doc.id, version.value);
        }

        documents[doc.category]!.push(doc);
      }
    }

    return documents;
  });
};

export const useDocsSectionArticles = async () => {
  const route = useRoute();
  const { version, mod, isLatestVersion } = useDocsMetadata();

  const { data } = await useAsyncData(
    () => `docs-listing-${route.path}`,
    () =>
      queryCollection("docs")
        .where(
          "path",
          "LIKE",
          createDocsPathSQL(version.value, mod.value?.mod_id)
        )
        .select("title", "path")
        .all()
  );

  return computed(
    () =>
      data.value?.slice(1).map(doc => {
        if (isLatestVersion.value && doc.path) {
          doc.path = removeDocsVersionFromPath(doc.path, version.value);
        }

        return doc;
      }) ?? []
  );
};
