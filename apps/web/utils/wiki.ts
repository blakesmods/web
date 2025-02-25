import semver from "semver";
import categories from "~/content/wiki/.categories.json";
import versions from "~/content/wiki/.versions.json";

export const getWikiVersions = () => versions;
export const getWikiLatestVersion = () => versions[0];

export const getWikiCategories = () => categories;
export const getWikiCategoryName = (category: keyof typeof categories) =>
  categories[category];

export function parseWikiRouteParams(params: any) {
  let version = params.version;
  let mod = params.mod;
  let category = params.category;
  let slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  // index page doesn't have a slug or version so we don't want to move the mod
  // id to the slug in this case
  if (version === "") {
    version = getWikiLatestVersion();
  }

  // the latest version won't have the version in the url, which means it will
  // be the mod id
  if (!semver.valid(semver.coerce(version), true)) {
    slug = category;
    category = mod;
    mod = version;
    version = getWikiLatestVersion();
  }

  return {
    version,
    mod,
    category,
    slug
  };
}
