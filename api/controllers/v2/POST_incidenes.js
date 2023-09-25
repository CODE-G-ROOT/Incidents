import { rateLimit } from "express-rate-limit";
import { post_incidence } from "../../services/POST.js";

export const post_incidence_controller = async (req, res, next) => {
    try {

        const data = req.body
        const incidence = await post_incidence(data);

        if(incidence.error === 302)  return res.status(302).send(incidence)

        incidence.length > 0
            ? res.status(200).send({status:200, message: "The document has been sent"})
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
};