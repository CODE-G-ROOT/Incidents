import { delete_user, delete_incidente } from "../../services/DELETE.js";

export const delete_user_controller = async (req, res, next) =>{
    try {
        
        const { id } = req.quey;
        const user = await delete_user(id);
        res.status(400).json({"User deleted": user});
    } catch (error) {
        res.status(500).send({
            message: error
        });
    };
};

export const delete_incidence_controller = async (req, res, next) => {
    try {
        
        const { id } = req.quey;
        const incidence = await delete_incidente(id);
        res.status(400).json({ "Incidence deleted": incidence });
    } catch (error) {
        res.status(500).send({
            message: error
        });
    };
}