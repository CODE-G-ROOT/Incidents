import { Router } from "express";
const auth = Router();

auth.get('/', (req, res)=>{
    res.render('home')
});

export default auth;
