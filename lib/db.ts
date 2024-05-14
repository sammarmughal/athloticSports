// lib/db.ts
import mysql from 'mysql2/promise';
import { Product } from './definitions';

export async function callProducts(query: string, data: any[]): Promise<Product[]> {
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

    console.log("Executing query:", query);
    const [result] = await db.execute(query, data) as [Product[], any]; // Adjust type assertion
    console.log("Query executed successfully.");

    await db.end();
    console.log("Database connection closed.");

    // Ensure TypeScript recognizes the result as an array of Product objects
    return result;
  } catch (error) {
    console.error("Error connecting to the database or executing query:", error);
    throw new Error("Database query error"); // Throw the error instead of returning it
  }
}
