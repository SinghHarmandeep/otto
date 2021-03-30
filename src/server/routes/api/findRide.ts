import * as express from "express";

const router = express.Router();


router.post('/findride', (req, res) => {
    let order = req.body;
    
    res.status(201).json(order);
})

export default router;