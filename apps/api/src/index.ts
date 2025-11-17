import { app } from "./app";

const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await app.listen({ host: "0.0.0.0", port: +port });

    app.blipp();
    console.log(`🚀 Server is running on port ${port}!`);
  } catch (err) {
    app.log.error(err);
    console.log(err);
    process.exit(1);
  }
};

start();
