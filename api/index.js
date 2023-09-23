import express from 'express';
import app from './routers/router.js';
const exp = express();


exp.use(express.json());
exp.use('/', app)
export default exp


