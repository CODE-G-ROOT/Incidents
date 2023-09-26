import { check } from "express-validator";

const validar_post_incidencias = [
    check("category")
        .notEmpty().withMessage("category field cannot be empty")
        .isString().withMessage("category field must be type string")
        .matches(/^[a-zA-Z]+$/).withMessage("category field cannot have numbers o symbols"),

    check("type")
        .notEmpty().withMessage("type field cannot be empty")
        .isString().withMessage("type field must be type string")
        .matches(/^[a-zA-Z]+$/).withMessage("category field cannot have numbers o symbols"),

    check("description")
        .notEmpty().withMessage("description field cannot be empty")
        .isString().withMessage("description field must be type string"),

    check("equipment")
        .notEmpty().withMessage("equipment field cannot be empty")
        .isObject().withMessage("equipment filed must be type object"),

    check("equipment.name")
        .notEmpty().withMessage("name field cannot be empty")
        .isString().withMessage("name filed must be type string"),

    check("equipment.marca")
        .notEmpty().withMessage("marca field cannot be empty")
        .isString().withMessage("marca filed must be type string"),

    check("equipment.cod")
        .notEmpty().withMessage("cod field cannot be empty")
        .isString().withMessage("cod filed must be type string")
        .isAlphanumeric().withMessage("cod file just must be alphanumeric string"),

    check("location")
        .notEmpty().withMessage("location field cannot be empty")
        .isObject().withMessage("location field must be type JSON")
        .matches(/^[a-zA-Z]+$/).withMessage("location field cannot have numbers o symbols"),,

    check("location.area")
        .notEmpty().withMessage("area field cannot be empty")
        .isString().withMessage("area filed must be type string")
        .matches(/^[a-zA-Z]+$/).withMessage("area field cannot have numbers o symbols"),

    check("location.salón")
        .notEmpty().withMessage("salon field cannot be empty")
        .isString().withMessage("salon filed must be type string"),

    check("status")
        .notEmpty().withMessage("status field cannot be empty")
        .isString().withMessage("status field must be type string")
        .matches(/^[a-zA-Z]+$/).withMessage("status field cannot have numbers o symbols"),

    check("observation")
        .notEmpty().withMessage("optional field is required and must be type string")
        .isString().withMessage("type field must be type string"),

    check("report_by")
        .notEmpty().withMessage("report_by field cannot be empty")
        .isInt().withMessage("report_by field must be type")
        .not()
        .isString().withMessage("report_by field must be type int")
];

export default validar_post_incidencias;