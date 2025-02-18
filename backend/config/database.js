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
    dialectModule: require("mysql2"), // 🔹 Esto es necesario en Vercel
    port: process.env.DB_PORT || 3306,
    logging: false,
    dialectOptions: {
      ssl: {
        rejectUnauthorized: false,
      },
    },
  }
);

const verificarConexion = async () => {
  try {
    console.log("Intentando conectar a MySQL...");
    console.log({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      database: process.env.DB_NAME,
      port: process.env.DB_PORT || 3306,
    });

    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL establecida.");
  } catch (error) {
    console.error("❌ Error al conectar a MySQL:", error);
    process.exit(1);
  }
};

verificarConexion();

module.exports = sequelize;
