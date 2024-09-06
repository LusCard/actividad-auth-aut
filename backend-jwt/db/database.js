import mysql from "mysql2";
import { GV } from "../config/config.js";

export const connection = mysql.createConnection({
  host: GV.DB_HOST,
  database: GV.DB_NAME,
  user: GV.DB_USER,
  password: GV.DB_PASSWORD,
});

export function createTable() {
  try {
    const sql = `CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        username VARCHAR(100) NOT NULL,
        password VARCHAR(100) NOT NULL)`;
    connection.query(sql);
    console.log("Table 'users' created or already exists.");
  } catch (error) {
    console.error("Error creating 'users' table:", error);
  }
}
