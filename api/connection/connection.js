import { MongoClient } from "mongodb";

let conn = undefined;

const connect_String = '';
const cliente = new MongoClient(connect_String);

try {
    conn = await cliente.connect();
} catch (error) {
    console.error(error);
};

let db = conn.db('incidets_system');

const new_collection = async (col)=>{
    return  await db.createCollection(col);
}

export {new_collection};
export default db;





