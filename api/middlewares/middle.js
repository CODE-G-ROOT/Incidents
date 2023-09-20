import { check } from "express-validator";

const user = [
    check("id")
        .notEmpty().withMessage("Id field cannot be empty")
        .isNumeric().withMessage("Id field must be type numeric"),

    check("rol")
        .notEmpty().withMessage("Id rol cannot be empty")
        .isString().withMessage("rol field must be string field"),

    check("number_phone")
        .optional()
        .isString().withMessage("number phone field must be type string"),

    check("email")
        .notEmpty().withMessage("email field cannot be empty")
        .isString().withMessage("email field must be type string"),

    check("creation_date")
        .notEmpty().withMessage("creation date field cannot be empty")
        .isDate().withMessage("creation date field must be date type")
];

const incidents = [
    check("id")
        .notEmpty().withMessage("Id field cannot be empty")
        .isNumeric().withMessage("Id field must be type numeric"),

    check("category")
        .notEmpty().withMessage("category field cannot be empty")
        .isString().withMessage("category field must be type string"),

    check("type")
        .notEmpty().withMessage("type field cannot be empty")
        .isString().withMessage("type field must be type string"),

    check("description")
        .notEmpty().withMessage("description field cannot be empty")
        .isString().withMessage("description field must be type string"),

    check("equipment")
        .notEmpty().withMessage("equipment field cannot be empty")
        .isJSON().withMessage("equipment field must be type JSON"),

    check("location")
        .notEmpty().withMessage("location field cannot be empty")
        .isJSON().withMessage("location field must be type JSON"),

    check("status")
        .notEmpty().withMessage("status field cannot be empty")
        .isString().withMessage("status field must be type string"),

    check("observation")
        .optional().withMessage("optional field is optional")
        .isString().withMessage("type field must be type string"),

    check("creation_date")
        .notEmpty().withMessage("creation_date field cannot be empty")
        .isDate().withMessage("creation_date field must be type date"),

    check("update_date")
        .notEmpty().withMessage("update_date field cannot be empty")
        .isDate().withMessage("update_date field must be type date"),

    check("close_date")
        .optional().withMessage("update_date field is optional")
        .isDate().withMessage("update_date field must be type date"),

    check("report_by")
        .notEmpty().withMessage("report_by field cannot be empty")
        .isString().withMessage("report_by field must be type string"),
];

export {user, incidents};