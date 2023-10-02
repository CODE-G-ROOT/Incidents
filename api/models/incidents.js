import { new_collection } from "../connection/connection.js";
import autoIncrementar from "../helpers/auto_increment.js";

class Incidents {
    _id;
    id;
    category;
    type;
    description;
    equipment;
    location;
    status;
    observation;
    creation_date;
    update_date;
    close_date;
    report_by;
    constructor() { }

    async connection() {
        try {
            const results = await new_collection("incidents");
            return results;
        } catch (error) {
            throw error;
        }
    }

    async get_incidences(data) {
        try {

            const con = await this.connection();

            const { id, status, category, type } = data;

            console.log(data);

            // restorna todas las incidencias
            if (!id && !status && !category && !type) return await con.aggregate([
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el id
            if (id && !status && !category && !type) return await con.aggregate([
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
                    $match: { "id": Number(id) }
                },
                {
                    $group: {
                        id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el estado
            if (!id && status && !category && !type) return await con.aggregate([
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
                    $match: { "status": status }
                },
                {
                    $group: {
                        id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna la categoria
            if (!id && !status && category && !type) return await con.aggregate([
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
                    $match: { "category": category }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el tipo
            if (!id && !status && !category && type) return await con.aggregate([
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
                    $match: { "type": type }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el estado y categoria
            if (!id && status && category && !type) return await con.aggregate([
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
                    $match: { "status": status, "category": category }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el estado y tipo
            if (!id && status && !category && type) return await con.aggregate([
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
                    $match: { "status": status, "type": type }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // retorna el categoria y tipo
            if (!id && !status && category && type) return await con.aggregate([
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
                    $match: { "category": category, "type": type }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

        } catch (error) {
            throw error
        }
    }

    async get_incidences_equipo(data) {
        try {

            const con = await this.connection();

            const { nam, mar, cod } = data;

            console.log(data);

            // trae todos los relacionados con nombre, marca y codigo
            if (nam && mar && cod) return con.aggregate([
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
                    $match: {
                        "equipment.name": nam,
                        "equipment.marca": mar,
                        "equipment.cod": cod,
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            // solo trae por nombre
            if (nam && !mar && !cod) return await con.aggregate([
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
                    $match: {
                        "equipment.name": nam
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //retorna por marca
            if (!nam && mar && !cod) return con.aggregate([
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
                    $match: {
                        "equipment.marca": mar
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //retorna por codigo
            if (!nam && !mar && cod) return con.aggregate([
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
                    $match: {
                        "equipment.cod": cod
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //retorna por nombre y marca
            if (nam && mar && !cod) return con.aggregate([
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
                    $match: {
                        "equipment.name": nam,
                        "equipment.marca": mar
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //retorna por nombre y codigo
            if (nam && !mar && cod) return con.aggregate([
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
                    $match: {
                        "equipment.name": nam,
                        "equipment.cod": cod
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //retorna por marca y codigo
            if (!nam && mar && cod) return con.aggregate([
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
                    $match: {
                        "equipment.marca": mar,
                        "equipment.cod": cod
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
            ]).toArray();

            //TODO  NOTA: 
            // Si le agregamos un parámetro mal escrito junto con otros parámetros
            // bien escritos, por alguna razón estos pasan la validación, 
            // queda pendiente construir algo que valide el nombre de los 
            // parámetros requeridos

        } catch (error) {
            throw error;
        }
    }

    async get_incidences_location(data) {
        try {

            const { are, piz, rom } = data;

            const con = await this.connection();

            console.log(data);

            // todo
            if (are && piz && rom) return await con.aggregate([
                {
                    $match: {
                        "location": {
                            "area": are,
                            "pizza": piz,
                            "room": rom
                        }
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // solo area
            if (are && !piz && !rom) return await con.aggregate([
                {
                    $match: {
                        "location.area": are
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            //solo pizza
            if (!are && piz && !rom) return await con.aggregate([
                {
                    $match: {
                        "location.pizza": piz,
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // solo room
            if (!are && !piz && rom) return await con.aggregate([
                {
                    $match: {
                        "location.room": rom
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // area y pizza
            if (are && piz && !rom) return await con.aggregate([
                {
                    $match: {
                        "location": {
                            "area": are,
                            "pizza": piz,
                        }
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // area y room 
            if (!are && !piz && rom) return await con.aggregate([
                {
                    $match: {
                        "location": {
                            "area": are,
                            "room": rom
                        }
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            // pizza y room
            if (!are && piz && rom) return await con.aggregate([
                {
                    $match: {
                        "location": {
                            "pizza": piz,
                            "room": rom
                        }
                    }
                },
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
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

        } catch (error) {
            throw error;
        }
    }

    async get_incidences_report(data) {
        try {

            const { id, nam } = data
            const con = await this.connection();

            if (id && !nam) return await con.aggregate([
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
                        id: { $first: "$id" },
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
                    $match: {
                        "report_by.id": Number(id)
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 1,
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
                            id: 1,
                            name: 1,
                            email: 1,
                        },
                    }
                },

            ]).toArray();

            if (nam && !id) return await con.aggregate([
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
                        id: { $first: "$id" },
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
                    $match: {
                        "report_by.name": nam
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 1,
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
                            id: 1,
                            name: 1,
                            email: 1,
                        },
                    }
                },

            ]).toArray();

        } catch (error) {
            throw error;
        }
    }

    async post_incidence(data) {
        try {
            const con = await this.connection();
            // almacena la data y la reparte
            const {
                category,
                type,
                description,
                equipment,
                location,
                status,
                observation,
                report_by,
            } = data;

            const validar = await con.findOne(data);
            console.log(validar);
            if (validar) return {
                error: 302,
                message: "This document already exist",
                document: validar
            };

            let new_id = await autoIncrementar("incidents", "id");

            let body = {
                "id": new_id,
                "category": category,
                "type": type,
                "description": description,
                "equipment": equipment,
                "location": location,
                "status": status,
                "observation": observation,
                "report_by": report_by,
                "creation_date": new Date(),
                "update_date": new Date(),
                close_date: null
            };
            const results = await con.insertOne(body);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async update_incidence(id, body) {
        try {

            const con = await this.connection();

            const {
                category,
                type,
                description,
                equipment,
                location,
                status,
                observation,
            } = body

            const doc_original = await con.aggregate([
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
                    $match: { "id": Number(id) }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            const result = await con.updateOne(
                {
                    id: Number(id)
                },
                {
                    $set: {
                        category: category,
                        type: type,
                        description: description,
                        equipment: equipment,
                        location: location,
                        status: status,
                        observation: observation,
                        update_date: new Date(),
                    }
            });

            const doc_update = await con.aggregate([
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
                    $match: { "id": Number(id) }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
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
                        _id: 0,
                        id: 1,
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
                    $sort: { creation_date: 1 }
                }
            ]).toArray();

            if (result.modifiedCount === 1) return {
                error: 200,
                message: "Document update",
                last_update: doc_original,
                new_update: doc_update
            }

            return result;
        } catch (error) {
            throw error;
        }
    }

    async delete_incidente(id) {
        try {
            const con = await this.connection();
            const encontrada = await con.find({ "id": Number(id) }).toArray();
            const result = await con.deleteOne({ "id": parseInt(id) });
            console.log(result);
            return {
                encontrada,
                result
            };
        } catch (error) {
            throw error
        }
    }
}

export default Incidents