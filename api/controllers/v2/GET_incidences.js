import { get_incidences, get_incidences_date, get_incidences_equipo, get_incidences_location, get_incidences_report, get_incidences_state, get_user, get_user_date, get_user_rol } from "../../services/GET.js";
import { rateLimit } from "express-rate-limit";

export const get_user = async (req, res, next) => {
    try {
        const { id } = req.query;
        const user = await get_user(id);

        user.length > 0 
            ? res.status(302).send(user)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
    }
};

export const get_user_date = async (req, res, next) => {
    try {
        const { date } = req.query;
        const user = await get_user_date(date);

        user.length > 0 
            ? res.status(302).send(user)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            })

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
}