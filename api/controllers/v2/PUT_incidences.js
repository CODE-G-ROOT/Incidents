
import { update_incidence } from "../../services/PUT.js";

export const update_incidence_controller = async (req, res, next) => {
    try {
        const body = req.body;
        const { id } = req.query;
        const incidente = await update_incidence(id, body);

        incidente.error === 200
            ? res.status(200).send(incidente)
            : res.status(400).send({
                message: "Query not found",
                reference: "https://http.cat/400"
            });

    } catch (error) {

        console.error(error);
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
    next();
};