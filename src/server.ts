import app from "./app.js";
import chalk from "chalk";
import "./setup.js";

const port = process.env.PORT || 5000;

app.listen( port, () => {
 console.log(`sever is up and running on port ${ chalk.blue( port )}`);
});