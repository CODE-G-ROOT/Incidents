import app from "./index.js";
import data from "../auto_setting.js";

app.listen( data.SERVER_BACK, ()=> {
    console.log(`http://${data.SERVER_BACK.host}:${data.SERVER_BACK.port}/`);
});