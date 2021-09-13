import { Router } from "express";

const defaultRouter  = Router();

defaultRouter.get('',(req, res)=> {
    res.send('The Dude is here !');
})

export default defaultRouter;