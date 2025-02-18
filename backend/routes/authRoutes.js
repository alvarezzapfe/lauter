const express = require("express");
const authController = require("../controllers/authController"); // Importar el controlador

const router = express.Router();

// 🔹 Rutas de autenticación
router.post("/login", authController.login);
router.post("/register", authController.register);

module.exports = router;
