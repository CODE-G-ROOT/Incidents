import { Router } from "express";
import { validationResult } from "express-validator";
import validar_post_incidencias from "./post_val.js";

function validar(req, res, next) {
    const errors = validationResult(req);
    let errores = [];
    errors.errors.forEach(element => {
        errores.push(element.msg)
    });
    if (!errors.isEmpty()) {
        return res.status(400).json({ errores })
    } else next()
};

const DTO_incidents = Router();
DTO_incidents.post(validar_post_incidencias, (req, res ,next)=>{
    validar(req, res, next);
})

export default DTO_incidents;