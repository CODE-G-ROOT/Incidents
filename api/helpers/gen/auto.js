import fs from 'fs/promises';

const archivo = '.env';
const contenido = `ATLAS_USER=""
ATLAS_PASSWORD=""
ATLAS_DB="incidents"
JWT_PRIVATE_KEY="im_the_key"
MY_SERVER={"hostname":"localhost","port":5510}
`;

// Función para verificar si un archivo existe
async function archivoExiste(archivo) {
    try {
        await fs.access(archivo);
        return true; // El archivo existe
    } catch (error) {
        return false; // El archivo no existe
    }
}

// Verificar si el archivo existe antes de escribir en él
archivoExiste(archivo)
    .then((existe) => {
        if (existe) {
            console.log(`El archivo ${archivo} ya existe.`);
        } else {
            // Escribe el contenido en el archivo si no existe
            fs.writeFile(archivo, contenido)
                .then(() => {
                    console.log(`Se ha escrito el contenido en ${archivo}`);
                })
                .catch((error) => {
                    console.error(`Error al escribir en ${archivo}: ${error.message}`);
                });
        }
    })
    .catch((error) => {
        console.error(`Error al verificar la existencia de ${archivo}: ${error.message}`);
    });
