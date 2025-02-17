const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const sequelize = require("./config/database");

// Importar rutas
const authRoutes = require("./routes/authRoutes");
const solicitudesRoutes = require("./routes/solicitudesRoutes");

dotenv.config();

const app = express();

const corsOptions = {
  origin: ["https://lauter.vercel.app"],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Definir rutas
app.use("/api/auth", authRoutes);
app.use("/api/solicitudes", solicitudesRoutes);

// Manejo de rutas no encontradas
app.use((req, res) => {
  res.status(404).json({ success: false, message: "Ruta no encontrada" });
});

// Conectar a la base de datos
const conectarDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("✅ Conexión a MySQL establecida correctamente.");
    await sequelize.sync({ alter: true });
    console.log("✅ Modelos sincronizados con la base de datos.");
  } catch (error) {
    console.error("❌ Error al conectar con la base de datos:", error);
    process.exit(1);
  }
};

conectarDB();

// 🚀 **IMPORTANTE PARA VERCEL** 🚀
// Vercel maneja automáticamente la ejecución del servidor.
module.exports = app;
