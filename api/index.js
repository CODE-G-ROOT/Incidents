import express from 'express';
import auth from './routers/auth.routes.js';
import dashboard from './routers/dashboard.routes.js';
import incidences from './routers/incidences.routes.js';
import user from './routers/users.routes.js';
import { Session } from 'express-session';
import data from '../auto_setting.js';
const exp = express();



// SETTINGS
exp.set('view engine', 'ejs'); 
exp.set('views', '/home/spukM01-003/Documents/GitHub/Incidents/api/views'); 


// Midlewares



// Routes

exp.use(express.json());
exp.use('/auth', auth)
exp.use('/dashboard', dashboard)

exp.use('/user', user)
exp.use('/incidencias', incidences)


// Global Variables


export default exp





