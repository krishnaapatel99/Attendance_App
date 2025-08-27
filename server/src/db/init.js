// src/db/init.js
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";
import pool from "../config/database.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function initDB() {
  const client = await pool.connect();
  try {
    console.log("🔄 Initializing database...");

    // Load schema.sql file (same folder as init.js)
    const schemaPath = path.join(__dirname, "schema.sql");
    const schema = fs.readFileSync(schemaPath, "utf-8");

    // Split queries by semicolon
    const queries = schema.split(";").map(q => q.trim()).filter(q => q.length);

    for (let q of queries) {
      await client.query(q);
      // Extract table name if it's a CREATE TABLE query
      if (/CREATE TABLE/i.test(q)) {
        const match = q.match(/CREATE TABLE IF NOT EXISTS (\w+)/i);
        if (match) {
          console.log(`✅ Table created: ${match[1]}`);
        }
      }
    }

    // Count users
    const students = await client.query("SELECT COUNT(*) FROM students");
    const teachers = await client.query("SELECT COUNT(*) FROM teachers");

    console.log(`📊 Students in DB: ${students.rows[0].count}`);
    console.log(`📊 Teachers in DB: ${teachers.rows[0].count}`);

    console.log("🎉 Database initialized successfully!");
  } catch (err) {
    console.error("❌ Error initializing database:", err);
  } finally {
    client.release();
  }
}

initDB();
