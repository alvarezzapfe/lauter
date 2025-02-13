const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

// Crear la instancia de Sequelize con configuración adicional
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT || 3306, // Aseguramos que utilice el puerto 3306
    dialect: "mysql",
    logging: false, // Desactiva el log de consultas SQL para un entorno más limpio
    dialectOptions: {
      connectTimeout: 60000, // Tiempo de espera para la conexión (60 segundos)
    },
    pool: {
      max: 10, // Número máximo de conexiones simultáneas
      min: 0, // Número mínimo de conexiones
      acquire: 60000, // Tiempo máximo para intentar conectar antes de lanzar error
      idle: 10000, // Tiempo que una conexión puede estar inactiva antes de cerrarse
    },
  }
);

// Verificar la conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a Google Cloud SQL establecida correctamente.");
  } catch (error) {
    console.error("❌ Error al conectar a MySQL:", error);
    process.exit(1);
  }
})();

module.exports = sequelize;
