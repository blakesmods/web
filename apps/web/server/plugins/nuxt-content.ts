export default defineNitroPlugin(nitroApp => {
  nitroApp.hooks.hook("content:file:beforeParse", file => {
    if (file._id.endsWith(".md")) {
      // // strip /index suffix off of paths
      // if (file._path.endsWith("/index")) {
      //   file._path = file._path.slice(-6) || "/";
      // }

      // update all image links to use the proper subdirectory
      file.body = file.body.replace(new RegExp("/img/", "g"), "/content/");
    }
  });
});
