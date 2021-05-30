import * as express from "express";

import api from './api'
import auth from './auth/'


const router = express.Router();


//oreder in which routs are placed matters alwarys rememebr that
router.use(auth)
router.use(api)


export default router;