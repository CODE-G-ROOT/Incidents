import { Router } from "express";
const dashboard = Router();

dashboard.get('/', (req, res)=>{
    res.send('dashboard')
});

export default dashboard;
