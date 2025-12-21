export const useWikiMetadata = () => {
  const route = useRoute();

  const params = computed(() => parseWikiRouteParams(route.path));

  return {
    version: computed(() => params.value.version ?? ""),
    mod: computed(() => getMod(params.value.mod ?? "")),
    category: computed(() => params.value.category ?? ""),
    slug: computed(() => params.value.slug ?? ""),
    isLatestVersion: computed(
      () => params.value.version === getWikiLatestVersion()
    )
  };
};

export const useWiki = async () => {
  const route = useRoute();
  const { version, mod, category, slug } = useWikiMetadata();

  const { data: page } = await useAsyncData(route.path, () =>
    queryCollection("wiki")
      .path(
        createWikiPath(
          version.value,
          mod.value?.mod_id,
          category.value,
          slug.value
        )
      )
      .first()
  );

  return page;
};

export const useWikiPagination = async () => {
  const route = useRoute();
  const { version, mod, category, slug, isLatestVersion } = useWikiMetadata();

  const { data } = await useAsyncData("wiki-pagination" + route.path, () =>
    queryCollectionItemSurroundings(
      "wiki",
      createWikiPath(
        version.value,
        mod.value?.mod_id,
        category.value,
        slug.value
      )
    )
      .where(
        "path",
        "LIKE",
        createWikiPathSQL(version.value, mod.value?.mod_id, category.value)
      )
      .order("sort", "ASC")
  );

  const previous = computed(() => {
    const article = data.value?.[0];
    if (article && isLatestVersion.value) {
      article.path = removeWikiVersionFromPath(article.path, version.value);
    }

    return article;
  });

  const next = computed(() => {
    const article = data.value?.[1];
    if (article && isLatestVersion.value) {
      article.path = removeWikiVersionFromPath(article.path, version.value);
    }

    return article;
  });

  return [previous, next] as const;
};

export const useWikiModArticles = async () => {
  const route = useRoute();
  const { version, mod } = useWikiMetadata();

  const { data: pages } = await useAsyncData(
    () => `wiki-mod-articles-${route.path}`,
    () =>
      queryCollection("wiki")
        .where(
          "path",
          "LIKE",
          createWikiPathSQL(version.value, mod.value?.mod_id)
        )
        .select("path", "title", "category", "sort", "icon")
        .order("sort", "ASC")
        .all(),
    { watch: [version, mod] }
  );

  return pages;
};

export const useWikiModLatestArticles = async () => {
  const route = useRoute();
  const { version, mod, isLatestVersion } = useWikiMetadata();
  const { data } = await useAsyncData(
    () => `wiki-mod-latest-articles-${route.path}`,
    () =>
      queryCollection("wiki")
        .where(
          "path",
          "LIKE",
          createWikiPathSQL(version.value, mod.value?.mod_id)
        )
        .where("version", "IS NOT NULL")
        .select("path", "title", "category", "icon", "version")
        .order("version", "DESC")
        .limit(8)
        .all(),
    { watch: [version, mod] }
  );

  return computed(() => {
    if (!data.value) {
      return [];
    }

    for (const article of data.value) {
      if (article.path && isLatestVersion.value) {
        article.path = removeWikiVersionFromPath(article.path, version.value);
      }
    }

    return data.value;
  });
};

export const useWikiLatestArticleURL = async () => {
  const route = useRoute();
  const { version, mod, category, slug } = useWikiMetadata();

  const { data } = await useAsyncData(
    () => `wiki-latest-article-url-${route.path}`,
    () =>
      queryCollection("wiki")
        .path(
          createWikiPath(
            getWikiLatestVersion(),
            mod.value?.mod_id,
            category.value,
            slug.value
          )
        )
        .select("path")
        .first(),
    { watch: [version, mod, category, slug] }
  );

  return computed(() => {
    if (!mod.value) {
      return "/wiki";
    }

    if (!data.value || !category.value || !slug.value) {
      return `/wiki/${mod.value.mod_id}`;
    }

    return `/wiki/${mod.value.mod_id}/${category.value}/${slug.value}`;
  });
};

