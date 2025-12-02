export default defineAppConfig({
  ui: {
    colors: {
      primary: "fuchsia",
      neutral: "neutral"
    },

    accordion: {
      slots: {
        item: "flex flex-col p-4 gap-4 border border-neutral-200 dark:border-neutral-800 rounded"
      }
    },
    alert: {
      slots: {
        title: "text-base font-bold"
      },
      defaultVariants: {
        variant: "subtle"
      }
    },
    badge: {
      defaultVariants: {
        variant: "subtle"
      }
    },
    breadcrumb: {
      slots: {
        item: "flex-wrap"
      }
    },
    button: {
      slots: {
        base: "cursor-pointer disabled:cursor-default"
      },
      defaultVariants: {
        color: "neutral",
        variant: "subtle"
      }
    },
    card: {
      slots: {
        root: "bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700",
        header: "border-b border-neutral-300 dark:border-neutral-700",
        footer: "border-t border-neutral-300 dark:border-neutral-700"
      }
    },
    selectMenu: {
      defaultVariants: {
        color: "neutral",
        variant: "subtle"
      }
    },
    slideover: {
      slots: {
        content: 'p-8 overflow-y-auto "z-20"'
      }
    }
  }
});
