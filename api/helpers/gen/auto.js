import fs from 'fs/promises';

const contenido = `ATLAS_USER=""
ATLAS_PASSWORD=""
ATLAS_DB="incidents"
JWT_PRIVATE_KEY="soy_la_key"
MY_SERVER={"hostname":"localhost","port":5010}
`;

const archivo = '.env';

const existencia = fs.exist(archivo);

if(existencia){
    return console.log("El archivo existe");
}

else {
    (async () => {
        try {
            await fs.writeFile(archivo, contenido);
            console.log(`Se ha creado el archivo "${archivo}"`);
            console.warn("No te olvides de agregar tus credenciales en el archivo .env\n");
        } catch (err) {
            console.error('Error al crear el archivo:', err);
        }
    })();
}