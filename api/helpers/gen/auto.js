import fs from 'fs/promises';

const archivo = '.env';
const contenido = `ATLAS_USER=""
ATLAS_PASSWORD=""
ATLAS_DB="incidents"
JWT_PRIVATE_KEY="im_the_key"
MY_SERVER={"hostname":"localhost","port":5510}
`;

const setting_env_file = 'auto_setting.js';
const setting_env_contain = `import dotenv from 'dotenv';

dotenv.config();

const config = JSON.parse(JSON.stringify(process.env));
const server = JSON.parse(config.MY_SERVER);

const data = {
    atlas_user: config.ATLAS_USER,
    atlas_pass: config.ATLAS_PASSWORD,
    atlas_db: config.ATLAS_DB,
    privateKey: config.JWT_PRIVATE_KEY,
    server: server
};

export default data;
`;

// Función para verificar si un archivo existe
async function archivoExiste(archivo) {
    try {
        await fs.access(archivo);
        return true; // El archivo existe
    } catch (error) {
        return false; // El archivo no existe
    }
};


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

// Verificar si el archivo existe antes de escribir en él
archivoExiste(setting_env_file)
    .then((existe) => {
        if (existe) {
            console.log(`El archivo ${setting_env_file} ya existe.`);
        } else {
            // Escribe el contenido en el archivo si no existe
            fs.writeFile(setting_env_file, setting_env_contain)
                .then(() => {
                    console.log(`Se ha escrito el contenido en ${setting_env_file}`);
                })
                .catch((error) => {
                    console.error(`Error al escribir en ${setting_env_file}: ${error.message}`);
                });
        }
    })
    .catch((error) => {
        console.error(`Error al verificar la existencia de ${setting_env_file}: ${error.message}`);
    });
