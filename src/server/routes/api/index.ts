import * as express from "express";

import clientEnd from "./routers";
import findRide from "./findRide";
import contact from "./contact";
// import fileRouts from './fileUploadRouts'

const router = express.Router();

// router.use(fileRouts)
router.use(findRide)
router.use(contact)
router.use(clientEnd)

export default router;