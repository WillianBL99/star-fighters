import Express, { json } from "express";
import cors from "cors";

const app = Express();

app.use( cors() );
app.use( json() );

export default app;