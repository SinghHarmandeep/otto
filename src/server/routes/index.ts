import * as express from "express";

import routes from './routers'
import register from './register'


const router = express.Router();

router.use(routes)
router.use(register)


export default router;