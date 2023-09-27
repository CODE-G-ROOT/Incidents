import { Router } from "express";
import passport from "../helpers/passport/passportHelper.js";


// ? Env Variables
import data from "../../auto_setting.js";


const auth = Router();


auth.get("/login", passport.authenticate("discord"));
auth.get("/login/redirect", passport.authenticate("discord", { failureRedirect: `http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}/Bienvenidos`, successRedirect: `http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}/entre`, }))


export default auth;







// auth.get('/', (req, res) => {
//     res.sendFile('main.jsx', { root: './src' });
// });

// auth.get('/logout', (req, res) => {
//     req.logout({}, err => console.log(err));
//     res.redirect('/Bienvenidos');
// })

// auth.get('/discord', passport.authenticate('discord'/* , { scope: ['email'] } */))
// auth.get('/discord/callback', passport.authenticate('discord', { failureRedirect: '/Bienvenidos', successRedirect: '/dashboard'}))



