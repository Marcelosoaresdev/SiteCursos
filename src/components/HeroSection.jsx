import React from "react";
import leaoImage from "../assets/leao.png";

function HeroSection() {
  return (
    <div className="bg-gradient-to-br from-[#9933FF] to-[#5B1FA6] text-white overflow-hidden relative">
      {/* === EFEITO DE PARTÍCULAS === */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {[...Array(25)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              width: `${Math.random() * 25 + 8}px`,
              height: `${Math.random() * 25 + 8}px`,
              animationDuration: `${Math.random() * 5 + 2}s`,
            }}
          />
        ))}
      </div>

      {/* === MOBILE === */}
      <div className="lg:hidden flex flex-col min-h-[85vh] pt-16 pb-8 px-6 relative z-10 text-center items-center">
        <h1 className="font-league text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-2 text-white drop-shadow-md">
          TODO GIGANTE
        </h1>
        <h2 className="font-league text-[5rem] sm:text-[6.5rem] uppercase leading-[0.85] tracking-tighter text-white drop-shadow-lg mb-8">
          JÁ FOI <br /> PEQUENO
        </h2>

        <div className="relative w-full max-w-sm mb-8">
          <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20 animate-pulse" />
          <img
            src={leaoImage}
            alt="Leão e seu filhote"
            className="relative w-full h-auto object-contain -scale-x-100"
          />
        </div>

        <p className="font-ttnorms text-lg sm:text-xl max-w-md leading-snug mb-6">
          O que <strong className="text-white font-bold">TEMOS</strong> em comum
          não é a ausência de pequenez — mas sim a coragem de crescer a partir
          dela.
        </p>

        {/* Seta para mobile - posicionada após o conteúdo */}
        <div className="mt-auto animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* === DESKTOP === */}
      <div className="hidden lg:flex min-h-screen items-center relative z-10">
        {/* Texto à esquerda */}
        <div className="flex-1 flex flex-col justify-center pl-20 z-20">
          <h1 className="font-league text-7xl xl:text-8xl uppercase tracking-tight leading-none mb-4 text-white drop-shadow-md">
            TODO GIGANTE
          </h1>
          <h2 className="font-league text-[12rem] leading-[0.85] uppercase tracking-tighter mb-16 drop-shadow-[8px_8px_0_rgba(0,0,0,0.4)]">
            JÁ FOI <br /> PEQUENO
          </h2>

          <div className="relative pl-6 border-l-4 border-white">
            <p className="font-ttnorms text-2xl leading-snug max-w-lg">
              O que <strong className="text-white font-bold">TEMOS</strong> em
              comum não é a ausência de pequenez — mas sim a coragem de crescer
              a partir dela.
            </p>
            <div className="absolute top-0 left-0 w-3 h-3 bg-white rounded-full -translate-x-1/2" />
          </div>
        </div>

        {/* Imagem à direita */}
        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative w-[90%] max-w-4xl">
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-10 animate-pulse" />
            <img
              src={leaoImage}
              alt="Leão e seu filhote"
              className="relative w-full h-auto object-contain -scale-x-100"
            />
          </div>
        </div>

        {/* Seta para desktop - mais visível e destacada */}
        <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-sm font-ttnorms mb-2 opacity-80 text-white drop-shadow-md">
              Role para ver mais
            </p>
            <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
