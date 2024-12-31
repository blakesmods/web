import versions from "~/content/docs/.versions.json";

export const getDocsVersions = () => versions;
export const getDocsLatestVersion = () => versions[0];
