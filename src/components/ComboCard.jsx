import React from 'react';
import LearnMoreButton from './LearnMoreButton';

function ComboCard({
  heading,
  description,
  imageSrc,
  id,
  priceInstallments,
  priceFull,
}) {
  const handleLearnMoreClick = () => {
    const element = document.getElementById(`combo-section`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full px-4 md:px-8 mt-24 md:mt-32">
      <h2 className="text-center font-league text-7xl md:text-8xl text-saude-dark-blue uppercase mb-8">
        Combo
      </h2>

      <div
        className="flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto rounded-2xl border-2 border-white p-4 md:p-5 shadow-[12px_17px_51px_rgba(0,0,0,0.22)]"
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* IMAGEM NO TOPO NO MOBILE, ESQUERDA NO DESKTOP */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={imageSrc}
            alt={heading}
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="w-full md:w-2/3 flex flex-col justify-between text-center md:text-left">
          <div>
            <h3 className="font-league text-3xl text-saude-dark-blue uppercase">
              {heading}
            </h3>
            <p className="font-ttnorms text-gray-700 mt-2">{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center md:justify-start">
            <button className="bg-saude-dark-blue text-white font-bold uppercase text-sm px-6 py-3 rounded-full shadow-lg hover:bg-opacity-80 transition-all duration-300 hover:scale-105 active:scale-98">
              Compre Agora
            </button>
            <LearnMoreButton text="Saiba Mais" onClick={handleLearnMoreClick} />
          </div>

          <div className="mt-6 w-full sm:max-w-xs mx-auto md:mx-0 font-ttnorms text-saude-dark-blue">
            <div className="bg-red-500 text-white rounded-lg p-2 inline-block shadow-lg">
              <p className="font-bold text-2xl">{priceInstallments}</p>
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
