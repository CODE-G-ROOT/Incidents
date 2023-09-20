import { SignJWT, jwtVerify } from "jose"
import db from "../connection/connection.js"
import { ObjectId } from "mongodb";
import data from '../../auto_setting.js'

export const createToken = async (req, res, next) => {
    //verifica que el cuerpo del post no esté vacío
    if (Object.keys(req.body).length === 0)
        return res.status(400).send({ message: "Data not founded" });

    //busca el usuario por su name y password
    const result = await db.collection('users').findOne(req.body);

    //valida que el cuerpo de la solicitud sea el requerido, en este caso, el id, name, y el rol
    if (JSON.stringify(Object.keys(req.body)) !== JSON.stringify(['name', 'id', 'rol'])) //el usuario es el discord y su id es el identificador unico de discord
        return res.status(417).send({ message: "Para iniciar sesion se require: name [nombre del usuario] y id [password]" })

    //valida que el resultado exista, si no, el user no existe o la contraseña es la incorrecta
    if (!result)
        return res.status(401).send({ mesaage: "session no encontrada" });

    //se crea la firma del token
    const encoder = new TextEncoder();
    const id = result._id.toString();
    const jwtConstructor = await new SignJWT({ id: id })
        .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
        .setIssuedAt()
        .setExpirationTime('3h')
        .sign(encoder.encode(data.key));
    req.data = { status: 200, message: jwtConstructor };
    next();
}

// ?    QUEDA PENDIENTE POR REVISAR
export const verifyToken = async (req, token) => { 
    try {
        const encoder = new TextEncoder(
        );
        const jwtData = await jwtVerify(
            token,
            encoder.encode(data.key)
        );
        let res = await db.collection('users').findOne(
            {
                _id: new ObjectId(jwtData.payload.id),
                [`permisos.${req.baseUrl}`]: `${req.headers["accept-version"]}`
            }
        );
        const error = { message: "no tienes acceso a este método" }
        if (!res.permisos[req.baseUrl].includes(req.method)) return error;
        let { _id, permisos, ...session } = res;
        return session;
    } catch (error) {
        return false;
    }
}