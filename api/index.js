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
    saveUninitialized: false ,
    cookie: {
        httpOnly: false
    }
}));


exp.use(passport.initialize());
exp.use(passport.session());
exp.use(cors(`http://${data.SERVER_FRONT.host}:${data.SERVER_FRONT.port}`))



//? Routes

exp.use(auth);
exp.use('/users' ,user);
exp.use('/incidencias', incidences);
exp.use("/", (req, res) => res.send("Home"));



// exp.use(express.static('public'));

// Redirecciona
// exp.get('/', (req, res) => res.redirect('/Bienvenidos'), (err, data) => {
//     err 
//         ? res.send('Error de carga del archivo')
//         : res.send(data)
// });


// exp.use('/Bienvenidos', auth);
// exp.use('/user', user)
// exp.use('/incidencias', incidences)

export default exp





