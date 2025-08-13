// src/components/CallToActionSection.jsx - MODIFICADO

import React from "react";

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

function CallToActionSection({ content, comboLink }) {
  if (!content) {
    return null;
  }

  const handleButtonClick = () => {
    if (comboLink) {
      // Se temos o link do combo, abre em nova aba
      window.open(comboLink, "_blank");
    } else {
      // Fallback: scroll para a seção de cursos
      const targetId = "courses-section";
      document.getElementById(targetId)?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      className={`relative w-full min-h-screen flex items-center justify-center px-6 ${content.gradient}`}
    >
      <SvgNoiseTexture />
      <div className="relative z-10 container mx-auto max-w-6xl text-center flex flex-col items-center">
        <h2
          className={`font-league text-6xl md:text-8xl  leading-none tracking-tight ${content.textColor}`}
        >
          {content.text}
        </h2>
        <button
          onClick={handleButtonClick}
          className={`mt-12 font-bold uppercase rounded-full text-lg px-12 py-5 border-2 transition-all duration-300 hover:scale-105 active:scale-95 shadow-xl ${content.buttonClasses}`}
        >
          {content.buttonText}
        </button>
      </div>
    </section>
  );
}

export default CallToActionSection;
