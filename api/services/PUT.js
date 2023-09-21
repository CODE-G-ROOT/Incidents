import Incidents from "../collections/incidents.js";

const incident = new Incidents();

export const update_incidence = async(id, data) => {
    return await incident.update_incidence(id, data);
};
