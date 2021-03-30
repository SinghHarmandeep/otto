import * as express from "express";

import clientEnd from "./routers";
import findRide from "./findRide"

const router = express.Router();


router.use(clientEnd)
router.use(findRide)


export default router;