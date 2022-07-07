import Express, { json } from "express";
import cors from "cors";
import chalk from "chalk";
import "./setup.js";

const app = Express();
app.use( cors() );
app.use( json() );

const port = process.env.PORT || 5000;

app.listen( port, () => {
 console.log(`sever is up and running on port ${ chalk.blue( port )}`);
});