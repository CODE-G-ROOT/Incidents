import { delete_user, delete_incidente } from "../../services/DELETE.js";

export const delete_user_controller = async (req, res, next) => {
    try {
        const { id } = req.quey;
        const user = await delete_user(id);
        res.status(400).json({ "User deleted": user });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    };
};

export const delete_incidence_controller = async (req, res, next) => {
    try {
        const data = req.query;

        console.log(data);
        const incidence = await delete_incidente(data.id);
        console.log('aqui');

        if(incidence.encontrada.length === 0 ) return res.status(404).send({
            status: 404,
            message: "La incidencia ya ha sido eliminada",
            reference: "https://http.cat/404"
        });

        res.status(200).send({
            "Incidence deleted": incidence.encontrada,
            "deletedCounts": incidence.result.deletedCount,
        });
    } catch (error) {
        console.log(error);
        res.status(500).send({
            message: error
        });
    };
}