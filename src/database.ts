import { Pool } from "pg";
import "./setup.js";

const configDatabase = {
  connctionString: process.env.DATABASE_URL,
  ssl: {}
};

if( process.env.MOD === "PROD" ) {
  configDatabase.ssl = {
    rejectUnauthorized: false
  }
}

const connection = new Pool( configDatabase );
export default connection;