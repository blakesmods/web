import { sentryCloudflareNitroPlugin } from "@sentry/nuxt/module/plugins";

export default defineNitroPlugin(
  sentryCloudflareNitroPlugin({
    dsn: "https://472cc4db584747768a1cb08281f678c4@o1148345.ingest.sentry.io/6219844",
    tracesSampleRate: 0.1
  })
);
