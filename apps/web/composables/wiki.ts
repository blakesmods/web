export const useWikiMetadata = () => {
  const route = useRoute();

  const version = ref("");
  const mod = ref("");
  const category = ref("");
  const slug = ref("");

  watch(
    () => route.path,
    () => {
      const params = parseWikiRouteParams(route.params);

      version.value = params.version;
      mod.value = params.mod;
      category.value = params.category;
      slug.value = params.slug;
    },
    { immediate: true }
  );

  return {
    version,
    mod,
    category,
    slug,
    isLatestVersion: computed(() => version.value === getDocsLatestVersion())
  };
};

export const useWiki = async () => {
  const route = useRoute();
  const { version, mod, category, slug } = useWikiMetadata();

  const { data: page } = await useAsyncData("wiki/" + route.path, () =>
    queryContent(
      "wiki",
      version.value,
      mod.value,
      category.value,
      slug.value
    ).findOne()
  );

  return page;
};

export const useWikiSidebarLinks = async () => {
  const { version, mod } = useWikiMetadata();
  const versions = useWikiVersions();

  const { data } = await useAsyncData("wiki-sidebar-content", () =>
    queryContent("wiki", version.value, mod.value)
      .only(["title", "category", "icon", "_path", "_dir"])
      .sort({ sort: 1, $numeric: true })
      .find()
  );

  return computed(() => {
    const articles = Object.fromEntries(
      Object.keys(getWikiCategories()).map(k => [k, [] as any[]])
    );

    if (!data.value) {
      return articles;
    }

    for (const doc of data.value) {
      if (!doc._path) {
        continue;
      }

      if (!articles[doc._dir]) {
        articles[doc._dir] = [];
      }

      // latest version doesn't have the version in the url
      if (doc._path && version.value === versions.value[0][0].label) {
        doc._path = doc._path
          .split("/")
          .filter(s => s !== version.value)
          .join("/");
      }

      articles[doc._dir].push(doc);
    }

    for (const [category, documents] of Object.entries(articles)) {
      if (documents.length === 0) {
        delete articles[category];
      }
    }

    return articles;
  });
};

export const useWikiVersions = () => {
  const router = useRouter();

  return ref(
    getWikiVersions().map((v, i) => [
      {
        id: v,
        label: v,
        click: async () => {
          const { mod, category, slug } = useWikiMetadata();

          const doc = await queryContent(
            `/wiki${v}/${mod.value}/${category.value}/${slug.value}`
          )
            .findOne()
            .catch(() => null);

          if (doc) {
            // the first is the latest and doesn't need the version in the URL
            const link =
              i === 0
                ? `/wiki/${mod.value}/${category.value}/${slug.value}`
                : `/wiki/${v}/${mod.value}/${category.value}/${slug.value}`;

            await router.push(link);
          } else {
            const doc = await queryContent(`/wiki/${v}/${mod.value}`)
              .findOne()
              .catch(() => null);

            // if there is no page for this mod we'll just redirect to the top level page
            if (doc) {
              // the first is the latest and doesn't need the version in the URL
              const link =
                i === 0 ? `/wiki/${mod.value}` : `/wiki/${v}/${mod.value}`;

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
    search: `wiki/${version.value}`
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

      for (const doc of data.value) {
        // latest version doesn't have the version in the url
        if (isLatestVersion.value) {
          doc.id = doc.id
            .split("/")
            .filter((s: string) => s !== version.value)
            .join("/");

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

        documents[mod.name].push(doc);
      }
    }

    return documents;
  });
};
