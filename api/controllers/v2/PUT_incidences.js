
import { update_incidence } from "../../services/PUT.js";
import { rateLimit } from "express-rate-limit";

export const update_incidence_controller = async (req, res, next) => {
    try {
        const data = req.body;
        const { id } = req.query;
        const incidente = await update_incidence(id, data);

        incidente.length > 0
            ? res.status(302).send(user)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

        console.log(req.rateLimit);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
    next();
};