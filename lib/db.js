// db.js
import mysql from 'mysql2/promise';

export async function callProducts(query, data) {
  try {
    console.log("Connecting to the database...");
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });
    console.log("Successfully connected to the database.");
     
    console.log("Executing query:", query, data);
    const [result] = await db.execute(query, data);
    console.log("Query executed successfully:", result);

    await db.end();
    console.log("Database connection closed.");

    return result;
  } catch (error) {
    console.error("Error connecting to the database or executing query:", error);
    throw new Error("Database query error");
  }
}

export async function deleteProduct(sku_id) {
  try {
    console.log("Connecting to the database...");
    const db = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: Number(process.env.MYSQL_PORT),
      database: process.env.MYSQL_DATABASE,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    });
    console.log("Successfully connected to the database.");

    const query = "DELETE FROM products WHERE sku_id = ?";
    console.log("Executing query:", query);
    const [result] = await db.execute(query, [sku_id]);
    console.log("Query executed successfully.");

    await db.end();
    console.log("Database connection closed.");

    return result;
  } catch (error) {
    console.error("Error connecting to the database or executing query:", error);
    throw new Error("Database query error");
  }
}

