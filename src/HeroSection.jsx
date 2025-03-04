// HeroSection.jsx
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const words = ["fácil", "transparente", "simple"];

export default function HeroSection() {
  const [currentWord, setCurrentWord] = useState(words[0]);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;
    const changeWord = () => {
      setFade(false);
      setTimeout(() => {
        index = (index + 1) % words.length;
        setCurrentWord(words[index]);
        setFade(true);
      }, 500);
    };
    const interval = setInterval(changeWord, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="hero_section">
      <div className="hero_content">
        <motion.h2
          className="hero_title"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          El crédito de tu empresa ahora es
          <motion.span
            className="changing_word"
            animate={{ opacity: fade ? 1 : 0 }}
            transition={{ duration: 0.5 }}
          >
            {currentWord}
          </motion.span>
        </motion.h2>

        <motion.p
          className="hero_subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Empoderamos a tu empresa para que disponer de líneas de crédito
          revolvente, crédito simple o arrendamiento sea más simple que antes.
        </motion.p>

        <motion.button
          className="hero_btn"
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

        {/* Añadimos un detalle visual con animación */}
        <motion.div
          className="hero_decorator"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
        ></motion.div>
      </div>
    </header>
  );
}
