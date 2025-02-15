const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");

// Importar rutas
const authRoutes = require("./routes/authRoutes");
const solicitudesRoutes = require("./routes/solicitudesRoutes");

dotenv.config();

console.log("DB_HOST:", process.env.DB_HOST);
console.log("DB_NAME:", process.env.DB_NAME);
console.log("DB_USER:", process.env.DB_USER);

const app = express();

// ✅ Middleware CORS actualizado
app.use(
  cors({
    origin: ["https://lauter.vercel.app"], // Solo tu dominio de producción
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use(express.json());

// ✅ Definir rutas
app.use("/api/auth", authRoutes);
app.use("/api/solicitudes", solicitudesRoutes);

// ✅ Sincronizar modelos con la base de datos y arrancar el servidor
const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a Google Cloud SQL establecida correctamente.");

    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};

iniciarServidor();
