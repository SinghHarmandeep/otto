import * as express from "express";

import clientEnd from "./routers";
import findRide from "./findRide";
import contact from "./contact";

const router = express.Router();


router.use(clientEnd)
router.use(findRide)
router.use(contact)

export default router;