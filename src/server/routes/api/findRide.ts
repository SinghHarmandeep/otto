import * as express from "express";
import * as passport from 'passport';

const router = express.Router();


router.post('/findride',
    passport.authenticate('jwt'),
    (req, res) => {
        //data from request
        let order = req.body;
        console.log(order);
        
        //user info after verifing
        let user = req.user
        console.log(user);
        
        res.status(201).json({order, user});

    })

export default router;