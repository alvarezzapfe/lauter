const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  const { username, email, password, role } = req.body;

  try {
    // Verificar si el correo ya está registrado
    const existingUser = await User.findOne({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: "El correo ya está registrado." });
    }

    // Hashear la contraseña antes de guardarla
    const hashedPassword = await bcrypt.hash(password, 10);

    // Crear el usuario con la contraseña encriptada
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json({ message: "Usuario registrado exitosamente." });
  } catch (err) {
    console.error("❌ Error en registro:", err);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

const login = async (req, res) => {
  const { email, password, role } = req.body;

  try {
    // Buscar al usuario por correo
    const user = await User.findOne({ where: { email } });
    if (!user) {
      return res.status(400).json({ message: "Usuario no encontrado." });
    }

    // Verificar la contraseña
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Contraseña incorrecta." });
    }

    // Verificar el rol del usuario
    if (user.role !== role) {
      return res
        .status(403)
        .json({ message: "No tienes permisos para este rol." });
    }

    // Generar el token JWT
    const token = jwt.sign(
      { id: user.id, role: user.role },
      process.env.JWT_SECRET || "clave_secreta",
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      message: "Inicio de sesión exitoso.",
      token,
      user: { id: user.id, username: user.username, role: user.role },
    });
  } catch (err) {
    console.error("❌ Error en login:", err);
    res.status(500).json({ message: "Error en el servidor." });
  }
};

module.exports = { register, login };
