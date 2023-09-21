import { validationResult } from "express-validator";

export const post_create_incidence = async (req, res, next) => {
    const errors = validationResult(req);

    if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

    let {
        id,
        category,
        type,
        description,
        equipment,
        location,
        status,
        observation,
        creation_date,
        update_date,
        close_date,
        report_by
    } = req.body;

    let data = {
        "id" : id,
        "category" : category,
        "type" : type,
        "description" : description,
        "equipment" : equipment,
        "location" : location,
        "status" : status,
        "observation" : observation,
        "creation_date" : creation_date,
        "update_date" : update_date,
        "close_date" : close_date,
        "report_by" : report_by,
    };

    for (const key in data){
        if(data[key]) delete data[key]
    };

    req.body = data;
    next();
};
