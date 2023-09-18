import app from "./index.js";
import data from "../auto_setting.js";

app.listen( data.server, ()=> {
    console.log(`http://${data.server.hostname}:${data.server.port}/`);
});