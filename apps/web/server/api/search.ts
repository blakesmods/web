export default defineEventHandler(async event => {
  const query = getQuery(event);
  const collection = query.collection as string;
  const version = query.version as string;

  const content: any[] = await queryCollection(event, collection)
    .where("path", "LIKE", `/${collection}/${version}%`)
    .where("hidden", "!=", true)
    .all();

  return content.flatMap(page => splitPageIntoSections(page));
});

//
// Copied from https://github.com/nuxt/content/blob/2.x/src/runtime/server/search.ts
//
type Section = {
  // Path to the section
  id: string;
  // Title of the section
  title: string;
  // Parents sections titles
  titles: string[];
  category?: string;
  // Level of the section
  level: number;
  // Content of the section
  content: string;
};

const HEADING = /^h([1-6])$/;
const isHeading = (tag: string) => HEADING.test(tag);

export function splitPageIntoSections(page: any) {
  const ignoredTags = ["style", "pre", "code"];
  const path = page.path ?? "";

  const sections: Section[] = [];

  if (!page?.body?.children) {
    return sections;
  }

  sections.push({
    id: path,
    title: page.title ?? "",
    category: page.category,
    titles: [],
    content: "",
    level: 0
  });

  // No section
  let section = 0;
  let previousHeadingLevel = 0;
  const titles = page.title ? [page.title] : [];
  for (const item of page.body.children) {
    const tag = item.tag || "";
    if (isHeading(tag)) {
      const currentHeadingLevel: number = Number(tag.match(HEADING)?.[1]) ?? 0;

      const title = extractTextFromAst(item).trim();

      if (currentHeadingLevel === 1) {
        // Reset the titles
        titles.splice(0, titles.length);
      } else if (currentHeadingLevel < previousHeadingLevel) {
        // Go up tree, remove every title after the current level
        titles.splice(currentHeadingLevel - 1, titles.length - 1);
      } else if (currentHeadingLevel === previousHeadingLevel) {
        // Same level, remove the last title (add title later to avoid to it in titles)
        titles.pop();
      }

      sections.push({
        id: `${path}#${item.props?.id}`,
        title,
        category: page.category,
        titles: [...titles],
        content: "",
        level: currentHeadingLevel
      });

      titles.push(title);

      // Swap to a new section
      previousHeadingLevel = currentHeadingLevel;
      section += 1;
    }

    if (!isHeading(tag)) {
      if (!sections[section]) {
        sections[section] = {
          id: "",
          title: "",
          category: page.category,
          titles: [],
          content: "",
          level: 0
        };
      }

      sections[section].content += extractTextFromAst(item, ignoredTags).trim();
    }
  }

  return sections;
}

function extractTextFromAst(node: any, ignoredTags: string[] = []) {
  let text = "";

  // Get text from markdown AST
  if (node.type === "text") {
    text += node.value;
  }

  // Do not explore children
  if (ignoredTags.includes(node.tag ?? "")) {
    return "";
  }

  // Explore children
  if (node.children) {
    for (const child of node.children) {
      text += " " + extractTextFromAst(child, ignoredTags);
    }
  }

  return text;
}
