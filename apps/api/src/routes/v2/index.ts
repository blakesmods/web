import { Router } from "itty-router";
import { DatabaseMiddleware } from "../../middleware/database";

import BadgesRouter from "./badges";
import FilesRouter from "./files";
import ModsRouter from "./mods";

const router = Router({ base: "/v2" });

router.all("*", DatabaseMiddleware);

router.all("/badges/*", BadgesRouter);
router.all("/files/*", FilesRouter);
router.all("/mods/*", ModsRouter);

export default router.handle;
