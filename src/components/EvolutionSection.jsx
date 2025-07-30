import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function EvolutionSection() {
  const scrollAnimation = useScrollAnimation();
  return (
    <motion.section
      ref={scrollAnimation.ref}
      className="relative w-full py-20 md:py-24 lg:py-32 overflow-hidden"
      variants={scrollAnimation.variants}
      initial={scrollAnimation.initial}
      animate={scrollAnimation.animate}
      transition={scrollAnimation.transition}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente complexo */}
        <div className="absolute inset-0"></div>

        {/* Formas geométricas sutis */}
        <div className="absolute top-1/4 left-10 w-32 h-32 rounded-full bg-white/10 blur-2xl"></div>
        <div className="absolute bottom-1/3 right-12 w-40 h-40 rounded-full bg-white/10 blur-2xl"></div>

      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Primeira linha com tamanho aumentado e ênfase */}
          <p className="font-league text-3xl sm:text-4xl md:text-5xl lg:text-[3.5rem] text-white mb-8 md:mb-12 leading-tight">
            Não precisa de ser uma revolução.
            <br />
            Precisa de ser uma{" "}
            <strong className="font-bold text-brand-yellow">EVOLUÇÃO</strong>.
          </p>

          {/* Separador decorativo */}
          <div className="flex justify-center my-10 md:my-12">
            <div className="w-24 h-1 bg-white/30 rounded-full"></div>
          </div>

          {/* Segunda parte com hierarquia clara */}
          <div className="space-y-6 md:space-y-8">
            <p className="font-ttnorms text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed">
              Sua história real começa quando você decide escrevê-la{" "}
              <strong className="font-bold text-brand-yellow underline decoration-brand-yellow/50">
                conscientemente
              </strong>
              :
            </p>

            <p className="font-league text-3xl sm:text-4xl md:text-[3.5rem] text-brand-yellow tracking-tight">
              Um passo, uma decisão
            </p>

            <p className="font-ttnorms text-xl sm:text-2xl md:text-3xl text-white/90 leading-relaxed">
              que leva você a{" "}
              <strong className="font-bold text-brand-yellow">
                várias conquistas
              </strong>
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
