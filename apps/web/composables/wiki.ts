export const useWikiSearch = async () => {
  const { data } = await useFetch("/api/search?search=wiki", {
    lazy: true,
    server: false
  });

  return computed(() => {
    const documents = {} as Record<string, any[]>;

    if (data.value) {
      for (const doc of data.value) {
        const parts = doc.id.split("/").slice(1);
        const mod = useMod(parts[1] as any);

        if (!mod.value) {
          continue;
        }

        doc.category = mod.value.name;

        if (!documents[mod.value.name]) {
          documents[mod.value.name] = [];
        }

        documents[mod.value.name].push(doc);
      }
    }

    return documents;
  });
};
