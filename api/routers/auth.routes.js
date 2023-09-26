import { Router } from "express";
import passport from "passport";
const auth = Router();


auth.get('/', (req, res)=>{
    res.render('home')
});

auth.get('/login', passport.authenticate('discord'));

export default auth;
