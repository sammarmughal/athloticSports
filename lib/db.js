import mysql from 'mysql2/promise';

// Create a connection pool
export const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  port: process.env.MYSQL_PORT,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

export async function connect() {
  return await pool.getConnection();
}

export async function callProducts(query, data) {
  try {
    console.log("Connecting to the database...");
    const db = await pool.getConnection();
    console.log("Successfully connected to the database.");

    console.log("Executing query:", query, data);
    const [result] = await db.execute(query, data);
    console.log("Query executed successfully:", result);

    db.release();
    console.log("Database connection released.");

    return result;
  } catch (error) {
    console.error("Error connecting to the database or executing query:", error);
    throw new Error("Database query error");
  }
}

export async function deleteProduct(sku_id) {
  try {
    console.log("Connecting to the database...");
    const db = await pool.getConnection();
    console.log("Successfully connected to the database.");

    const query = "DELETE FROM products WHERE sku_id = ?";
    console.log("Executing query:", query);
    const [result] = await db.execute(query, [sku_id]);
    console.log("Query executed successfully.");

    db.release();
    console.log("Database connection released.");

    return result;
  } catch (error) {
    console.error("Error connecting to the database or executing query:", error);
    throw new Error("Database query error");
  }
}

export async function query(sql, params) {
  try {
    const [results] = await pool.execute(sql, params);
    return results;
  } catch (error) {
    console.error("Error executing query:", error);
    throw new Error("Database query error");
  }
}
