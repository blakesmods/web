import { ObjectId } from "mongodb";

export interface Mod {
  _id?: ObjectId;
  mod_id: string;
  mod_name: string;
  site_downloads: number;
  curseforge_id: number;
  curseforge_slug: string;
  curseforge_downloads: number;
  modrinth_id: string;
  modrinth_slug: string;
  modrinth_downloads: number;
}

export interface ModFile {
  _id?: ObjectId;
  file_name: string;
  file_size: number;
  mod_id: string;
  upload_date: Date;
  maven_path: string;
  md5_hash: string;
  site_downloads: number;
  mc_version: string;
  mc_version_group: string;
  mc_version_parts: VersionParts;
  mod_version: string;
  mod_version_parts: VersionParts;
  java_version?: number;
  curseforge_id?: number | null;
  curseforge_downloads: number;
  modrinth_id?: string | null;
  modrinth_downloads: number;
  changelog?: string;
}

export interface ModStats {
  _id?: ObjectId;
  mod_id: string;
  downloads: Record<any, any>;
}

interface VersionParts {
  major: number;
  minor: number;
  patch: number;
}
