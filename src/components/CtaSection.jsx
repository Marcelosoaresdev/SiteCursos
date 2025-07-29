import React from "react";
import studentImage from "../assets/estudante.png";

function CtaSection() {
  return (
    <section className="relative w-full overflow-hidden py-12 md:py-16 lg:py-20">
      {/* Background complexo com gradientes e elementos SVG leves */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Gradiente principal */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#761cc7] to-[#b362ff]"></div>

        {/* Elementos decorativos SVG leves */}
        <svg
          className="absolute top-0 left-0 w-full h-full opacity-5"
          viewBox="0 0 100 100"
          preserveAspectRatio="none"
        >
          {/* Formas orgânicas sutis */}
          <path
            d="M0,0 C30,10 70,20 100,0 L100,100 C70,90 30,80 0,100 Z"
            fill="white"
          />
          <circle cx="20" cy="30" r="15" fill="white" opacity="0.3" />
          <circle cx="80" cy="70" r="12" fill="white" opacity="0.3" />
        </svg>

        {/* Padrão geométrico sutil */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-white/0 via-white/0 to-white/5"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8">
          {/* Coluna da Imagem (esquerda em todos os dispositivos) */}
          <div className="w-1/2 sm:w-2/5 md:w-2/5 lg:w-1/2 flex justify-center items-center">
            <div className="relative">
              <img
                src={studentImage}
                alt="Silhueta de um estudante universitário"
                className="h-48 sm:h-56 md:h-64 lg:h-72 xl:h-80 w-auto -scale-x-100 object-contain drop-shadow-2xl"
              />

              {/* Efeito decorativo */}
              <div className="absolute -top-4 -right-4 sm:-top-5 sm:-right-5 w-20 h-20 sm:w-24 sm:h-24 rounded-full bg-white/20 blur-xl z-0" />
            </div>
          </div>

          {/* Coluna do Texto (direita em todos os dispositivos) */}
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

              <button
                className="
                  font-league text-white text-base sm:text-lg md:text-xl lg:text-2xl
                  px-4 py-2 sm:px-5 sm:py-3 md:px-6 md:py-3
                  bg-gradient-to-r from-purple-600 to-blue-500
                  hover:from-purple-700 hover:to-blue-600
                  rounded-xl sm:rounded-2xl
                  shadow-[0_3px_0_0_#6b21a8]
                  hover:translate-y-0.5
                  hover:shadow-[0_1px_0_0_#6b21a8]
                  active:translate-y-1
                  active:shadow-none
                  transition-all duration-150
                  mt-4 sm:mt-5 md:mt-6
                  cursor-pointer
                  select-none
                  w-full max-w-[180px] sm:max-w-xs
                  relative overflow-hidden
                "
              >
                {/* Efeito de brilho no botão */}
                <span className="absolute top-0 left-0 w-full h-full bg-white/10 opacity-0 hover:opacity-30 transition-opacity duration-300"></span>
                CLIQUE AQUI!
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
      <div className="absolute top-1/3 -right-12 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>

      {/* Elementos gráficos adicionais leves */}
      <div className="absolute bottom-10 left-10 w-8 h-8 rounded-full border-2 border-white/20"></div>
      <div className="absolute top-20 right-20 w-6 h-6 rotate-45 border-2 border-white/20"></div>
    </section>
  );
}

export default CtaSection;
