import { Router } from "express";
// import passportHelper from "passport";
import * as get_controller from "../controllers/v2/GET_incidences.js";
import * as post_controller from '../controllers/v2/POST_incidenes.js';
import * as put_controller from '../controllers/v2/PUT_incidences.js';
import * as delete_controller from '../controllers/v2/DELETE_incidences.js';

const app = Router();

//TODO: USER recibe rutas dinámicas
// id, rol, date
// http://localhost:4000/algo/user?rol=User
app.get("/user", get_controller.get_user_controller); 
app.get("/incidencias", get_controller.get_incidences_controller);
app.get("/incidencias/equipo", get_controller.get_incidences_equipo_controller);
app.get("/incidencias/area", get_controller.get_incidences_location_controller);
app.get("/incidencias/report", get_controller.get_incidences_report_controller);

app.post('/incidencias', post_controller.post_incidence_controller);

app.put('/incidencias', put_controller.update_incidence_controller);

app.delete('/incidencias', delete_controller.delete_incidence_controller);
app.delete('/user', delete_controller.delete_user_controller);

export default app;