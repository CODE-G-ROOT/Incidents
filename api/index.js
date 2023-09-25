import express from 'express';
import auth from './routers/auth.routers.js';
import dashboard from './routers/dashboard.routers.js';
import incidences from './routers/incidences.routers.js';
import user from './routers/users.routers.js';

const exp = express();


exp.use(express.json());
exp.use('/auth', auth)
exp.use('/dashboard', dashboard)

exp.use('/user', user)
exp.use('/incidencias', incidences)
export default exp