export const useWikiSidebarLinks = async () => {
  const { version, mod } = useWikiMetadata();

  const { data } = await useAsyncData(
    () => `wiki-sidebar-${version.value}-${mod.value?.mod_id ?? ""}`,
    () =>
      queryCollection("wiki")
        .where(
          "path",
          "LIKE",
          createWikiPathSQL(version.value, mod.value?.mod_id)
        )
        .select("path", "title", "sort", "icon")
        .order("sort", "ASC")
        .all(),
    { watch: [version, mod] }
  );

  return computed(() => {
    const articles = Object.fromEntries(
      Object.keys(getWikiCategories()).map(k => [k, [] as any[]])
    );

    if (!data.value) {
      return articles;
    }

    for (const doc of data.value) {
      if (!doc.path) {
        continue;
      }

      const parts = doc.path.split("/").slice(1);
      const dir = parts.at(-2)!;

      if (!articles[dir]) {
        articles[dir] = [];
      }

      // the latest version doesn't have the version in the url
      if (doc.path && version.value === getWikiLatestVersion()) {
        doc.path = removeWikiVersionFromPath(doc.path, version.value);
      }

      articles[dir]!.push(doc);
    }

    for (const [category, documents] of Object.entries(articles)) {
      if (documents.length === 0) {
        delete articles[category];
      }
    }

    return articles;
  });
};

export const useWikiMods = async () => {
  const { version, mod, slug } = useWikiMetadata();

  const { data } = await useAsyncData(
    () => `wiki-mods-${version.value}/${slug.value ?? "index"}`,
    () =>
      queryCollection("wiki")
        .where("minecraft", "=", version.value)
        .select("path", "minecraft", "mod")
        .order("minecraft", "DESC")
        .all(),
    { watch: [mod, slug] }
  );

  return computed(() =>
    getMods()
      .filter(m => m.has_wiki)
      .filter(m =>
        data.value?.some(
          d => d.minecraft === version.value && d.mod === m.mod_id
        )
      )
      .map(m => {
        let path = `/wiki/${version.value}/${m.mod_id}`;

        if (version.value === getWikiLatestVersion()) {
          path = `/wiki/${m.mod_id}`;
        }

        return [
          {
            id: m.mod_id,
            label: m.name,
            avatar: {
              src: m.logo
            },
            to: path
          }
        ];
      })
  );
};

export const useWikiVersions = async () => {
  const { mod, slug } = useWikiMetadata();

  const { data } = await useAsyncData(
    () => `wiki-versions-${mod.value?.mod_id}/${slug.value ?? "index"}`,
    () =>
      queryCollection("wiki")
        .where("mod", "=", mod.value?.mod_id)
        .select("path", "minecraft")
        .order("minecraft", "DESC")
        .all(),
    { watch: [mod, slug] }
  );

  return computed(() =>
    getWikiVersions().map(v => {
      let doc: any;
      if (slug.value) {
        doc = data.value?.find(
          d => d.minecraft === v && d.path.endsWith(slug.value)
        );
      }

      if (!doc) {
        const hasAny = data.value?.some(d => d.minecraft === v);

        if (hasAny) {
          doc = {
            minecraft: v,
            path: `/wiki/${v}/${mod.value?.mod_id}`
          };
        } else {
          doc = {
            minecraft: v,
            path: `/wiki/${v}`
          };
        }
      }

      if (doc.minecraft === getWikiLatestVersion()) {
        doc.path = removeWikiVersionFromPath(doc.path, doc.minecraft);
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

export const useWikiSearch = async () => {
  const { version, isLatestVersion } = useWikiMetadata();
  const query = computed(() => ({
    collection: "wiki",
    version: version.value
  }));

  const { data } = await useFetch("/api/search", {
    query,
    key: () => `wiki-search/${version.value}`
  });

  return computed(() => {
    const documents = {} as Record<string, any[]>;

    if (data.value) {
      let mod: any;

      for (const doc of data.value as any[]) {
        // the latest version doesn't have the version in the url
        if (isLatestVersion.value) {
          doc.id = removeWikiVersionFromPath(doc.id, version.value);

          const parts = doc.id.split("/").slice(1);

          mod = getMod(parts[1] as any);
        } else {
          const parts = doc.id.split("/").slice(1);

          mod = getMod(parts[2] as any);
        }

        if (!mod) {
          continue;
        }

        doc.category = mod.name;

        if (!documents[mod.name]) {
          documents[mod.name] = [];
        }

        documents[mod.name]!.push(doc);
      }
    }

    return documents;
  });
};

export const useWikiModDirectoryCounts = async () => {
  const route = useRoute();
  const { version } = useWikiMetadata();

  const { data } = await useAsyncData(
    route.path,
    () =>
      queryCollection("wiki")
        .where("path", "LIKE", createWikiPathSQL(version.value))
        .select("path")
        .all(),
    { watch: [version] }
  );

  return computed(
    () =>
      data.value?.reduce(
        (acc, val) => {
          const mod = val.path.split("/")[3];
          if (!mod) {
            return acc;
          }

          if (!acc[mod]) {
            acc[mod] = 0;
          }

          acc[mod]++;

          return acc;
        },
        {} as Record<string, number>
      ) ?? {}
  );
};
