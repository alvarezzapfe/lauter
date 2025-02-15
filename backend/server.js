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

// ✅ Middleware CORS actualizado (uso de opciones avanzadas)
const corsOptions = {
  origin: ["https://lauter.vercel.app"], // Permite solo tu frontend en producción
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true, // Permite cookies/sesiones si las usas
};

app.use(cors(corsOptions)); // Aplica CORS con las opciones avanzadas
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Acepta datos codificados en URL

// ✅ Definir rutas
app.use("/api/auth", authRoutes);
app.use("/api/solicitudes", solicitudesRoutes);

// Manejo de solicitud preflight (OPTIONS)
app.options("*", cors(corsOptions));

// Middleware para loggear cada solicitud
app.use((req, res, next) => {
  console.log("👉 Solicitud recibida:");
  console.log(`  Método: ${req.method}`);
  console.log(`  Ruta: ${req.originalUrl}`);
  console.log(`  Headers:`, req.headers);
  next();
});

// ✅ Middleware para manejo de errores generales
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

// ✅ Sincronizar modelos con la base de datos y arrancar el servidor
const iniciarServidor = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a Google Cloud SQL establecida correctamente.");

    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");

    const PORT = process.env.PORT || 5001;
    app.listen(PORT, () => {
      console.log(`🚀 Servidor corriendo en producción en el puerto ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};

iniciarServidor();
