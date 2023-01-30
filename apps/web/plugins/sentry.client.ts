import * as Sentry from "@sentry/vue";
import { Integrations } from "@sentry/tracing";

export default defineNuxtPlugin(nuxtApp => {
  const config = useRuntimeConfig();
  const vueApp = nuxtApp.vueApp;

  console.log("Sentry dsn:", config.public.SENTRY_DSN);
  console.log("Vercel environment:", config.public.VERCEL_ENV);

  Sentry.init({
    app: vueApp,
    dsn: config.public.SENTRY_DSN,
    integrations: [
      new Integrations.BrowserTracing({
        routingInstrumentation: Sentry.vueRouterInstrumentation(
          nuxtApp.$router
        ),
        tracePropagationTargets: ["localhost", "blakesmods.com", /^\//]
      } as any)
    ],
    logErrors: false,
    tracesSampleRate: 1,
    environment: config.public.VERCEL_ENV || "development",
    beforeSend: (event, hint) => {
      // Check if it is an exception, and if so, log it.
      if (event.exception) {
        console.error(
          `[Exception handled by Sentry]: (${hint.originalException})`,
          { event, hint }
        );
      }
      // Continue sending to Sentry
      return event;
    }
  } as any);
});
