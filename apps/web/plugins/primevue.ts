import Carousel from "primevue/carousel";
import Column from "primevue/column";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Skeleton from "primevue/skeleton";

export default defineNuxtPlugin(nuxtApp => {
  const app = nuxtApp.vueApp;

  app.use(PrimeVue, { ripple: false } as any);

  app.component("Carousel", Carousel);
  app.component("Column", Column);
  app.component("DataTable", DataTable);
  app.component("Skeleton", Skeleton);
});
