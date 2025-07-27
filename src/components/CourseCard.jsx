import React from 'react';
import LearnMoreButton from './LearnMoreButton';

function CourseCard({
  title,
  imageSrc,
  imageText,
  heading,
  description,
  priceInstallments,
  priceFull,
  isHighlighted = false,
}) {
  const compreAgoraStyle = isHighlighted
    ? 'bg-white text-saude-dark-blue hover:bg-gray-200'
    : 'bg-saude-dark-blue text-white border-2 border-saude-white hover:bg-opacity-80';

  return (
    <div
      className={`relative flex flex-col items-center transition-all duration-300
        ${isHighlighted ? 'lg:w-80' : 'lg:w-72'} ${
        !isHighlighted ? 'pt-16' : ''
      }`}
    >
      {/* TÍTULO FORA DO CARD (apenas para cursos não destacados) */}
      {!isHighlighted && (
        <div className="absolute -top-1 w-full text-center">
          <h2 className="font-league uppercase  text-saude-dark-blue text-7xl tracking-tighter mb-4">
            {title}
          </h2>
        </div>
      )}

      {/* Card principal com animação e borda uniforme */}
      <div
        className={`w-full h-full flex flex-col p-4 md:p-5 rounded-2xl border-2 border-white
        transition-all duration-500 ease-out
        shadow-[12px_17px_51px_rgba(0,0,0,0.22)]
        hover:border-saude-dark-blue hover:scale-105
        active:scale-95 active:rotate-1.7
        relative`}
        style={{
          background: 'rgba(255, 255, 255, 0.1)',
          backdropFilter: 'blur(6px)',
        }}
      >
        {/* Tag "Mais Vendido" com novo estilo retangular e dentro do card animado */}
        {isHighlighted && (
          <div
            className="absolute -top-4 left-1/2 -translate-x-1/2 transform 
            bg-red-500 text-white font-league text-3xl rounded uppercase px-4 py-2 z-10
            transition-all duration-500 ease-out"
          >
            MAIS VENDIDO
          </div>
        )}

        {/* TÍTULO DENTRO DO CARD (apenas para curso destacado) */}
        {isHighlighted && (
          <h2 className="font-league uppercase  text-saude-dark-blue text-8xl tracking-tighter mb-3 text-center pt-4">
            {title}
          </h2>
        )}

        <div className="relative my-3">
          <img src={imageSrc} alt={heading} className="rounded-xl w-full" />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center p-2">
            <p
              className={`font-league text-white text-center leading-tight drop-shadow-lg ${
                isHighlighted ? 'text-3xl' : 'text-2xl'
              }`}
            >
              {imageText}
            </p>
          </div>
        </div>

        {/* SUBTÍTULO */}
        <h3
          className={`font-league uppercase text-saude-dark-blue ${
            isHighlighted ? 'text-2xl' : 'text-xl'
          } mb-3 text-center`}
        >
          {heading}
        </h3>

        {/* DESCRIÇÃO */}
        <p
          className={`font-ttnorms text-saude-dark-blue mt-1 mb-4 flex-grow ${
            isHighlighted ? 'text-sm' : 'text-xs'
          } text-center px-3`}
        >
          {description}
        </p>

        {/* BOTÕES */}
        <div className="flex flex-row items-center justify-center gap-2">
          <button
            className={`font-bold uppercase rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-98
            ${
              isHighlighted ? 'text-xs px-4 py-2' : 'text-xs px-3 py-1.5'
            } ${compreAgoraStyle}`}
          >
            Compre Agora
          </button>
          <LearnMoreButton text="Saiba Mais" />
        </div>

        {/* PREÇO */}
        <div className="mt-auto pt-4 text-center font-ttnorms text-saude-dark-blue">
          
          {/* Valor parcelado agora está em destaque */}
          <div className="bg-red-500 text-white rounded-lg p-2 inline-block shadow-lg">
            <p className={`font-bold ${isHighlighted ? 'text-2xl' : 'text-xl'}`}>
              {priceInstallments}
            </p>
          </div>
          
          {/* Valor à vista agora é o texto secundário */}
          <p className={`mt-2 ${isHighlighted ? 'text-sm' : 'text-xs'}`}>
            ou <span className="font-bold">{priceFull}</span> à vista
          </p>

        </div>
      </div>
    </div>
  );
}

export default CourseCard;
