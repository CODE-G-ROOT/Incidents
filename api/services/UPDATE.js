import Incidents from "../collections/incidents.js";

const incident = new Incidents();

export const update_incidence = async(id) => {
    return await incident.update_incidence({"id": parseInt(id)});
};
