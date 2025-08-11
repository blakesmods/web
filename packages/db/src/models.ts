import { ObjectId } from "bson";

export interface Mod {
  _id: ObjectId;
  mod_id: string;
  mod_name: string;
  site_downloads: number;
  curseforge_id: number;
  curseforge_slug: string;
  curseforge_downloads: number;
  curseforge_relations: number;
  modrinth_id: string;
  modrinth_slug: string;
  modrinth_downloads: number;
  modrinth_relations: number;
}

export interface ModFile {
  _id: ObjectId;
  file_name: string;
  file_size: number;
  mod_id: string;
  upload_date: Date;
  released: boolean;
  maven_path: string;
  md5_hash: string;
  site_downloads: number;
  mc_version: string;
  mc_version_group: string;
  mc_version_parts: VersionParts;
  mc_versions: string[];
  mod_version: string;
  mod_version_parts: VersionParts;
  mod_loader: string;
  java_version?: number;
  curseforge_id?: number | null;
  curseforge_downloads: number;
  modrinth_id?: string | null;
  modrinth_downloads: number;
  changelog?: string;
}

export interface ModStats {
  _id: ObjectId;
  mod_id: string;
  downloads: Record<any, any>;
  launches: Record<any, any>;
}

export interface PageViews {
  _id: ObjectId;
  mod_id: string;
  curseforge: Record<any, any>;
  modrinth: Record<any, any>;
}

interface VersionParts {
  major: number;
  minor: number;
  patch: number;
}
