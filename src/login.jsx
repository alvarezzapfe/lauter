import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./assets/css/login.css";
import logo from "./assets/images/logo1.png";
import Navbar from "./components/Navbar";

const Login = () => {
  const [activeTab, setActiveTab] = useState("cliente"); // Para distinguir entre cliente y admin
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  // Manejar los cambios en los inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Cambiar la URL base para producción
  const BASE_URL = import.meta.env.VITE_API_URL || "https://lauter.vercel.app";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setError("Por favor, ingresa un correo electrónico válido.");
      return;
    }

    if (formData.password.length < 6) {
      setError("La contraseña debe tener al menos 6 caracteres.");
      return;
    }

    console.log("Datos enviados al backend:", {
      email: formData.email,
      password: formData.password,
      role: activeTab,
    });

    try {
      const response = await axios.post(`${BASE_URL}/auth/login`, {
        ...formData,
        role: activeTab,
      });

      console.log("Respuesta del backend:", response.data);

      const { token, user } = response.data;
      localStorage.setItem("token", token);

      if (user.role === "admin") {
        navigate("/dash");
      } else if (user.role === "user") {
        navigate("/usuarios");
      } else {
        setError("Rol no reconocido. Por favor, contacta al administrador.");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Error al iniciar sesión.";
      setError(errorMsg);
      console.error("Error en el login:", err);
    }
  };

  return (
    <div className="login-page">
      <Navbar />
      <div className="login-section">
        <div className="login-card">
          <div className="tabs">
            {/* Selector de cliente o administrador */}
            <div
              className={`tab ${activeTab === "cliente" ? "active" : ""}`}
              onClick={() => setActiveTab("cliente")}
            >
              Cliente
            </div>
            <div
              className={`tab ${activeTab === "admin" ? "active" : ""}`}
              onClick={() => setActiveTab("admin")}
            >
              Administrador
            </div>
          </div>
          <div className="login-form">
            <h2>
              {activeTab === "cliente" ? "Acceso Clientes" : "Acceso Admin"}
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="email">Correo Electrónico</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="correo@ejemplo.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Contraseña</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  placeholder="Ingresa tu contraseña"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="btn-submit">
                Ingresar
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer-section text-dark">
        <div className="container">
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img src={logo} alt="Logotipo" className="logo-small" />
            </div>
          </div>
          <div className="footer-bottom text-center mt-4">
            <hr className="footer-line" />
          </div>
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                Infraestructura en Finanzas AI, Sociedad Anónima Promotora de
                Inversión de Capital Variable, ("Lauter"), para su constitución
                y operación con tal carácter, no requiere de autorización de la
                Secretaría de Hacienda y Crédito Público. Lauter ©. Todos los
                derechos reservados. Prohibida la reproducción total o parcial
                del contenido de este sitio. * Todo el análisis es generado con
                herramientas y desarrollo interno.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Login;
