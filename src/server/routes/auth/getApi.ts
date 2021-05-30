import * as express from 'express';

const router = express.Router();

import { authenticate } from 'passport';

router.get(
    '/getapi',
    authenticate('jwt'),
    (req, res) => {
        res.status(202).json('ohhh bullshit')
    })

export default router;