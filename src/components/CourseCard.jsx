// CourseCard.jsx - VERSÃO FINAL E ROBUSTA

import React from 'react';
import LearnMoreButton from './LearnMoreButton';

function CourseCard({
  id,
  title,
  imageSrc,
  heading,
  description,
  priceInstallments,
  priceFull,
  isHighlighted = false,
  purchaseLink,
  theme,
}) {
  // Se por algum motivo o tema não for fornecido, não renderiza o card para evitar quebras.
  if (!theme) {
    console.error(`O curso com id ${id} não possui um objeto de tema definido.`);
    return null;
  }

  const handlePurchaseClick = (e) => {
    e.stopPropagation();
    if (purchaseLink) {
      window.open(purchaseLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLearnMoreClick = (e) => {
    e.stopPropagation();
    document.getElementById(`curso-${id}`)?.scrollIntoView({ behavior: 'smooth' });
  };

  // ✅ LÓGICA DE ESTILO SIMPLIFICADA E CORRETA
  // Pega o conjunto de estilos (normal ou destacado) com base na prop 'isHighlighted'.
  // Não existe mais nenhum estilo fixo no componente!
  const cardStyle = isHighlighted ? theme.highlighted : theme.normal;

  return (
    <div
      className={`relative flex flex-col items-center w-full max-w-xs mx-auto transition-all duration-300 ${
        isHighlighted ? 'md:w-64 lg:w-80' : 'md:w-56 lg:w-72 pt-12 md:pt-16'
      }`}
    >
      {!isHighlighted && (
        <div onClick={handleLearnMoreClick} className="absolute top-0 w-full text-center z-10">
          <h2 className={`font-league uppercase ${cardStyle.titleColor} text-5xl md:text-6xl tracking-tighter mb-4`}>
            {title}
          </h2>
        </div>
      )}

      <div
        onClick={handleLearnMoreClick}
        className={`w-full h-full flex flex-col p-4 md:p-5 rounded-2xl border-2 transition-all duration-500 ease-out shadow-[12px_17px_51px_rgba(0,0,0,0.22)] md:hover:scale-105 active:scale-95 active:rotate-1.7 relative ${cardStyle.cardBg} ${cardStyle.borderColor}`}
      >
        {isHighlighted && (
          <>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white font-league text-xl rounded-md uppercase px-4 py-1.5 z-20 shadow-lg whitespace-nowrap">
              MAIS VENDIDO
            </div>
            <h2 className={`font-league uppercase text-5xl tracking-tighter mb-3 text-center pt-8 ${cardStyle.titleColor}`}>
              {title}
            </h2>
          </>
        )}

        <div className="relative my-3 h-auto">
          <img src={imageSrc} alt={heading} className="rounded-xl w-full h-full object-cover" />
        </div>

        <h3 className={`font-league uppercase ${cardStyle.titleColor} ${isHighlighted ? 'text-4xl' : 'text-3xl'} mb-3 text-center`}>
          {heading}
        </h3>

        <p className={`font-ttnorms mt-1 mb-4 flex-grow ${cardStyle.textColor} ${isHighlighted ? 'text-lg' : 'text-md'} text-center px-3`}>
          {description}
        </p>

        <div className="flex flex-row items-center justify-center gap-2 mb-3">
          <button
            onClick={handlePurchaseClick}
            className={`font-bold uppercase rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-98 whitespace-nowrap ${cardStyle.buttonBg} ${cardStyle.buttonText} ${isHighlighted ? 'text-md px-4 py-2' : 'text-sm px-2 py-1'}`}
          >
            Compre Agora
          </button>
          <div onClick={handleLearnMoreClick} className="transform scale-75 md:scale-90 lg:scale-100">
            <LearnMoreButton text="Saiba Mais" variant={cardStyle.learnMoreVariant} />
          </div>
        </div>

        <div className={`mt-auto pt-4 text-center font-ttnorms ${cardStyle.titleColor}`}>
          <div className={`${cardStyle.priceBg} text-white rounded-lg p-2 inline-block shadow-lg`}>
            <p className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`}>
              {priceInstallments}
            </p>
          </div>
          <p className={`mt-2 ${isHighlighted ? 'text-sm' : 'text-xs'}`}>
            ou <span className="font-bold">{priceFull}</span> à vista
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;