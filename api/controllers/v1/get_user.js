// SOLO SE OPTIENE UN USUARIO, Y ES EL USUARIO QUE ESTÁ VIENDO SU PROPIO PERFIL
import db from "../../connection/connection.js";
import rateLimit from "express-rate-limit"

// TODO: Parámetros a tener en cuenta:
//* id: Identificador del discord
//* rol: Rol asignado por discord -> este puede ser Usuario o admin
//* date: Fecha de filtro


export async function get_user(req, res, next){
    try {
        
        let query = {
            id: req.params.id
        };
        let collection = await db.collection('users');
        let results = await collection.users.aggregate([
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    rol: { $first: "$rol" },
                    number_phone: { $first: "$number_phone" },
                    email: { $first: "$email" },
                    creation_date: { $first: "$creation_date" }
                }
            },
            {
                $project: {
                    id: 1,
                    name: 1,
                    rol: 1,
                    number_phone: 1,
                    email: 1,
                    creation_date: {
                        date: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    }
                }
            }
        ]);

        results.lenght > 0 
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "User not Found",
                reference: "https://http.cat/404"
        });
        
        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: "Problemas en el server",
            error: error
        })
    }
};

export async function get_user_date(req, res, next){
    try {
        
        let query = { rol : req.params.rol };
        let collection = db.collection('users');
        let results = collection.aggregate([
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    rol: { $first: "$rol" },
                    number_phone: { $first: "$number_phone" },
                    email: { $first: "$email" },
                    creation_date: { $first: "$creation_date" }
                }
            },
            {
                $match: query
            },
            {
                $project: {
                    id: 1,
                    name: 1,
                    rol: 1,
                    number_phone: 1,
                    email: 1,
                    creation_date: {
                        date: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    }
                }
            }
        ]);

        results .lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "User don't found",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {
        
        console.error(error);
        res.status(500).send({
            message: "Problema en el server",
            reference: "https://http.cat/500"
        })
    }
};

export async function get_user_rol(req, res, next){
    try {
        
        let query = { rol : req.params.rol, creation_date: req.params.date };
        let collection = db.collection('users');
        let results = collection.aggregate([
            {
                $group: {
                    _id: "$_id",
                    name: { $first: "$name" },
                    rol: { $first: "$rol" },
                    number_phone: { $first: "$number_phone" },
                    email: { $first: "$email" },
                    creation_date: { $first: "$creation_date" }
                }
            },
            {
                $match: query
            },
            {
                $project: {
                    id: 1,
                    name: 1,
                    rol: 1,
                    number_phone: 1,
                    email: 1,
                    creation_date: {
                        date: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    }
                }
            },
            {
                $sort: { creation_date: 1 }
            }
        ]);

        results .lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "User don't found",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {
        
        console.error(error);
        res.status(500).send({
            message: "Problema en el server",
            reference: "https://http.cat/500"
        })
    }
};


