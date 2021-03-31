import * as express from "express";
import * as passport from 'passport';

const router = express.Router();


router.post('/findride', passport.authenticate('jwt'), (req, res) => {
    let order = req.body;

    res.status(201).json(order);
    
})

export default router;