import { MongoClient } from "mongodb";

export async function connect(){
    try {
        
        const url = 'mongodb+srv://JuanDev856:juan856@juandev856.ikw3dq6.mongodb.net/';
        const client = await MongoClient.connect(url);
        const con = client.db("incidents_system")
        return con

    } catch (error) {
        return { status: 500, message: error.message }
    }
}

//? VERIFICAR LA CONNEXIÓN DESCOMENTANDo EL SIGUIENTE SCRIPT
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