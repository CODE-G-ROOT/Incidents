import User from "../models/users.js";
import Incidents from "../models/incidents.js";

const user = new User();
const incident = new Incidents();

export const delete_user = async(id) =>{
    return user.delete_user({"id": parseInt(id) });
};

export const delete_incidente = async(id) => {
    return incident.delete_incidente(id);
};

