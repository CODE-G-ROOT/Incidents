import { new_collection } from "../connection/connection.js";

class User {
    _id;
    id;
    name;
    rol;
    number_phone;
    email;
    creation_date;
    constuctor() { }

    async connection() {
        try {
            const results = await new_collection("users");
            return results;
        } catch (error) {
            throw error;
        }
    }

    async get_user(data) {
        try {
            // inicia la connexión con mongo
            const con = await this.connection();

            const { id, rol, nam } = data;

            console.log(data);

            let result;

            // retorna todos los usuarios
            if (!id && !rol && !nam) result = await con.aggregate([
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" },
                        name: { $first: "$name" },
                        rol: { $first: "$rol" },
                        number_phone: { $first: "$number_phone" },
                        email: { $first: "$email" },
                        creation_date: { $first: "$creation_date" }
                    }
                },
                {
                    $project: {
                        _id: 0,
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
                    $sort: {
                        creation_date: 1,
                    }
                }
            ]).toArray();

            // usuarios por rol
            if (!id && rol && !nam) result = await con.aggregate([
                {
                    $match: {
                        "rol": rol
                    }
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
                        id: { $first: "$id" },
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
            ]).toArray();

            // usuarios por id
            if (id && !rol && !nam) result = await con.aggregate([
                {
                    $match: {
                        "id": Number(id)
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" }, _id: 0,
                        name: { $first: "$name" },
                        rol: { $first: "$rol" },
                        number_phone: { $first: "$number_phone" },
                        email: { $first: "$email" },
                        creation_date: { $first: "$creation_date" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 1, id: 1,
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
            ]).toArray();

            // usuarios por nombre
            if(!id && !rol && nam ) result = await con.aggregate([
                {
                    $match: {
                        "name":nam
                    }
                },
                {
                    $group: {
                        _id: "$_id",
                        id: { $first: "$id" }, _id: 0,
                        name: { $first: "$name" },
                        rol: { $first: "$rol" },
                        number_phone: { $first: "$number_phone" },
                        email: { $first: "$email" },
                        creation_date: { $first: "$creation_date" }
                    }
                },
                {
                    $project: {
                        _id: 0,
                        id: 1, id: 1,
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
            ]).toArray();

            // console.log(result);
            return result;

        } catch (error) {
            throw error;
        }
    }

    async delete_user(id) {
        try {
            const con = this.connection();
            const result = (await con).deleteOne({ "id": parseInt(id) });
            return result

        } catch (error) {
            throw error;
        }
    }
};

export default User;