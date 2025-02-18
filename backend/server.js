const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");

// Importar rutas
const authRoutes = require("./routes/authRoutes");
const solicitudesRoutes = require("./routes/solicitudesRoutes");

dotenv.config();

const app = express();

// ✅ Middleware CORS
const corsOptions = {
  origin: process.env.FRONTEND_URL || "https://lauter.vercel.app",
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Definir rutas
app.use("/api/auth", authRoutes);
app.use("/api/solicitudes", solicitudesRoutes);

// ✅ Manejo de solicitud preflight (OPTIONS)
app.options("*", cors(corsOptions));

// ✅ Middleware de errores generales
app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err);
  res.status(500).json({
    success: false,
    message: "Error interno del servidor",
    error: err.message,
  });
});

// ✅ Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Ruta no encontrada",
    requestedUrl: req.originalUrl,
  });
});

// ✅ Sincronizar base de datos antes de iniciar el servidor
sequelize
  .authenticate()
  .then(() => {
    console.log("✅ Conectado a la base de datos");
  })
  .catch((err) => {
    console.error("❌ Error al conectar a la base de datos:", err);
  });

// ✅ Para Vercel: Exportar `app`
module.exports = app;

// ✅ Iniciar servidor localmente solo si no estamos en Vercel
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
}
