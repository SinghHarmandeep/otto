import * as express from "express";

import routes from './routers'

const router = express.Router();

router.use(routes)

export default router;