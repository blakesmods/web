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
  const versions = useWikiVersions();

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
      if (doc.path && version.value === versions.value[0]![0]!.label) {
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

export const useWikiMods = () => {
  const router = useRouter();

  return ref(
    getMods()
      .filter(m => m.has_wiki)
      .map(m => [
        {
          id: m.mod_id,
          label: m.name,
          avatar: {
            src: m.logo
          },
          onClick: async () => {
            const { version, category, slug, isLatestVersion } =
              useWikiMetadata();

            const doc = await queryCollection("wiki")
              .path(
                `/wiki/${version.value}/${m.mod_id}/${category.value}/${slug.value}`
              )
              .limit(1)
              .count();

            if (doc > 0) {
              // the first is the latest and doesn't need the version in the URL
              const link = isLatestVersion.value
                ? `/wiki/${m.mod_id}/${category.value}/${slug.value}`
                : `/wiki/${version.value}/${m.mod_id}/${category.value}/${slug.value}`;

              await router.push(link);
            } else {
              const doc = await queryCollection("wiki")
                .where(
                  "path",
                  "LIKE",
                  createWikiPathSQL(version.value, m.mod_id)
                )
                .limit(1)
                .count();

              // if there is no page for this mod, we'll just redirect to the top level page
              if (doc > 0) {
                // the first is the latest and doesn't need the version in the URL
                const link = isLatestVersion.value
                  ? `/wiki/${m.mod_id}`
                  : `/wiki/${version.value}/${m.mod_id}`;

                await router.push(link);
              } else {
                // the first is the latest and doesn't need the version in the URL
                const link = isLatestVersion.value
                  ? `/wiki`
                  : `/wiki/${version.value}`;

                await router.push(link);
              }
            }
          }
        }
      ])
  );
};

export const useWikiVersions = () => {
  const router = useRouter();

  return ref(
    getWikiVersions().map((v, i) => [
      {
        id: v,
        label: v,
        onClick: async () => {
          const { mod, category, slug } = useWikiMetadata();

          const doc = await queryCollection("wiki")
            .path(
              `/wiki/${v}/${mod.value?.mod_id}/${category.value}/${slug.value}`
            )
            .limit(1)
            .count();

          if (doc > 0) {
            // the first is the latest and doesn't need the version in the URL
            const link =
              i === 0
                ? `/wiki/${mod.value?.mod_id}/${category.value}/${slug.value}`
                : `/wiki/${v}/${mod.value?.mod_id}/${category.value}/${slug.value}`;

            await router.push(link);
          } else {
            const doc = await queryCollection("wiki")
              .where("path", "LIKE", createWikiPathSQL(v, mod.value?.mod_id))
              .limit(1)
              .count();

            // if there is no page for this mod, we'll just redirect to the top level page
            if (doc > 0) {
              // the first is the latest and doesn't need the version in the URL
              const link =
                i === 0
                  ? `/wiki/${mod.value?.mod_id}`
                  : `/wiki/${v}/${mod.value?.mod_id}`;

              await router.push(link);
            } else {
              // the first is the latest and doesn't need the version in the URL
              const link = i === 0 ? `/wiki` : `/wiki/${v}`;

              await router.push(link);
            }
          }
        }
      }
    ])
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
    lazy: true,
    server: false
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
