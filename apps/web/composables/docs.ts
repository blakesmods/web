import semver from "semver";

function parseParams(params: any) {
  let version = params.version;
  let mod = params.mod;
  let slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  // index page doesn't have a slug or version so we don't want to move the mod
  // id to the slug in this case
  if (version === "") {
    version = getDocsLatestVersion();
  }

  // the latest version won't have the version in the url, which means it will
  // be the mod id
  if (!semver.valid(semver.coerce(version), true)) {
    slug = mod;
    mod = version;
    version = getDocsLatestVersion();
  }

  return {
    version,
    mod,
    slug
  };
}

export const useDoc = async () => {
  const route = useRoute();
  const params = parseParams(route.params);

  const { data: page } = await useAsyncData("doc/" + route.path, () =>
    queryContent("docs", params.version, params.mod, params.slug).findOne()
  );

  return page;
};

export const useDocs = async () => {
  const version = useDocsVersion();
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

export const useDocsVersion = (): Ref<string> => {
  const route = useRoute();
  const params = parseParams(route.params);
  const version = ref(params.version);

  watch(
    () => route.path,
    () => {
      const params = parseParams(route.params);
      version.value = params.version;
    }
  );

  return version;
};

export const useDocsVersions = () => {
  const router = useRouter();

  return ref(
    getDocsVersions().map((v, i) => [
      {
        id: v,
        label: v,
        click: async () => {
          const route = useRoute();
          const params = parseParams(route.params);

          const doc = await queryContent(
            `/docs/${v}/${params.mod}/${params.slug}`
          )
            .findOne()
            .catch(() => null);

          if (doc) {
            // the first is the latest and doesn't need the version in the URL
            const link =
              i === 0
                ? `/docs/${params.mod}/${params.slug}`
                : `/docs/${v}/${params.mod}/${params.slug}`;

            await router.push(link);
          } else {
            const doc = await queryContent(`/docs/${v}/${params.mod}`)
              .findOne()
              .catch(() => null);

            // if there is no page for this mod we'll just redirect to the top level page
            if (doc) {
              // the first is the latest and doesn't need the version in the URL
              const link =
                i === 0 ? `/docs/${params.mod}` : `/docs/${v}/${params.mod}`;

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

export const useDocsIsLatestVersion = () => {
  const route = useRoute();
  const params = parseParams(route.params);
  return params.version === getDocsLatestVersion();
};

export const useDocsSearch = async () => {
  const version = useDocsVersion();
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
