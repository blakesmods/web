export default defineAppConfig({
  ui: {
    primary: "fuchsia",
    gray: "cool",

    card: {
      base: "border border-gray-300 dark:border-gray-700",
      background: "bg-gray-200 dark:bg-gray-800",
      header: {
        base: "border-b border-gray-300 dark:border-gray-700"
      },
      footer: {
        base: "border-b border-gray-300 dark:border-gray-700"
      }
    },
    slideover: {
      padding: "p-8",
      base: "overflow-y-auto z-20"
    }
  }
});
