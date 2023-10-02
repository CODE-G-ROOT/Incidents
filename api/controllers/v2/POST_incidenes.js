// import { rateLimit } from "express-rate-limit";
import { post_incidence } from "../../services/POST.js";

export const post_incidence_controller = async (req, res, next) => {
    try {

        const data = req.body;
        const incidence = await post_incidence(data);
        console.log(incidence);

        incidence.error === 302
            ? res.status(302).send(incidence)
            : res.status(200).send({ status: 200, message: "The document has been successfully sent" })

    } catch (error) {
        console.error(error);
        res.status(500).json({
            message: error,
            reference: "https://http.cat/500"
        })
    }
};