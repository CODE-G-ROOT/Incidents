import Incidents from "../collections/incidents.js";
import User from "../collections/users.js";


const incidents = new Incidents();
const user = new User();
// se exportan constantes que son funciones que instancian
// las clases ya construidas para poder utilizar sus metodos
export const get_user = async(id) => {
    return await user.get_user(id);
};

// retorna el listado de usuarios ordenados por fecha de creación
export const get_user_date = async(date) => {
    return await user.get_user_date(date);
};

// obtiene todos los usuarios relacionados a ese rol
export const get_user_rol = async(rol) => {
    return await user.get_user_rol(rol);
};

// obtiene todas las incidencias o solo una incidencia según el parámetro
export const get_incidences = async(id) => {
    return await incidents.get_incidences(id);
};

// organiza las incidencias por fechas de la más reciente a la menos reciente
export const get_incidences_date = async() => {
    return await incidents.get_incidences_date();
};

export const get_incidences_state = async(status) => {
    return await incidents.get_incidences_state(status);
};

// incidencia por equipos; esta también es dinámica
export const get_incidences_equipo = async(nam, mar, cod) => {
    return await incidents.get_incidences_equipo(nam, mar, cod);
};

// ubicación de la incidencia; esta es dinámica
export const get_incidences_location = async(area, pizza, room) => {
    return await incidents.get_incidences_location(area, pizza, room);
};

// retorna la incidencia de la persona relacionada con el id
export const get_incidences_report = async(id) => {
    return await incidents.get_incidences_report(id);
};
