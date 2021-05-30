import * as express from "express";

import login from "./login";
import register from "./register";
import getApi from './getApi'

const router = express.Router();

router.use(getApi)
router.use(login)
router.use(register)


export default router;