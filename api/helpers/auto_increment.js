import { connect } from '../connection/connection.js'; // Importa la función 'connect' correctamente

export default async function autoIncrementar(categoria, id) {
    use("incidents_system");
    
    try {
        const db = await connect(); // Utiliza la función 'connect' para obtener la conexión a la base de datos
        const data = await db.collection(categoria) // Utiliza la categoría para seleccionar la colección
            .find()
            .sort({ [id]: -1 })
            .toArray();

        if (data.length < 1) return 1;

        const lastNumber = data[0][id];
        return lastNumber + 1;
    } catch (error) {
        console.error(error);
        throw error; // Maneja errores apropiadamente
    }
};