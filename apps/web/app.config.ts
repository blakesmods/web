export default defineAppConfig({
  ui: {
    primary: "fuchsia",
    gray: "cool",

    accordion: {
      item: {
        base: "flex flex-col gap-4 border border-gray-200 dark:border-gray-800 rounded",
        padding: "p-4"
      }
    },
    alert: {
      title: "text-base font-bold",
      color: {
        white: {
          solid:
            "text-gray-800 dark:text-gray-100 bg-gray-200 dark:bg-gray-800 ring-1 ring-gray-300 dark:ring-gray-700"
        }
      }
    },
    badge: {
      default: {
        variant: "subtle"
      }
    },
    breadcrumb: {
      ol: "flex-wrap"
    },
    button: {
      variant: {
        primary: "bg-[var(--primary-color)] hover:bg-[var(--primary-color)]",
        secondary:
          "border-2 border-[var(--primary-color)] hover:bg-[var(--primary-color)]"
      }
    },
    card: {
      base: "border border-gray-300 dark:border-gray-700",
      background: "bg-gray-200 dark:bg-gray-800",
      header: {
        base: "border-b border-gray-300 dark:border-gray-700"
      },
      footer: {
        base: "border-t border-gray-300 dark:border-gray-700"
      }
    },
    slideover: {
      padding: "p-8",
      base: "overflow-y-auto z-20"
    }
  }
});
