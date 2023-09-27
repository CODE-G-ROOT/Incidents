import Incidents from "../models/incidents.js";

const incident = new Incidents();

export const post_incidence = async (data) => {
    return await incident.post_incidence(data);
};