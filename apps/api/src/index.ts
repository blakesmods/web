import { createCors, error, json, Router, text } from "itty-router";

import dayjs from "dayjs";
import DayOfYear from "dayjs/plugin/dayOfYear";

dayjs.extend(DayOfYear);

import V2Router from "./routes/v2";

const router = Router({ base: "/" });
const { preflight, corsify } = createCors();

router.all("*", preflight);
router.get("/", () => text("The Blake's Mods API is running!"));
router.all("/v2/*", V2Router);
router.all("*", () => error(404));

export default {
  fetch(request: Request, env: Env): Promise<Response> {
    return router.handle(request, env).then(json).catch(error).then(corsify);
  }
};
