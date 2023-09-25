import Incidents from "../collections/incidents.js";
import User from "../collections/users.js";

// relaciona los métodos de la clase con los controladores
const incidents = new Incidents();
const user = new User();

// si hay id en los parámetros, lo pasa, si no, lanza todos
export const get_user_id = async(data) => {
    return await user.get_user(data);
};

// obtiene todas las incidencias o solo una incidencia según el parámetro
export const get_incidences = async(data) => {
    return await incidents.get_incidences(data);
};

// organiza las incidencias por fechas de la más reciente a la menos reciente
export const get_incidences_date = async() => {
    return await incidents.get_incidences_date();
};

export const get_incidences_state = async(status) => {
    return await incidents.get_incidences_state(status);
};

// incidencia por equipos; esta también es dinámica
export const get_incidences_equipo = async(data) => {
    return await incidents.get_incidences_equipo(data);
};

// ubicación de la incidencia; esta es dinámica
export const get_incidences_location = async(data) => {
    return await incidents.get_incidences_location(data);
};

// retorna la incidencia de la persona relacionada con el id
export const get_incidences_report = async(data) => {
    return await incidents.get_incidences_report(data);
};
