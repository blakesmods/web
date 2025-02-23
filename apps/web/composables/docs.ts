export const useDocsMetadata = () => {
  const route = useRoute();

  const version = ref("");
  const mod = ref("");
  const slug = ref("");

  watch(
    () => route.path,
    () => {
      const params = parseDocsRouteParams(route.params);

      version.value = params.version;
      mod.value = params.mod;
      slug.value = params.slug;
    },
    { immediate: true }
  );

  return {
    version,
    mod,
    slug,
    isLatestVersion: computed(() => version.value === getDocsLatestVersion())
  };
};

export const useDoc = async () => {
  const route = useRoute();
  const { version, mod, slug } = useDocsMetadata();
  const { data: page } = await useAsyncData("doc/" + route.path, () =>
    queryContent("docs", version.value, mod.value, slug.value).findOne()
  );

  return page;
};

export const useDocs = async () => {
  const { version } = useDocsMetadata();
  const versions = useDocsVersions();

  const { data } = await useAsyncData(
    "docs-sidebar-content",
    () =>
      queryContent("docs", version.value)
        .only(["title", "category", "hidden", "_path"])
        .find(),
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

      // latest version doesn't have the version in the url
      if (doc._path && version.value === versions.value[0][0].label) {
        doc._path = doc._path
          .split("/")
          .filter((s: string) => s !== version.value)
          .join("/");
      }

      documents[doc.category].push(doc);
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
        click: async () => {
          const { mod, slug } = useDocsMetadata();

          const doc = await queryContent(
            `/docs/${v}/${mod.value}/${slug.value}`
          )
            .findOne()
            .catch(() => null);

          if (doc) {
            // the first is the latest and doesn't need the version in the URL
            const link =
              i === 0
                ? `/docs/${mod.value}/${slug.value}`
                : `/docs/${v}/${mod.value}/${slug.value}`;

            await router.push(link);
          } else {
            const doc = await queryContent(`/docs/${v}/${mod.value}`)
              .findOne()
              .catch(() => null);

            // if there is no page for this mod we'll just redirect to the top level page
            if (doc) {
              // the first is the latest and doesn't need the version in the URL
              const link =
                i === 0 ? `/docs/${mod.value}` : `/docs/${v}/${mod.value}`;

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
  const { version } = useDocsMetadata();
  const query = computed(() => ({
    search: `docs/${version.value}`
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

        // latest version doesn't have the version in the url
        if (doc.id && version.value === getDocsLatestVersion()) {
          doc.id = doc.id
            .split("/")
            .filter((s: string) => s !== version.value)
            .join("/");
        }

        documents[doc.category].push(doc);
      }
    }

    return documents;
  });
};
