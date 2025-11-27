export default defineAppConfig({
  ui: {
    colors: {
      primary: "fuchsia",
      neutral: "neutral",
      mod: "mod"
    },

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
      defaultVariants: {
        color: "neutral",
        variant: "subtle"
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
    selectMenu: {
      defaultVariants: {
        color: "neutral",
        variant: "subtle"
      }
    },
    slideover: {
      padding: "p-8",
      base: "overflow-y-auto z-20"
    },
    table: {
      wrapper:
        "relative overflow-x-auto rounded-md bg-gray-100 dark:bg-gray-900 ring-1 ring-inset ring-gray-300 dark:ring-gray-700",
      td: {
        color: "text-gray-800 dark:text-gray-100",
        padding: "px-4 py-2"
      }
    }
  }
});
