import db from "../../connection/connection.js";
import rateLimit from "express-rate-limit";

//* sta: estado de la incidencia:
//todo bueno, "malo", "dañado", "vuelto...", 
//todo "necesita mantenimiento", "Rechazado", 
//todo "Necesita más Información", "en proceso", "Resuelto"

//* nam_eq: nombre del equipo
//? id: hace referencia al usuario del reporte
//* are: hace referencia al area en ubicación
//? pz: hace referencia a la piizza en ubicación
//* rm: hace referencia a la habitación o sala. Eje: Sputnik

const collection = db.collection("incidents");

export async function get_incidences(req, res, next) {

    try {
        let results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            }
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "Sin incidencias",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            messsage: "internal server error",
            reference: "https://http.cat/500"
        })
    };
    next();
};

export async function get_incidences_date(req, res, next) {
    try {

        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
            {
                $sort: {
                    creation_date: 1,
                    update_date: 1,
                }
            }
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "Incidences not found",
                reference: "https://http.cat/404"
            })

        console.log(req.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        })
    };
    next();
};

export async function get_incidences_state(req, res, next) {
    try {

        const query = { status: req.params.sta }
        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "No hay incidencias con ese estado",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {

        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        })
    };
    next();
};

export async function get_incidences_equipo(req, res, next) {
    try {

        const query = {
            nam: req.params.nam_qe,
            mar: req.params.mar_qe,
            cod: req.params.cod_qe,
        };

        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "incidencia no encontrada",
                reference: "https://http.cat/404"
            });

            console.log(res.rateLimit);

    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        });
    };;
    next();
};

export async function get_incidences_location(req, res, next){
    try {
        
        const query = {
            location: {
                area: req.params.are,
                pizza: req.params.pz,
                room: req.params.rm,
            }
        };

        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "query don't found",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {
        
        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        });
    };
    next();
};

export async function get_incidences_report(req, res, next){
    try {
        
        const query = { report_by: req.params.id };
        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.sta(404).send({
                message: "query not found",
                reference: "https://http.cat/404"
            });

        console.log(req.rateLimit);

    } catch (error) {
        
        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        })    
    };
    next();
};

export async function get_incidences_id(req, res, next){
    try {
        
        const query = {
            id : req.params.id
        };

        const results = collection.aggregate([
            {
                $lookup: {
                    from: "users",
                    localField: "report_by",
                    foreignField: "id",
                    as: "report"
                }
            },
            {
                $unwind: "$report"
            },
            {
                $match: query
            },
            {
                $group: {
                    _id: "$_id",
                    category: { $first: "$category" },
                    type: { $first: "$type" },
                    description: { $first: "$description" },
                    equipment: { $first: "$equipment" },
                    location: { $first: "$location" },
                    status: { $first: "$status" },
                    observation: { $first: "$observation" },
                    creation_date: { $first: "$creation_date" },
                    update_date: { $first: "$update_date" },
                    close_date: { $first: "$close_date" },
                    report_by: { $addToSet: "$report" },
                }
            },
            {
                $project: {
                    category: 1,
                    type: 1,
                    description: 1,
                    equipment: 1,
                    location: 1,
                    status: 1,
                    observation: 1,
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
                    },
                    update_date: {
                        date: {
                            $dateToString: {
                                date: "$update_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$creation_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    close_date: {
                        date: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%Y-%m-%d"
                            }
                        },
                        hour: {
                            $dateToString: {
                                date: "$close_date",
                                format: "%H:%M:%S"
                            }
                        }
                    },
                    report_by: {
                        name: 1,
                        email: 1,
                    },
                }
            },
            {
                $sort: {
                    id: 1
                }
            }
        ]);

        results.lenght > 0
            ? res.status(302).send(results)
            : res.status(404).send({
                message: "not found",
                reference: "https://http.cat/404"
            });

    } catch (error) {
        
        console.error(error);
        res.status(500).send({
            message: error,
            reference: "https://http.cat/500"
        })
    };
    next();
};
