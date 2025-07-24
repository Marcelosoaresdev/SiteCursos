import React from "react";
import studentImage from "../assets-webp/estudante.webp";
//import arrowImage from "../assets/seta-desenhada.png";

function CtaSection() {
  return (
    <section className="relative bg-cta-gradient w-full overflow-hidden">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 py-16 px-44">
        {/* Coluna da Imagem */}
        <div className="md:w-4/12 flex-shrink-0">
          <img
            src={studentImage}
            alt="Silhueta de um estudante universitário"
            className="w-full max-w-xs md:max-w-[60%] mx-auto -scale-x-100"
          />
        </div>

        {/* Coluna do Texto e Botão */}
        <div className="md:w-6/12 flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="font-league text-gray-100 text-[3rem] md:text-[4rem] lg:text-[5rem] uppercase leading-none italic drop-shadow-hard">
            Estudante <br /> Universitário?
          </h2>

          <div className="mt-8">
            <p className="font-ttnorms text-white text-xl md:text-2xl max-w-md mx-auto md:mx-0">
              TEM UM <strong className="font-bold">CAMINHO</strong>
              <br />
              <strong className="font-bold">ESPECIAL</strong> ESPERANDO
              <br />
              POR VOCÊ:
            </p>

            {/* <img
              src={arrowImage}
              alt="Seta apontando para o botão"
              className="absolute w-20 right-[22%] top-[60%] md:right-[25%] md:top-[55%]"
            /> */}

            <button
              className="
                font-league text-white text-3xl uppercase
                px-10 py-4
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
