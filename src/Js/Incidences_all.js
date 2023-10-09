const API = "http://localhost:5146";

export const FIND_incidence_all = (all) => {
    const { id, status, type } = all;

    if (id && !status && !type) FIND_by_id(Number(id));
    else if (!id && status && !type) FIND_by_status(status);
    else if (!id && !status && type) FIND_by_type(type);
    else if (id && status && type) FIND_ALL(all);
    else if (id && !status && type) FIND_by_id_and_type([id, type]);
    else if (!id && status && type) FIND_by_status_and_type([status, type]);
    else if (id && status && !type) FIND_by_id_and_status([id, status])
    else return {
        Error: 404,
        ErrorMessage: "Params not Found",
        Info: "This could be becouse you don't have anything the next params in your object; id, status, or type."
    };
};


const CALL_INCIDENCES_ALL = async () => {
    async function fetch_data() {
        try {
            const incidence_Data = await fetch('http://localhost:5146/incidencias/all');
            const datos = await incidence_Data.json();
            return datos
        } catch (error) {
            console.log(error);
        }
    }
}

const FIND_by_id = async (id) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?id=${id}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};


const FIND_by_status = async (status) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?status=${status}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};


const FIND_by_type = async (type) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?type=${type}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};

const FIND_by_id_and_type = async ([id, type]) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?id=${id}&type=${type}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};


const FIND_by_status_and_type = async ([status, type]) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?status=${status}&type=${type}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};



const FIND_by_id_and_status = async ([id, status]) => {
    try {
        const incidence_Data = await fetch(`${API}/incidencias/all?id=${id}&status=${status}`);
        const datos = await incidence_Data.json();
        return datos
    } catch (error) {
        console.log(error);
    }
};

