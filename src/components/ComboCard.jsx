import React from 'react';
import LearnMoreButton from './LearnMoreButton';

function ComboCard({ heading, description, imageSrc, priceInstallments, priceFull }) {
  return (
    <div className="mt-24 md:mt-32">
      <h2 className="text-center font-league text-7xl md:text-8xl text-saude-dark-blue uppercase mb-8">
        Combo
      </h2>

      <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto">
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={imageSrc}
            alt={heading}
            className="rounded-xl shadow-lg w-full"
          />
        </div>
        <div className="w-full md:w-2/3 flex flex-col text-center md:text-left">
          <h3 className="font-league text-3xl text-saude-dark-blue uppercase">
            {heading}
          </h3>
          <p className="font-ttnorms text-gray-700 mt-2">
            {description}
          </p>
          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-saude-dark-blue text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 hover:scale-105 active:scale-98">
              Compre Agora
            </button>
            <LearnMoreButton text="Saiba Mais" />
          </div>

          {/* ================================================================== */}
          {/* BLOCO DE PREÇOS ATUALIZADO */}
          {/* ================================================================== */}
          <div className="mt-6 w-full sm:max-w-xs mx-auto md:mx-0 font-ttnorms text-saude-dark-blue">
            <div className="bg-red-500 text-white rounded-lg p-2 inline-block shadow-lg">
              <p className="font-bold text-2xl">
                {priceInstallments}
              </p>
            </div>
            <p className="mt-2 text-sm">
              ou <span className="font-bold text-lg">{priceFull}</span> à vista
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboCard;