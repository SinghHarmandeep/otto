import * as express from "express";
import { authenticate } from 'passport';

const router = express.Router();


router.post('/findride',
    authenticate('jwt'),
    (req, res) => {
        //data from request
        let order = req.body;

        //user info after verifing
        let user = req.user

        res.status(201).json({ order, user });

    })

export default router;