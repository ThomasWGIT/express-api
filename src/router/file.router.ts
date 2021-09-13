import { Router } from "express";

const fileRouter  = Router();

fileRouter.get('/:id', (req, res) => {

    res.json({
        "name": "dude",
        "age": 12,
        "active": true
    })
})

export default fileRouter;