import * as express from 'express';

const router = express.Router();

import config from '../../config'
import { authenticate } from 'passport';

router.get('/getapi',
    authenticate('jwt'),
    (req, res) => {
        res.status(202).send(config.GMapAPI)
    })

export default router;