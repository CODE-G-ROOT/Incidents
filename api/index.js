import express from 'express';
// import * as ejs from 'ejs';
import auth from './routers/auth.routes.js';
import dashboard from './routers/dashboard.routes.js';
import incidences from './routers/incidences.routes.js';
import user from './routers/users.routes.js';

const exp = express();

// SETTINGS

// Routes

exp.use(express.json());
exp.use('/auth', auth)
exp.use('/dashboard', dashboard)

exp.use('/user', user)
exp.use('/incidencias', incidences)
export default exp


