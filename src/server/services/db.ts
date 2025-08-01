import { Pool } from "pg";

const dbURL = new URL(process.env.POSTGRES_URL || "");

const pool = new Pool({
  user: dbURL.username,
  password: dbURL.password,
  database: dbURL.pathname.substring(1),
  host: dbURL.hostname,
  port: Number(dbURL.port),
  ssl: !['127.0.0.1', 'localhost'].includes(dbURL.hostname)
});

export default pool
