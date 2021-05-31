import * as express from "express";

const router = express.Router();


router.post('/contact',
    (req, res) => {
        //data from request
        let recipt = req.body;
        
        res.status(202).json({msg: 'contact sent',recipt});

    })

export default router;