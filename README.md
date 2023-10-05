Claro, aquí tienes un ejemplo de README con los pasos para correr la aplicación y una breve descripción de su objetivo:

---

# README - Aplicación de Ejemplo

Esta es una aplicación de ejemplo diseñada para ayudar a los usuarios a aprender a manejar rutas y configurar código de React. La aplicación funciona como una plantilla para consumir una API generada por la misma aplicación. Los usuarios pueden manipular las rutas para interactuar con páginas ocultas, como la del administrador.

## Pasos para Correr la Aplicación

Sigue estos pasos para poner en funcionamiento la aplicación en tu entorno local:

### 1. Instalar Dependencias

Asegúrate de que tienes Node.js y npm instalados en tu sistema. Luego, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias:

```bash
npm i
```

### 2. Generar Código

Ejecuta el siguiente comando para generar código automáticamente:

```bash
npm run gen
```

### 3. Configurar Variables de Entorno

Debes configurar algunas variables de entorno antes de ejecutar la aplicación. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

```env
ATLAS_DB="incidents_system"
MONGO_ATLAS_CONNECT="tu_servidor_de_atlas"
JWT_PRIVATE_KEY=""
SERCRET_KEY=""
VITE_HOST="localhost"
VITE_FRONT_PORT=5147
VITE_BACK_PORT=5146
DISCORD_CLIENT_ID=1156187400515629086
DISCORD_CLIENT_SECRET=MBKnLD2A9SaQYHZEZD4Zk0hPH30pn6la
DISCORD_URL="http://localhost:5146/login/redirect"
```

Recuerda proporcionar los valores adecuados para las variables que requieren configuración.

### 4. Correr el Backend

Para ejecutar el servidor backend, utiliza el siguiente comando:

```bash
npm run start
```

### 5. Correr el Frontend

Finalmente, inicia el servidor frontend con el siguiente comando:

```bash
npm run dev
```

La aplicación ahora debería estar en funcionamiento y puedes acceder a ella en tu navegador web local.

## Acceder a las Rutas

Por defecto, los usuarios pueden acceder a la siguiente ruta:

- [http://localhost:5148/users](http://localhost:5148/users)

Además, hay una ruta oculta para acceder al panel de administrador:

- [http://localhost:5148/admin](http://localhost:5148/admin)

¡Disfruta explorando la aplicación y aprendiendo sobre rutas y configuración de código React!

---

Este README proporciona los pasos necesarios para configurar y ejecutar la aplicación de ejemplo. Asegúrate de haber realizado los pasos de configuración adecuadamente antes de intentar acceder a las rutas mencionadas. ¡Buena suerte con tu proyecto!Claro, aquí tienes un ejemplo de README con los pasos para correr la aplicación y una breve descripción de su objetivo:

---

# README - Aplicación de Ejemplo

Esta es una aplicación de ejemplo diseñada para ayudar a los usuarios a aprender a manejar rutas y configurar código de React. La aplicación funciona como una plantilla para consumir una API generada por la misma aplicación. Los usuarios pueden manipular las rutas para interactuar con páginas ocultas, como la del administrador.

## Pasos para Correr la Aplicación

Sigue estos pasos para poner en funcionamiento la aplicación en tu entorno local:

### 1. Instalar Dependencias

Asegúrate de que tienes Node.js y npm instalados en tu sistema. Luego, ejecuta el siguiente comando en la raíz del proyecto para instalar las dependencias necesarias:

```bash
npm i
```

### 2. Generar Código

Ejecuta el siguiente comando para generar código automáticamente:

```bash
npm run gen
```

### 3. Configurar Variables de Entorno

Debes configurar algunas variables de entorno antes de ejecutar la aplicación. Crea un archivo `.env` en la raíz del proyecto y configura las siguientes variables:

```env
ATLAS_DB="incidents_system"
MONGO_ATLAS_CONNECT="tu_servidor_de_atlas"
JWT_PRIVATE_KEY=""
SERCRET_KEY=""
VITE_HOST="localhost"
VITE_FRONT_PORT=5147
VITE_BACK_PORT=5146
DISCORD_CLIENT_ID=1156187400515629086
DISCORD_CLIENT_SECRET=MBKnLD2A9SaQYHZEZD4Zk0hPH30pn6la
DISCORD_URL="http://localhost:5146/login/redirect"
```

Recuerda proporcionar los valores adecuados para las variables que requieren configuración.

### 4. Correr el Backend

Para ejecutar el servidor backend, utiliza el siguiente comando:

```bash
npm run start
```

### 5. Correr el Frontend

Finalmente, inicia el servidor frontend con el siguiente comando:

```bash
npm run dev
```

La aplicación ahora debería estar en funcionamiento y puedes acceder a ella en tu navegador web local.

## Acceder a las Rutas

Por defecto, los usuarios pueden acceder a la siguiente ruta:

- [http://localhost:5148/users](http://localhost:5148/users)

Además, hay una ruta oculta para acceder al panel de administrador:

- [http://localhost:5148/admin](http://localhost:5148/admin)

¡Disfruta explorando la aplicación y aprendiendo sobre rutas y configuración de código React!

---

Este README proporciona los pasos necesarios para configurar y ejecutar la aplicación de ejemplo. Asegúrate de haber realizado los pasos de configuración adecuadamente antes de intentar acceder a las rutas mencionadas. ¡Buena suerte con tu proyecto!