const mysql = require("mysql2/promise");

const config = {
  host: "34.132.117.148",
  user: "node_user",
  password: "NuevaContraseña123!",
  database: "tukiapp",
  port: 3306,
};

(async () => {
  try {
    console.log("Conectando con mysql2...");
    const connection = await mysql.createConnection(config);
    console.log("✅ Conexión exitosa a MySQL");
    await connection.end();
  } catch (error) {
    console.error("❌ Error en la conexión con mysql2:", error.message);
  }
})();
