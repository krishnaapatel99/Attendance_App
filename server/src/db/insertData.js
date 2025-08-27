// import pool from "./config/database.js";

// const students = [
//   { name: "Alice", email: "alice@example.com", password: "alice123" },
//   { name: "Bob", email: "bob@example.com", password: "bob123" },
//   { name: "Charlie", email: "charlie@example.com", password: "charlie123" },
// ];

// const teachers = [
//   { name: "Alice", email: "alice@example.com", password: "alice123" },
//   { name: "Bob", email: "bob@example.com", password: "bob123" },
//   { name: "Charlie", email: "charlie@example.com", password: "charlie123" },
// ];

// import bcrypt from "bcrypt";

// for (const student of students) {
//   const hash = await bcrypt.hash(student.password, 10);
//   await pool.query(
//     "INSERT INTO students (name, email, password) VALUES ($1, $2, $3)",
//     [student.name, student.email, hash]
//   );
// }

// for (const teacher of teachers) {
//   const hash = await bcrypt.hash(teacher.password, 10);
//   await pool.query(
//     "INSERT INTO teachers (name, email, password) VALUES ($1, $2, $3)",
//     [teacher.name, teacher.email, hash]
//   );
// }
