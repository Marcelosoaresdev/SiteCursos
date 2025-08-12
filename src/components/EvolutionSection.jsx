import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

function EvolutionSection() {
  const scrollAnimation = useScrollAnimation();
  const isStudentVersion = useIsStudentVersion();

  const content = {
    // Gradiente do HeroSection ajustado para encadear cores (topo mais escuro -> base mais clara)
    gradient: isStudentVersion
      ? "from-[#761cc7] to-[#b362ff]"
      : "from-[#761cc7] to-[#b362ff]",
    // SVGs abstratos do HeroSection (ondas)
    abstractSVG: isStudentVersion ? (
      <>
        <svg
          className="absolute top-0 left-0 w-full opacity-80"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#b362ff"
          ></path>
        </svg>
      </>
    ) : null,
  };
  return (
    <motion.section
      ref={scrollAnimation.ref}
      className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden -mt-px -mb-px"
      variants={scrollAnimation.variants}
      initial={scrollAnimation.initial}
      animate={scrollAnimation.animate}
      transition={scrollAnimation.transition}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente do HeroSection aplicado aqui */}
        <div
          className={`absolute inset-0 bg-gradient-to-b ${content.gradient}`}
        ></div>

        {/* SVGs abstratos do Hero (quando versão estudante) */}
        <div className="absolute inset-0">{content.abstractSVG}</div>

        {/* Formas geométricas sutis */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-12 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>
        {/* Partículas sutis inspiradas no Hero */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-[10%] left-[15%] w-3 h-3 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute top-[30%] left-[70%] w-4 h-4 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute top-[60%] left-[25%] w-2.5 h-2.5 rounded-full bg-white/10 animate-pulse"></div>
          <div className="absolute top-[75%] left-[80%] w-3.5 h-3.5 rounded-full bg-white/10 animate-pulse"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primeira linha com tamanho aumentado e ênfase */}
          <p className="font-league text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-8 md:mb-12 leading-tight">
            Não precisa de ser uma revolução.
            <br />
            Precisa de ser uma{" "}
            <strong className="text-brand-yellow">EVOLUÇÃO</strong>.
          </p>

          {/* Separador decorativo */}
          <div className="flex justify-center md:my-12">
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Segunda parte com hierarquia clara */}
          <div className=" md:space-y-8">
            <p className="font-league text-4xl md:text-5xl mb-8 lg:text-[3.5rem] text-white/90 leading-tight">
              Sua história real começa quando você decide escrevê-la{" "}
              <strong className="text-6xl text-brand-yellow underline decoration-brand-yellow/50">
                conscientemente
              </strong>
              :
            </p>

            <p className="font-league text-4xl md:text-5xl lg:text-[3.5rem] text-brand-yellow tracking-tight">
              Um passo, uma decisão
            </p>

            <p className="font-league text-4xl md:text-5xl lg:text-[3.5rem] text-white/90 leading-tight">
              que leva você a{" "}
              <strong className="text-brand-yellow">várias conquistas</strong>
            </p>
          </div>
        </div>
      </div>

      {/* Elementos flutuantes decorativos */}
      <div className="absolute top-10 left-1/4 w-6 h-6 rounded-full border border-white/20"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 rotate-45 border border-white/20"></div>
    </motion.section>
  );
}

export default EvolutionSection;
