import React, { useState, useEffect } from "react"; // Agregado useState y useEffect
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/css/navbar.css";
import "./assets/css/index.css";
import "./assets/css/login.css";
import "./assets/css/solicitud.css";
import AOS from "aos";
import "aos/dist/aos.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Solicitud from "./solicitud";
import Login from "./login";
import Simulador from "./simulador";
import TerminosCondiciones from "./TerminosCondiciones";
import Politica from "./Politica";
import Navbar from "./components/Navbar"; // Componente Navbar
import logo from "./assets/images/logo1.png";
import crowdlinkImg from "./assets/images/crowdlink.png";
import pimxImg from "./assets/images/pimx.png";
import Dash from "./dash";
import Usuarios from "./usuarios";
import "@fontsource/poppins"; // Estilo normal
import "@fontsource/poppins/600.css"; // Estilo bold
import ProtectedRoute from "./ProtectedRoute"; // Ajusta la ruta según dónde creaste el archivo
import AccessDenied from "./AccessDenied"; // Ajusta la ruta según la estructura de tu proyecto
import { motion } from "framer-motion";
import { FaRegSmile, FaRegFrown, FaRegClock } from "react-icons/fa";

import { useCallback } from "react";

import step2 from "./assets/images/step2.jpg"; // Sustituye con tu imagen real
import step1 from "./assets/images/step1.jpg"; // Imagen 1
import step3 from "./assets/images/step3.jpg"; // Imagen 3

