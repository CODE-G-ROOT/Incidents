import { Router } from "express";
import {get_user_controller} from "../controllers/v2/GET_incidences.js";
import { delete_user_controller } from "../controllers/v2/DELETE_incidences.js";

const user = Router();

user.get("/all", get_user_controller);
user.delete('/delete', delete_user_controller);

export default user;