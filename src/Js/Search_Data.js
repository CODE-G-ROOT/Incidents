import { FIND_incidence_all } from "./Incidences_all.js";

export const callme = async (p) => {

    const { method, data } = p;
    if (method === "GET") return await FIND_data(data)
    // else if (method === "POST") return POST_data(data);
    // else if (method === "PUT") return PUT_data(data);
    // else if (method === "DELETE") return DELTE_data(data);
    else return {
        Error: 404,
        ErrorMessage: "Method not found",
        Info: "This could be because method isn't GET, PUT, POST or DELETE "
    };
};

const FIND_data = async (body) => {

    // no olvidar cambiar de incidencia a incidence en el endpoint del backend
    if (body.incidence) return await FIND_incidence(body.incidence)
    // else if (body.users) return FIND_users(body.users);
    else return {
        "Error": 404,
        ErrorMessage: "Data not found",
        Info: "This could be because data isn't incidences or users "
    };
};



//? de aquí para abajo solo se tratará incidencias
const FIND_incidence = async (incidencia) => {
    
    if (incidencia.all)return await FIND_incidence_all(incidencia.all);
    // else if (incidencia.equipo) FIND_incidence_location(incidencia.equipo);
    // else if (incidencia.location) FIND_incidence_equipo(incidencia.location)
    else return {
        Error: 404,
        ErrorMessage: "Params Not Found",
        Info: "This could be, you don't have anything the next params in your object: all, equipo, location"
    }
};

