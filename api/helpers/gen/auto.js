import fs from 'fs/promises';

const archivo = '.env';
const contenido = `
ATLAS_DB="incidents_system"
MONGO_ATLAS_CONNECT=""
JWT_PRIVATE_KEY=""
VITE_HOST=""
VITE_FRONT_PORT=
VITE_BACK_PORT=
DISCORD_CLIENT_ID=1156187400515629086
DISCORD_CLIENT_SECRET=HdUu45e7nlJ4ZnQhaoMqRzgh8NP0bgY_

`;

const setting_env_file = 'auto_setting.js';
const setting_env_contain = `import dotenv from 'dotenv';

dotenv.config();

const config = JSON.parse(JSON.stringify(process.env));

const data = {
    DB: config.ATLAS_DB,
    CONNECTION: config.MONGO_ATLAS_CONNECT,
    KEY: config.JWT_PRIVATE_KEY || "asñdlkfjas",
    SERVER_FRONT: {
        host: config.VITE_HOST || "localhost",
        port: config.VITE_FRONT_PORT || 5520
    },
    SERVER_BACK: {
        host: config.VITE_HOST  || "localhost",
        port: config.VITE_BACK_PORT || 5510
    },
    CREDENTIALS_DISCORD: {
        CLIENT: config.DISCORD_CLIENT_ID,
        CLIENT_SECRET: config.DISCORD_CLIENT_SECRET
    }
};

export default data
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
