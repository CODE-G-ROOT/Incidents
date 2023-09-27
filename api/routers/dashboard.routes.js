import { Router } from "express";
import checkAuthentication from './helpers/passport/auth.js';

const dashboard = Router();
dashboard.get('/dashboard', checkAuthentication, (req, res) => {
    res.sendFile('dashboard.jsx', { root: '../src/components'});
});
export default dashboard;
