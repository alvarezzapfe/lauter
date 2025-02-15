require("dotenv").config();
const mysql = require("mysql2/promise");

(async () => {
  console.log("Intentando conectar a la base de datos...");
  console.log("Configuración utilizada:");
  console.log({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });

  try {
    const connection = await mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
    });
    console.log("✅ Conexión exitosa a MySQL");
    connection.end();
  } catch (error) {
    console.error("❌ Error en la conexión directa con mysql2:", error);
  }
})();
