import semver from "semver";
import categories from "~/content/wiki/.categories.json";
import versions from "~/content/wiki/.versions.json";

export const getWikiVersions = () => versions;
export const getWikiLatestVersion = () => versions[0];

export const getWikiCategories = () => categories;
export const getWikiCategoryName = (category: keyof typeof categories) =>
  categories[category];

export function parseWikiRouteParams(path: string) {
  const parts = path.split("/").slice(1);

  let version: string, mod: string, category: string, slug: string;

  // the latest version won't have the version in the url, which means it will
  // be the mod id
  if (!semver.valid(semver.coerce(parts[1]), true)) {
    slug = parts[3];
    category = parts[2];
    mod = parts[1];
    version = getWikiLatestVersion();
  } else {
    slug = parts[4];
    category = parts[3];
    mod = parts[2];
    version = parts[1];
  }

  return {
    version,
    mod,
    category,
    slug
  };
}

export function removeWikiVersionFromPath(path: string, version: string) {
  return path
    .split("/")
    .filter((s: string) => s !== version)
    .join("/");
}
