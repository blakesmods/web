// for whatever reason nuxt feels the need to try and render a page for urls like
// /docs/preload.js.map and i don't know why
//
// solution is to tell it to go away I guess
export default defineNuxtRouteMiddleware((to, from) => {
  if (to.path.endsWith(".js.map")) {
    navigateTo({}, { redirectCode: 404 });
  }
});
