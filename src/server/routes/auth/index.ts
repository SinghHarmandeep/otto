import * as express from "express";

import login from "./login";
import register from "./register";

const router = express.Router();


router.use(login)
router.use(register)


export default router;