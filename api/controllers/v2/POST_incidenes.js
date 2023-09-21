import { rateLimit } from "express-rate-limit";
import { post_incidence } from "../../services/POST";

export const post_incidence = async (req, res, next) => {
    if (!rateLimit) return;
    try {

        const data = req.body
        const incidence = await post_incidence(data);

        incidence.length > 0
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
};