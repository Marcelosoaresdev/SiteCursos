// src/components/CallToActionSection.jsx - MODIFICADO

import React from "react";
// 1. Importe o hook que detecta a versão de estudante
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

// Componente para a textura de ruído SVG (continua o mesmo)
const SvgNoiseTexture = () => (
  <svg
    className="absolute inset-0 w-full h-full opacity-15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <filter id="noiseFilter">
      <feTurbulence
        type="fractalNoise"
        baseFrequency="0.65"
        numOctaves="3"
        stitchTiles="stitch"
      />
    </filter>
    <rect width="100%" height="100%" filter="url(#noiseFilter)" />
  </svg>
);

function CallToActionSection({ content }) {
  // 2. Chame o hook para saber em qual página estamos
  const isStudentVersion = useIsStudentVersion();

  if (!content) {
    return null;
  }

  const handleScrollToCourses = () => {
    // 3. LÓGICA CONDICIONAL: Escolhe o ID do alvo com base na página
    const targetId = isStudentVersion
      ? "student-courses-section" // ID para a página de universitários
      : "courses-section"; // ID para as páginas normais de categoria

    document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-6 ${content.gradient}`}
    >
      <SvgNoiseTexture />
      <div className="relative z-10 container mx-auto max-w-6xl text-center flex flex-col items-center">
        <h2
          className={`font-league text-6xl md:text-8xl lg:text-9xl font-bold leading-none tracking-tight ${content.textColor}`}
        >
          {content.text}
        </h2>
        <button
          onClick={handleScrollToCourses}
          className={`mt-12 font-bold uppercase rounded-full text-lg px-12 py-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl ${content.buttonClasses}`}
        >
          {content.buttonText}
        </button>
      </div>
    </section>
  );
}

export default CallToActionSection;
