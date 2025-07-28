import React from "react";
import studentImage from "../assets/estudante.png";

function CtaSection() {
  return (
    <section className="relative bg-cta-gradient w-full overflow-hidden">
      <div className="container mx-auto flex flex-row items-center justify-center gap-4 md:gap-8 py-12 px-6">
        {/* Coluna da Imagem */}
        <div className="w-5/12 flex-shrink-0 flex justify-center items-center">
          <img
            src={studentImage}
            alt="Silhueta de um estudante universitário"
            className="h-64 sm:h-80 md:h-96 lg:h-[500px] w-auto -scale-x-100"
          />
        </div>

        {/* Coluna do Texto e Botão */}
        <div className="w-7/12 flex flex-col items-start text-left">
          {/* TÍTULO CORRIGIDO */}
          <h2 className="font-league text-gray-100 text-3xl sm:text-4xl md:text-[4rem] lg:text-[5rem] uppercase leading-none md:leading-tight tracking-normal md:tracking italic drop-shadow-xl">
            Estudante <br /> Universitário?
          </h2>

          <div className="mt-4 md:mt-8">
            <p className="font-ttnorms text-white text-base sm:text-lg md:text-2xl">
              TEM UM <strong className="font-bold">CAMINHO</strong>
              <br />
              <strong className="font-bold">ESPECIAL</strong> ESPERANDO
              <br />
              POR VOCÊ:
            </p>

            <button
              className="
                font-league text-white text-xl sm:text-2xl md:text-3xl uppercase
                px-6 py-3 md:px-10 md:py-4
                bg-button-gradient
                rounded-2xl
                shadow-[0_4px_0_0_#6b21a8]
                hover:translate-y-0.5
                hover:shadow-[0_2px_0_0_#6b21a8]
                active:translate-y-1
                active:shadow-none
                transition-all duration-150
                mt-6
                cursor-pointer
                select-none
              "
            >
              CLIQUE AQUI!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CtaSection;
