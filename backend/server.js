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

// ✅ Middleware CORS
const corsOptions = {
  origin: ["https://lauter.vercel.app"], // Permite solo tu frontend en producción
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

// Manejo de solicitud preflight (OPTIONS)
app.options("*", cors(corsOptions));

// ✅ Middleware de errores generales
app.use((err, req, res, next) => {
  console.error("❌ Error en el servidor:", err);
  res
    .status(500)
    .json({ success: false, message: "Error interno del servidor" });
});

// ✅ Manejo de rutas no encontradas (404)
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Ruta no encontrada" });
});

// 🚀 **IMPORTANTE PARA VERCEL** 🚀
// Eliminamos la sincronización automática en cada request.
