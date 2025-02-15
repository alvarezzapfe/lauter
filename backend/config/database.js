const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    port: process.env.DB_PORT || 3306,
    logging: console.log,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false, // Desactiva la verificación de certificados
      },
    },
  }
);

const verificarConexion = async () => {
  try {
    console.log("Intentando conectar a la base de datos con Sequelize...");
    console.log("Configuración utilizada:", {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL establecida correctamente.");
  } catch (error) {
    console.error("❌ Error al conectar a MySQL:", error.message);
    console.error("Detalles del error:", error);
    process.exit(1);
  }
};

verificarConexion();

module.exports = sequelize;
