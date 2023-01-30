import Button from "primevue/button";
import Card from "primevue/card";
import Column from "primevue/column";
import PrimeVue from "primevue/config";
import DataTable from "primevue/datatable";
import Divider from "primevue/divider";
import Dropdown from "primevue/dropdown";
import Message from "primevue/message";
import Sidebar from "primevue/sidebar";
import Toast from "primevue/toast";
import ToastService from "primevue/toastservice";
import Tooltip from "primevue/tooltip";

export default defineNuxtPlugin(nuxtApp => {
  const app = nuxtApp.vueApp;

  app.use(PrimeVue, { ripple: false });
  app.use(ToastService);

  app.component("Button", Button);
  app.component("Card", Card);
  app.component("Column", Column);
  app.component("DataTable", DataTable);
  app.component("Divider", Divider);
  app.component("Dropdown", Dropdown);
  app.component("Message", Message);
  app.component("Sidebar", Sidebar);
  app.component("Toast", Toast);

  app.directive("tooltip", Tooltip);
});
