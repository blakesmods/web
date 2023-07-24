import Carousel from "primevue/carousel";
import Column from "primevue/column";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Message from "primevue/message";
import Skeleton from "primevue/skeleton";
import Tooltip from "primevue/tooltip";

export default defineNuxtPlugin(nuxtApp => {
  const app = nuxtApp.vueApp;

  app.use(PrimeVue, { ripple: false } as any);
  // app.use(ToastService);

  // app.component("Button", Button);
  // app.component("Card", Card);
  app.component("Carousel", Carousel);
  app.component("Column", Column);
  app.component("DataTable", DataTable);
  // app.component("Divider", Divider);
  // app.component("Dropdown", Dropdown);
  app.component("Message", Message);
  // app.component("Sidebar", Sidebar);
  app.component("Skeleton", Skeleton);
  // app.component("Tag", Tag);
  // app.component("Toast", Toast);

  app.directive("tooltip", Tooltip);
});
