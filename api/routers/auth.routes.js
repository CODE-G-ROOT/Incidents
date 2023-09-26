import { Router } from "express";
const auth = Router();

auth.get('/', (req, res)=>{
    res.send('HOME')
});

export default auth;
