import express from 'express';
import session from 'express-session';
import cookieParser from 'cookie-parser';
import passport from 'passport';
import cors from 'cors';


//? Enviroment Variables
import data from '../auto_setting.js';


//? Routes Modules
import auth from './routers/auth.routes.js';
import user from './routers/users.routes.js';
import incidences from './routers/incidences.routes.js';


const exp = express();


exp.use(cookieParser());
exp.use(express.text());
exp.use(express.json());
exp.use(session({
    secret: 'ey',
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: false
    }
}));


exp.use(passport.initialize());
exp.use(passport.session());
exp.use(cors(`http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}`))


//? Routes

exp.use(auth);
exp.use('/users', user);
exp.use('/incidencias', incidences);
exp.use("/", (req, res) => res.send({
    Error: 404,
    ErrorMessage: "Page Not Found",
    ErrorReference: "https:http.cat/404"
}));


export default exp





