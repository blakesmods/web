import router from "./router";

export interface Env {
  REALM_APP_ID: string;
  REALM_API_KEY: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return router.handle(request, env);
  }
};
