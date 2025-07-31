import React from "react";
import { motion } from "framer-motion";
import studentImage from "../assets/estudante.webp";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { Link } from "react-router-dom";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

function CtaSection() {
  const scrollAnimation = useScrollAnimation();
  const isStudentVersion = useIsStudentVersion();

  // 👇 Se for a versão universitário, não renderiza nada
  if (isStudentVersion) return null;

  return (
    <motion.section
      ref={scrollAnimation.ref}
      className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20"
      variants={scrollAnimation.variants}
      initial={scrollAnimation.initial}
      animate={scrollAnimation.animate}
      transition={scrollAnimation.transition}
    >
      {/* Background complexo com gradientes e elementos SVG leves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-tr from-[#761cc7] to-[#b362ff]"></div>
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C30,10 70,20 100,0 L100,100 C70,90 30,80 0,100 Z"
            fill="white"
          />
          <circle cx="20" cy="30" r="15" fill="white" opacity="0.3" />
          <circle cx="80" cy="70" r="12" fill="white" opacity="0.3" />
        </svg>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0 via-white/0 to-white/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          <div className="w-1/2 sm:w-2/5 md:w-2/5 lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={studentImage}
                alt="Silhueta de um estudante universitário"
                className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto -scale-x-100 object-contain drop-shadow-2xl"
              />
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 blur-xl z-0" />
            </div>
          </div>

          <div className="w-1/2 sm:w-3/5 md:w-3/5 lg:w-1/2 flex flex-col items-start text-left">
            <h2 className="font-league text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl uppercase leading-tight italic drop-shadow-xl">
              Estudante <br className="hidden sm:inline" />
              Universitário?
            </h2>

            <div className="mt-3 sm:mt-4 md:mt-6">
              <p className="font-ttnorms text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-tight">
                TEM UM <strong className="font-bold">CAMINHO</strong>
                <br />
                <strong className="font-bold">ESPECIAL</strong> ESPERANDO
                <br />
                POR VOCÊ:
              </p>

              <Link
                to="/universitario"
                className="inline-block text-center font-league text-white text-xl md:text-2xl px-8 py-4 md:px-10 md:py-5 bg-button-gradient rounded-2xl shadow-[0_4px_0_0_#6b21a8] hover:translate-y-0.5 hover:shadow-[0_2px_0_0_#6b21a8] active:translate-y-1 active:shadow-none transition-all duration-150 mt-8 cursor-pointer select-none w-full max-w-xs md:max-w-sm"
              >
                CLIQUE AQUI!
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute top-1/3 -right-12 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full border-2 border-white/20"></div>
      <div className="absolute top-20 right-20 w-6 h-6 rotate-45 border-2 border-white/20"></div>
    </motion.section>
  );
}

export default CtaSection;
