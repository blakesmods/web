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

export const useDocsLatestArticleURL = async () => {
  const route = useRoute();
  const { version, mod, slug } = useDocsMetadata();

  const { data } = await useAsyncData(
    () => `docs-latest-article-url-${route.path}`,
    () =>
      queryCollection("docs")
        .path(
          `/docs/${getDocsLatestVersion()}/${mod.value?.mod_id}/${slug.value}`
        )
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
  const versions = useDocsVersions();

  const { data } = await useAsyncData(
    () => `docs-sidebar-${version.value}`,
    () =>
      queryCollection("docs")
        .where("path", "LIKE", createDocsPathSQL(version.value))
        .select("title", "category", "hidden", "path")
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
      if (doc.path && version.value === versions.value[0]![0]!.label) {
        doc.path = removeDocsVersionFromPath(doc.path, version.value);
      }

      documents[doc.category]!.push(doc);
    }

    return documents;
  });
};

export const useDocsVersions = () => {
  const router = useRouter();

  return ref(
    getDocsVersions().map((v, i) => [
      {
        id: v,
        label: v,
        onSelect: async () => {
          const { mod, slug } = useDocsMetadata();

          const doc = await queryCollection("docs")
            .path(`/docs/${v}/${mod.value?.mod_id}/${slug.value}`)
            .limit(1)
            .count();

          if (doc > 0) {
            // the first is the latest and doesn't need the version in the URL
            const link =
              i === 0
                ? `/docs/${mod.value?.mod_id}/${slug.value}`
                : `/docs/${v}/${mod.value?.mod_id}/${slug.value}`;

            await router.push(link);
          } else {
            const doc = await queryCollection("docs")
              .path(`/docs/${v}/${mod.value?.mod_id}`)
              .limit(1)
              .count();

            // if there is no page for this mod, we'll just redirect to the top level page
            if (doc > 0) {
              // the first is the latest and doesn't need the version in the URL
              const link =
                i === 0
                  ? `/docs/${mod.value?.mod_id}`
                  : `/docs/${v}/${mod.value?.mod_id}`;

              await router.push(link);
            } else {
              // the first is the latest and doesn't need the version in the URL
              const link = i === 0 ? `/docs` : `/docs/${v}`;

              await router.push(link);
            }
          }
        }
      }
    ])
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
    lazy: true,
    server: false
  });

  return computed(() => {
    const documents = {} as Record<string, any[]>;

    if (data.value) {
      for (const doc of data.value) {
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
