import { useNuxt } from "@nuxt/kit";
import * as fs from "fs-extra";
import { resolve } from "path";

export default function () {
  const nuxt = useNuxt();

  const source = resolve(nuxt.options.srcDir, "content", "assets");
  const destination = resolve(nuxt.options.srcDir, "public", "assets");

  // ensure public/content directory does not exist
  fs.removeSync(destination);

  // ensure content/assets directory exists
  fs.ensureDirSync(source);

  // use symlinks in development
  if (process.env.NODE_ENV === "development") {
    // link content/assets to public/assets
    fs.ensureSymlinkSync(source, destination, "dir");
  } else {
    // copy content/assets to public/assets
    fs.copySync(source, destination);
  }
}