const Home = () => {
  const [activeCard, setActiveCard] = useState(-1); // Caja activa para animaciones

  const [faqOpen, setFaqOpen] = useState(null);

  // Inicializar AOS
  useEffect(() => {
    AOS.init({
      duration: 600,
      easing: "ease-out-cubic",
      once: true,
    });

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const handleScroll = () => {
    const sections = document.querySelectorAll(".column-card-container");
    sections.forEach((section, index) => {
      const rect = section.getBoundingClientRect();
      if (
        rect.top < window.innerHeight / 2 &&
        rect.bottom > window.innerHeight / 2
      ) {
        setActiveCard(index);
      }
    });
  };

  const productos = [
    {
      title: "Crédito Simple",
      details: ["Financiamiento flexible.", "Respaldado con garantías reales."],
      extraInfo:
        "Este crédito permite a las empresas acceder a liquidez con condiciones flexibles y competitivas.",
      icon: "fas fa-hand-holding-usd",
    },
    {
      title: "Arrendamiento Puro",
      details: ["Ideal para activos.", "Beneficios fiscales atractivos."],
      extraInfo:
        "El arrendamiento puro es una solución financiera para adquirir activos sin afectar la liquidez de la empresa.",
      icon: "fas fa-car",
    },
    {
      title: "Deuda Convertible",
      details: [
        "Financiamiento híbrido.",
        "Opción de convertir deuda en capital.",
      ],
      extraInfo:
        "Este tipo de financiamiento permite flexibilidad, combinando deuda con la posibilidad de conversión en acciones.",
      icon: "fas fa-exchange-alt",
    }, // ✅ CERRAMOS EL ARRAY ANTES DEL `useState`
  ];

  const [flipped, setFlipped] = useState(Array(productos.length).fill(false)); // ✅ AHORA ESTÁ FUERA DEL ARRAY

  const handleFlip = (index) => {
    setFlipped((prev) => {
      const newFlip = [...prev];
      newFlip[index] = !newFlip[index];
      return newFlip;
    });
  };

  const [popup, setPopup] = useState({ open: false, message: "" });

  const handleCellClick = (message) => {
    setPopup({ open: true, message });
  };

  const closePopup = () => setPopup({ open: false, message: "" });

  return (
    <div>
      <Navbar />

      <header id="hero" className="hero_section">
        {/* Partículas de fondo */}

        <div className="hero_content">
          {/* Título con animación */}
          <motion.h2
            className="hero_title"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="highlight">Transformamos</span> el Acceso a Crédito
            para las Empresas
          </motion.h2>

          {/* Subtítulo con delay */}
          <motion.p
            className="hero_subtitle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            Nuestra plataforma impulsa el crecimiento de las PYMEs más
            innovadoras a través de soluciones de{" "}
            <span className="green-highlight">Crédito y Leasing</span>.
          </motion.p>

          {/* Botón CTA con efecto de pulso */}
          <motion.div
            className="hero_cta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
          >
            <motion.button
              className="hero_btn primary"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() =>
                document
                  .getElementById("productos")
                  .scrollIntoView({ behavior: "smooth" })
              }
            >
              Explora Soluciones
            </motion.button>
          </motion.div>

          {/* 🔽 IMÁGENES BAJO EL BOTÓN */}
          <div className="hero_images_container">
            <motion.img
              src={step1} // Imagen 1
              alt="Paso 1"
              className="hero_timeline_img"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 1 }}
            />
            <motion.img
              src={step2} // Imagen 2
              alt="Paso 2"
              className="hero_timeline_img"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4, duration: 1 }}
            />
            <motion.img
              src={step3} // Imagen 3
              alt="Paso 3"
              className="hero_timeline_img"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.6, duration: 1 }}
            />
          </div>
        </div>
      </header>

      {/* Sección Acerca de - About Section */}
      <section id="about" className="about-section">
        <div className="container">
          {/* Título Principal */}
          <h2 className="about-title" data-aos="fade-up">
            Transformamos el Futuro Financiero
          </h2>

          {/* Subtítulo con animación */}
          <h3 className="about-subtitle" data-aos="fade-up">
            Crédito accesible, rápido y sin fricciones para pequeñas y medianas
            empresas.
          </h3>

          <div className="row align-items-center">
            {/* Contenido Izquierdo (Texto y Botón) */}
            <div
              className="col-lg-6 about-text-container"
              data-aos="fade-right"
            >
              <p className="about-text">
                Nuestra misión es revolucionar el acceso a crédito con
                soluciones{" "}
                <strong>simples, personalizadas y transparentes </strong>
                para pequeñas y medianas empresas.
              </p>
              <p className="about-text">
                Ofrecemos estructuras de financiamiento desde{" "}
                <strong> 1 hasta 100 millones de pesos MXN</strong>, adaptadas a
                las necesidades de crecimiento de cada negocio.
              </p>
              <button className="btn btn-primary about-btn">
                Descubre Más
              </button>
            </div>

            {/* Imagen del lado derecho con efecto flotante */}
            <div
              className="col-lg-6 about-image-container"
              data-aos="fade-left"
            >
              <div className="about-image-wrapper">
                <img src={logo} alt="Logotipo" className="about-image" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*    */}
      {/* Sección Productos */}
      <section id="productos" className="section-container productos-section">
        <div className="container">
          <h2 className="section-title">Nuestros Productos</h2>
          <p className="section-text">
            Descubre nuestras soluciones financieras diseñadas para impulsar a
            tu empresa.
          </p>
          <div className="row">
            {productos.map((producto, index) => (
              <div className="col-md-6 col-lg-4 mb-4" key={index}>
                <div className={`flip-card ${flipped[index] ? "flipped" : ""}`}>
                  <div className="flip-card-inner">
                    {/* Lado Frontal */}
                    <div className="flip-card-front">
                      <div className="card productos-card">
                        <div className="card-body text-center">
                          <i className={`${producto.icon} icono`}></i>
                          <h5 className="card-title mt-3">{producto.title}</h5>
                          <ul className="card-text">
                            {producto.details.map((detail, i) => (
                              <li key={i}>{detail}</li>
                            ))}
                          </ul>
                          <button
                            className="btn-flip"
                            onClick={() => handleFlip(index)}
                          >
                            Conoce
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* Lado Trasero */}
                    <div className="flip-card-back">
                      <div className="card productos-card">
                        <div className="card-body text-center">
                          <h5 className="card-title mt-3">{producto.title}</h5>
                          <p className="card-text">{producto.extraInfo}</p>
                          <button
                            className="btn-flip"
                            onClick={() => handleFlip(index)}
                          >
                            Volver
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*    */}
      <section id="comparativo" className="comparativo-section">
        <div className="container">
          <h2 className="comparativo-title">¿Por qué elegir Lauter?</h2>
          <table className="comparativo-table">
            <thead>
              <tr>
                <th>Concepto</th>
                <th className="highlight">Lauter</th>
                <th>Bancos Tradicionales</th>
                <th>Instituciones Financieras</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tiempo de Respuesta</td>
                <td
                  onClick={() =>
                    handleCellClick("Lauter responde en 48 horas.")
                  }
                >
                  <FaRegClock /> 48 horas
                </td>
                <td
                  onClick={() =>
                    handleCellClick("Los bancos tardan más de 30 días.")
                  }
                >
                  <FaRegClock /> 30+ días
                </td>
                <td
                  onClick={() =>
                    handleCellClick("Respuesta promedio de 15-20 días.")
                  }
                >
                  <FaRegClock /> 15-20 días
                </td>
              </tr>
              <tr>
                <td>Tasa de Interés</td>
                <td
                  onClick={() =>
                    handleCellClick("Tasa de interés desde el 12%.")
                  }
                >
                  12-15%
                </td>
                <td onClick={() => handleCellClick("Tasas superiores al 25%.")}>
                  25%+
                </td>
                <td onClick={() => handleCellClick("Tasa de 20-25%.")}>
                  20-25%
                </td>
              </tr>
              <tr>
                <td>Experiencia</td>
                <td
                  onClick={() =>
                    handleCellClick(
                      "Experiencia amigable y sin complicaciones."
                    )
                  }
                >
                  <FaRegSmile className="happy-icon" />
                </td>
                <td
                  onClick={() =>
                    handleCellClick("Experiencia lenta y frustrante.")
                  }
                >
                  <FaRegFrown className="sad-icon" />
                </td>
                <td
                  onClick={() =>
                    handleCellClick("Trato neutral, experiencia mixta.")
                  }
                >
                  <FaRegFrown className="neutral-icon" />
                </td>
              </tr>
              <tr>
                <td>Atención y Asesoría</td>
                <td
                  onClick={() =>
                    handleCellClick(
                      "Atención personalizada y asesoría en cada paso."
                    )
                  }
                >
                  Excelente
                </td>
                <td onClick={() => handleCellClick("Asesoría mínima.")}>
                  Baja
                </td>
                <td onClick={() => handleCellClick("Asesoría limitada.")}>
                  Media
                </td>
              </tr>
            </tbody>
          </table>

          {popup.open && (
            <div className="popup-overlay" onClick={closePopup}>
              <div className="popup-box">
                <p>{popup.message}</p>
                <button onClick={closePopup}>Cerrar</button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/*  Sección Columnas  */}
      <section id="columns" className="py-5 text-center" data-aos="fade-up">
        <div className="container expanded-section position-relative">
          <h2 className="column-title mb-5">Nuestra Propuesta de Valor</h2>
          <p className="section-text">
            Simplificamos el proceso de Crédito PyME.
          </p>

          {/* Rayo eléctrico */}
          <div className="arrow-electric"></div>

          <div className="columns-container">
            {[
              {
                title: "Registro",
                icon: "fas fa-briefcase",
                details: "Envía tu solicitud.",
              },
              {
                title: "Análisis y Preoferta",
                icon: "fas fa-chart-line",
                details: "Revisa preoferta en segundos.",
              },
              {
                title: "Due Diligence",
                icon: "fas fa-users",
                details: "Completa tu documentación y obtén oferta formal.",
              },
              {
                title: "Fondeo",
                icon: "fas fa-wallet",
                details: "Tu Empresa recibe la línea de crédito.",
              },
              {
                title: "Escala",
                icon: "fas fa-globe",
                details: "Utiliza el crédito para crecer tu negocio.",
              },
            ].map((item, index) => (
              <div
                className={`row my-5 ${
                  index % 2 === 0
                    ? "justify-content-start"
                    : "justify-content-end"
                }`}
                key={index}
              >
                <div className="col-md-6 column-card-container">
                  <div
                    className={`column-card p-5 ${
                      activeCard === index ? "highlight" : ""
                    }`}
                  >
                    <div className="circle-enumeration">{index + 1}</div>
                    <i className={`${item.icon} fa-3x mb-3`}></i>
                    <h5 className="card-title">{item.title}</h5>
                    <div className="expanded-content">
                      <p>{item.details}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección Modelo de Negocio */}
      <section id="modelo" className="modelo-container">
        <div className="container">
          {/* Título y Subtítulo */}
          <h2 className="modelo-title" data-aos="fade-up">
            Nuestro Modelo de Negocio
          </h2>
          <p className="section-text">
            Analizamos las siguientes métricas para determinar si una Empresa
            Promovida es sujeto de Crédito.
          </p>
          <p> </p>
          <b></b>

          {/* Cuatro cajas principales (SIN MODIFICAR) */}
          <div className="row">
            {[
              {
                title: "Situación de Empresa",
                details: ["Alta RFC", "Situación fiscal"],
                icon: "fas fa-building",
              },
              {
                title: "Buró de Crédito",
                details: ["Consulta detallada", "Análisis completo"],
                icon: "fas fa-credit-card",
              },
              {
                title: "Modelo Financiero",
                details: ["Algoritmo de scoring", "Proyecciones avanzadas"],
                icon: "fas fa-chart-line",
              },
              {
                title: "Capacidad de Pago",
                details: ["EBITDA", "Intereses Anuales"],
                icon: "fas fa-wallet",
              },
            ].map((item, index) => (
              <div className="col-md-6 col-lg-3 mb-4" key={index}>
                <div className="card modelo-card">
                  <div className="card-body text-center">
                    <i className={`${item.icon} icono`}></i>
                    <h5 className="card-title mt-3">{item.title}</h5>
                    <ul className="card-text">
                      {item.details.map((detail, idx) => (
                        <li key={idx}>{detail}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* Sección FAQ Mejorada */}
      <section id="faq" className="faq-section text-center">
        <div className="container">
          <h2 className="faq-title" data-aos="fade-up">
            Preguntas Frecuentes
          </h2>
          <p className="faq-subtitle" data-aos="fade-up"></p>

          <div className="faq-container">
            {[
              {
                question: "¿Cómo funciona el crédito?",
                answer:
                  "Nuestro proceso es 100% digital. Regístrate, llena tu solicitud y recibe una preoferta en minutos.",
              },
              {
                question: "¿Cuánto tarda la aprobación?",
                answer:
                  "El análisis inicial es inmediato. La aprobación final depende de la validación de documentos.",
              },
              {
                question: "¿Cuáles son los requisitos?",
                answer:
                  "RFC, estados financieros recientes y un historial crediticio saludable.",
              },
              {
                question: "¿Qué tasas de interés manejan?",
                answer:
                  "Depende del perfil de riesgo, pero ofrecemos tasas desde el 12% anual.",
              },
              {
                question: "¿Cómo se paga el crédito?",
                answer:
                  "Las mensualidades se depositan directament a nosotros para pago de intereses y/o amortizaciones.",
              },
              {
                question: "¿Puedo solicitar un monto mayor?",
                answer:
                  "Sí, con base en tu historial de pagos y análisis financiero, puedes acceder a montos mayores.",
              },
              {
                question: "¿Tienen restricciones por industria?",
                answer:
                  "No financiamos empresas relacionadas con financiamiento, criptomonedas o armas.",
              },
              {
                question: "¿Qué pasa si no puedo pagar?",
                answer:
                  "Contamos con programas de reestructuración de pagos. Contáctanos para evaluar opciones.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className={`faq-box ${faqOpen === index ? "open" : ""}`}
                onClick={() => setFaqOpen(faqOpen === index ? null : index)}
              >
                <div className="faq-question">
                  <h5>{item.question}</h5>
                  <i
                    className={`fas ${
                      faqOpen === index ? "fa-chevron-up" : "fa-chevron-down"
                    }`}
                  ></i>
                </div>
                <div
                  className={`faq-answer ${faqOpen === index ? "show" : ""}`}
                >
                  <p>{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer-section text-dark">
        <div className="container">
          {/* Logotipo */}
          <div className="row justify-content-center mb-4">
            <div className="col-md-4 text-center">
              <img src={logo} alt="Logotipo" className="logo-small" />
            </div>
          </div>

          {/* Información Principal */}
          <div className="row">
            {/* Contacto */}
            <div className="col-md-3">
              <h5>Contacto</h5>
              <p>Tel: +52 55 5551609091</p>
              <p>Email: contacto@i2.com.mx</p>
              <p>Dirección:</p>
              <p>
                Tiburcio Montiel 89, Colonia San Miguel Chapultepec, Miguel
                Hidalgo, C.P. 11850, Ciudad de México, México.
              </p>
              <i className="fas fa-globe"></i>
            </div>

            {/* Enlaces */}
            <div className="col-md-3">
              <h5>Enlaces</h5>
              <ul className="list-unstyled">
                <li>
                  <a href="#hero" className="footer-link">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="#productos" className="footer-link">
                    Productos
                  </a>
                </li>
                <li>
                  <a href="#modelo" className="footer-link">
                    Modelo
                  </a>
                </li>
                <li>
                  <a href="/simulador" className="footer-link">
                    Simulador
                  </a>
                </li>
                <li>
                  <a href="/solicitud" className="footer-link">
                    Solicitud
                  </a>
                </li>
                <li>
                  <a href="/login" className="footer-link">
                    Login
                  </a>
                </li>
              </ul>
            </div>

            {/* Alianzas */}
            <div className="col-md-3">
              <h5>Alianzas</h5>
              <ul className="list-unstyled">
                <li>
                  <a
                    href="https://www.pimx.com.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    PiMX
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.crowdlink.mx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Crowdlink
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.soporteimpulsa.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="footer-link"
                  >
                    Soporte Impulsa
                  </a>
                </li>
              </ul>
            </div>

            {/* Síguenos */}
            <div className="col-md-3">
              <h5>Síguenos</h5>

              <a href="#" className="footer-link">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Línea Separadora */}
          <div className="footer-bottom text-center mt-4">
            <hr className="footer-line" />
          </div>

          {/* Leyenda y Créditos */}
          <div className="row mt-4">
            <div className="col text-center">
              <p className="small">
                Infraestructura en Finanzas AI, Sociedad Anónima Promotora de
                Inversión de Capital Variable, (""), para su constitución y
                operación con tal carácter, no requiere de autorización de la
                Secretaría de Hacienda y Crédito Público.©. Todos los derechos
                reservados. Prohibida la reproducción total o parcial del
                contenido de este sitio. * Todo el análisis es generado con
                herramientas y desarrollo interno.
              </p>
            </div>
          </div>

          {/* Créditos Finales */}
          {/* Créditos Finales */}
          <div className="row mt-5">
            <div className="col text-center">
              <p className="footer-credits small text-muted mb-2">
                Desarrollado{" "}
                <a
                  href="https://www.linkedin.com/in/luis-armando-alvarez-zapfe-201217137/?originalSubdomain=mx"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  internamente
                </a>{" "}
                con{" "}
                <a
                  href="https://reactjs.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-link"
                >
                  React.js
                </a>{" "}
                <i className="fab fa-react footer-icon"></i>
              </p>
              <p className="footer-terms small text-muted">
                Consulta nuestra{" "}
                <a href="/politica-privacidad" className="footer-link">
                  Política de Privacidad
                </a>{" "}
                y{" "}
                <a href="/terminos-condiciones" className="footer-link">
                  Términos y Condiciones
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rutas públicas */}
        <Route path="/" element={<Home />} />
        <Route path="/simulador" element={<Simulador />} />
        <Route path="/terminos-condiciones" element={<TerminosCondiciones />} />
        <Route path="/politica-privacidad" element={<Politica />} />
        <Route path="/login" element={<Login />} />
        <Route path="/solicitud" element={<Solicitud />} />
        <Route path="/access-denied" element={<AccessDenied />} />

        {/* Rutas protegidas */}
        <Route
          path="/dash"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <Dash />
            </ProtectedRoute>
          }
        />
        <Route
          path="/usuarios"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <Usuarios />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};

export default App;
