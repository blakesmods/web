import semver from "semver";
import versions from "~/content/docs/.versions.json";

export const getDocsVersions = () => versions;
export const getDocsLatestVersion = () => versions[0];

export function parseDocsRouteParams(params: any) {
  let version = params.version;
  let mod = params.mod;
  let slug = Array.isArray(params.slug) ? params.slug.join("/") : params.slug;

  // the index page doesn't have a slug or version, so we don't want to move
  // the mod id to the slug in this case
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

export function removeDocsVersionFromPath(path: string, version: string) {
  return path
    .split("/")
    .filter((s: string) => s !== version)
    .join("/");
}
