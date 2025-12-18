export default defineEventHandler(async event => {
  const query = getQuery(event);
  const collection = query.collection as string;
  const version = query.version as string;

  if (collection !== "docs" && collection !== "wiki") {
    return new Response(
      "Invalid collection. Must be either 'docs' or 'wiki'.",
      { status: 400 }
    );
  }

  return queryCollectionSearchSections(
    event,
    collection as any,
    { ignoredTags: ["style", "pre", "code"], extraFields: ["category"] } as any
  )
    .where("path", "LIKE", `/${collection}/${version}%`)
    .where("hidden", "<>", true);
});
