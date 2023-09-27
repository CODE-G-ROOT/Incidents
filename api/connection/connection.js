import { MongoClient } from "mongodb";
import data from '../../auto_setting.js'
export async function connect(){
    try {
        const url = data.CONNECTION;
        const client = await MongoClient.connect(url);
        const con = client.db(data.DB)
        console.log('Connected with MongoDB');
        return con

    } catch (error) {
        return { status: 500, message: error.message }
    }
}

//? Verifica la conexión descomentando el siguiente script

// (async () => {
//     try {
//         const db = await connect();
//         console.log(db); // Aquí puedes imprimir o utilizar la conexión a la base de datos
//     } catch (error) {
//         console.error(error);
//     }
// })();

export const new_collection = async (col) => {
    const db = await connect();
    return await db.collection(col)
}