import { new_collection } from "../connection/connection.js";
import autoIncrementar from "../helpers/auto_increment.js";

class User{
    _id;
    id;
    name;
    rol;
    number_phone;
    email;
    creation_date;
    constuctor(){}

    async connection(){
        try {
            const results = await new_collection("users");
            return results;
        } catch (error) {
            throw error;
        }
    }

    async get_user(id){
        try {
            // inicia la connexión con mongo
            const con = await this.connection();
            // valida que el campo id no esté vació, y si lo está, retorna todos los usuarios
            if(!id) return await con.find({}).toArray();
            // si el campo id no está vacío, realiza la consulta
            return await con.aggregate([
                {
                    $match: { "id": parseInt(id) }
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

        } catch (error) {
            throw error;
        }
    }

    async get_user_date(date){
        try {
            const con = await this.connection();

            if(!date) return await con.find({}).toArray();

            return await con.aggregate([
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
                    $match: { creation_date: date }
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

        } catch (error) {
            throw error;
        }
    }

    async get_user_rol(rol){
        try {
            const con = await this.connection();

            if(!rol) return await con.find({}).toArray();

            return await con.aggregate([
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
                    $match: { "rol": rol }
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

        } catch (error) {
            throw error;
        }
    }

    async delete_user(id){
        try {
            const con = this.connection();
            const result = (await con).deleteOne({"id": parseInt(id)});
            return result

        } catch (error) {
            throw error;
        }
    }
};

export default User;