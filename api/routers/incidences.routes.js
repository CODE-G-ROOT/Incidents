import { Router } from "express";
import { get_incidences_controller } from "../controllers/v2/GET_incidences.js";
import { get_incidences_equipo_controller } from "../controllers/v2/GET_incidences.js";
import { get_incidences_location_controller } from "../controllers/v2/GET_incidences.js";
import { get_incidences_report_controller } from "../controllers/v2/GET_incidences.js";
import { post_incidence_controller } from '../controllers/v2/POST_incidenes.js';
import { update_incidence_controller } from '../controllers/v2/PUT_incidences.js'
import { delete_incidence_controller } from '../controllers/v2/DELETE_incidences.js'
import { user } from "../middlewares/v2/data_validate.js";
import { incidents } from "../middlewares/v2/data_validate.js";

const incidences = Router();

incidences.get("/all",get_incidences_controller);
incidences.get("/equipo",get_incidences_equipo_controller);
incidences.get("/area", get_incidences_location_controller);
incidences.get("/report", get_incidences_report_controller);

incidences.post('/insert', post_incidence_controller);

incidences.put('/put', update_incidence_controller);

incidences.delete('/delete', delete_incidence_controller)

export default incidences;