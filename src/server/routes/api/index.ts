import * as express from "express";

import routers from "./routers";

const router = express.Router();


router.use(routers)


export default router;