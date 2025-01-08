import * as Sentry from "@sentry/nuxt";

Sentry.init({
  dsn: "https://472cc4db584747768a1cb08281f678c4@o1148345.ingest.sentry.io/6219844",
  tracesSampleRate: 0.1,
  environment: process.env.NODE_ENV || "development"
});
