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

    async get_incidences(id) {
        try {

            const con = await this.connection();

            // si hay id, retorna todas las incidencias
            if (!id) return await con.aggregate([
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
            ]).toArray();

            // si hay id, retorna solo el id requerido
            return await con.aggregate([
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
            ]).toArray();

        } catch (error) {
            throw error
        }
    }

    async get_incidences_date() {
        try {

            const con = await this.connection();

            return await con.aggregate([
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
            ]).toArray();

        } catch (error) {
            throw error;
        }
    }

    async get_incidences_state(status) {
        try {

            const con = await this.connection();
            const result = await con.aggregate([
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
            ]).toArray();
            return result;

        } catch (error) {
            throw error
        }
    }

    async get_incidences_equipo(nam, mar, cod) {
        try {

            const con = await this.connection();
            if (nam && mar && cod) {
                const result = con.aggregate([
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
                            equipment: {
                                name: nam,
                                marca: mar,
                                cod: cod
                            }
                        }
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

                return result;
            }

            else if (nam && mar) {
                const result = con.aggregate([
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
                            equipment: {
                                name: nam,
                                marca: mar
                            }
                        }
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

                return result;
            }

            else if (nam && cod) {
                const result = con.aggregate([
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
                            equipment: {
                                name: nam,
                                cod: cod
                            }
                        }
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

                return result;
            }

            else if (mar) {
                const result = con.aggregate([
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
                            equipment: {
                                marca: mar,
                            }
                        }
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

                return result;
            }

            else if (cod) {
                const result = con.aggregate([
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
                            equipment: {
                                cod: cod
                            }
                        }
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

                return result;
            }

            else if (nam) {
                const result = con.aggregate([
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
                            equipment: {
                                name: nam
                            }
                        }
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

                return result;
            };

        } catch (error) {
            throw error;
        }
    }

    async get_incidences_location(area, pizza, room) {
        try {

            const con = await this.connection();

            if (area && pizza && room) {
                const results = con.aggregate([
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
                            location: {
                                "area": area,
                                "pizza": pizza,
                                "room": room
                            }
                        }
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

                return results;
            }

            else if (area && room) {
                const results = con.aggregate([
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
                            location: {
                                "area": area,
                                "room": room
                            }
                        }
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

                return results;
            }

            else if (area && pizza) {
                const results = con.aggregate([
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
                            location: {
                                "area": area,
                                "pizza": pizza,
                            }
                        }
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

                return results;
            }

            else if (area) {
                const results = con.aggregate([
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
                            location: {
                                "area": area,
                            }
                        }
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

                return results;
            }

            else if (pizza && room) {
                const results = con.aggregate([
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
                            location: {
                                "pizza": pizza,
                                "room": room
                            }
                        }
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

                return results;
            }

            else if (pizza && area) {
                const results = con.aggregate([
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
                            location: {
                                "area": area,
                                "pizza": pizza,
                            }
                        }
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

                return results;
            }

            else if (pizza) {
                const results = con.aggregate([
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
                            location: {
                                "pizza": pizza,
                            }
                        }
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

                return results;
            };

        } catch (error) {
            throw error;
        }
    }

    async get_incidences_report(id) {
        try {

            const con = await this.connection();

            const results = con.aggregate([
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
                        report_by: id
                    }
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

            return results;
        } catch (error) {
            throw error;
        }
    }

    async post_incidence(data) {
        try {
            const con = await this.connection();
            let new_id = await autoIncrementar("incidents");
            let body = { "id": new_id, ...data, "creation_date": new Date(data.creation_date), "update_date": new Date(data.update_date), close_date: null };
            const results = await con.inserOne(body);
            return results;
        } catch (error) {
            throw error;
        }
    }

    async update_incidence(id) {
        try {
            const con = await this.connection();
            let body = { ...data, "update_date": new Date(data.update_date) };
            const result = await con.updateOne(
                { "id": parseInt(id) },
                { $set: body }
            );
            return result;
        } catch (error) {
            throw error;
        }
    }

    async delete_incidente(id){
        try {
            const con = await this.connection();
            const result = await con.deleteOne({"id": parseInt(id)});
            return result;
        } catch (error) {
            
        }
    }
}

export default Incidents