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
        const mod = getMod(parts[1] as any);
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
