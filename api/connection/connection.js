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

export default db;





