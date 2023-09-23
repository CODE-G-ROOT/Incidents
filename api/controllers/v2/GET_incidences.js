// import { use } from "passport";
import * as services from "../../services/GET.js";
import { rateLimit } from "express-rate-limit";

//*check
export const get_user_controller = async (req, res, next) => {
    try {

        const data = req.query;
        
        console.log(data);

        const user = await services.get_user_id(data);

        user.length > 0
            ? res.status(302).send(user)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        // console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
    }
    next();
};

//*check
export const get_incidences_controller = async (req, res, next) => {
    try {
        
        const data = req.query;
        
        console.log(data);

        const incidence = await services.get_incidences(data);

        incidence.length > 0
            ? res.status(302).send(incidence)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);;
        res.status(500).json({
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
    next();
};

//TODO PENDIENTE
export const get_incidences_equipo_controller = async (req, res, next) => {
    try {

        const data = req.query;

        // console.log(data);

        const incidence = await services.get_incidences_equipo(data);

        console.log(incidence);

        incidence.length > 0
            ? res.status(302).send(incidence)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        // console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: error.message,
            reference: "https://http.cat/500"
        })
    }
    next();
};

export const get_incidences_location_controller = async (res, req, next) => {
    try {
        const { area, pizza, room } = req.query;
        const incidence = await get_incidences_location(area, pizza, room);

        incidence.length > 0
            ? res.status(302).send(incidence)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);;
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
    next();
};

export const get_incidences_report_controller = async (res, req, next) => {
    try {
        const { id } = req.query;
        const incidence = await get_incidences_report(id);

        incidence.length > 0
            ? res.status(302).send(incidence)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);;
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
    next();
};

