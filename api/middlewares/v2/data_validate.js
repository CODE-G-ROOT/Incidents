import { check } from "express-validator";

const incidencia = {
    id: "ID",
    category: "categoria",
    type: "tipo",
    description: "descripcion",
    equipment: "quipo",
    location: "ubicacion",
    status: "estado",
    observation: "observacion",
    creation_date: "fecha_creación",
    update_date: "fecha_actualización",
    close_date: "fecha_cierre",
    report_by: "reportado_por"
};

const users = {
    id: "id",
    rol: "rol",
    number_phone: "number_phone",
    email: "email",
    creation_date: "creation_date",
}

const incidents = [
    check(`${incidencia.id}`)
        .notEmpty().withMessage("Id field cannot be empty")
        .isNumeric().withMessage("Id field must be type numeric"),

    check(`${incidencia.category}`)
        .notEmpty().withMessage("category field cannot be empty")
        .isString().withMessage("category field must be type string"),

    check(`${incidencia.type}`)
        .notEmpty().withMessage("type field cannot be empty")
        .isString().withMessage("type field must be type string"),

    check(`${incidencia.description}`)
        .notEmpty().withMessage("description field cannot be empty")
        .isString().withMessage("description field must be type string"),

    check(`${incidencia.equipment}`)
        .notEmpty().withMessage("equipment field cannot be empty")
        .isJSON().withMessage("equipment field must be type JSON"),

    check(`${incidencia.location}`)
        .notEmpty().withMessage("location field cannot be empty")
        .isJSON().withMessage("location field must be type JSON"),

    check(`${incidencia.status}`)
        .notEmpty().withMessage("status field cannot be empty")
        .isString().withMessage("status field must be type string"),

    check(`${incidencia.observation}`)
        .optional().withMessage("optional field is optional")
        .isString().withMessage("type field must be type string"),

    check(`${incidencia.creation_date}`)
        .notEmpty().withMessage("creation_date field cannot be empty")
        .isDate().withMessage("creation_date field must be type date"),

    check(`${incidencia.update_date}`)
        .notEmpty().withMessage("update_date field cannot be empty")
        .isDate().withMessage("update_date field must be type date"),

    check(`${incidencia.close_date}`)
        .optional().withMessage("update_date field is optional")
        .isDate().withMessage("update_date field must be type date"),

    check(`${incidencia.report_by}`)
        .notEmpty().withMessage("report_by field cannot be empty")
        .isString().withMessage("report_by field must be type string"),
];

const user = [
    check(`${users.id}`)
        .notEmpty().withMessage("Id field cannot be empty")
        .isNumeric().withMessage("Id field must be type numeric"),

    check(`${users.rol}`)
        .notEmpty().withMessage("Id rol cannot be empty")
        .isString().withMessage("rol field must be string field"),

    check(`${users.number_phone}`)
        .optional()
        .isString().withMessage("number phone field must be type string"),

    check(`${users.email}`)
        .notEmpty().withMessage("email field cannot be empty")
        .isString().withMessage("email field must be type string"),

    check(`${users.creation_date}`)
        .notEmpty().withMessage("creation date field cannot be empty")
        .isDate().withMessage("creation date field must be date type")
];

export { incidents, user };