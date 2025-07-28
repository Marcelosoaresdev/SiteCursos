import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import LearnMoreButton from './LearnMoreButton';

function CourseCard({
  id,
  title,
  imageSrc,
  imageText,
  heading,
  description,
  priceInstallments,
  priceFull,
  isHighlighted = false,
  purchaseLink,
  onLearnMoreClick,
}) {
  const navigate = useNavigate();
  const [isPurchasing, setIsPurchasing] = useState(false);

  const handlePurchaseClick = (e) => {
    e.stopPropagation();
    if (purchaseLink) {
      window.open(purchaseLink, '_blank', 'noopener,noreferrer');
    }
  };

  const handleLearnMoreClick = (e) => {
    e.stopPropagation();
    const element = document.getElementById(`curso-${id}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const compreAgoraStyle = isHighlighted
    ? 'bg-white text-saude-dark-blue hover:bg-gray-200'
    : 'bg-saude-dark-blue text-white border-2 border-saude-white hover:bg-opacity-80';

  const mainTextColor = isHighlighted ? 'text-white' : 'text-saude-dark-blue';

  return (
    // 2. O FEEDBACK VISUAL AGORA É SÓ PARA NAVEGAÇÃO INTERNA
    <div
      className={`relative flex flex-col items-center 
        w-full max-w-xs mx-auto transition-all duration-300
        ${isHighlighted ? 'md:w-64 lg:w-80' : 'md:w-56 lg:w-72'} ${
        !isHighlighted ? 'pt-12 md:pt-16' : ''
      }`}
    >
      {!isHighlighted && (
        <div
          onClick={handleLearnMoreClick}
          className="absolute top-0 w-full text-center z-10 "
        >
          <h2 className="font-league uppercase text-saude-dark-blue text-5xl md:text-6xl tracking-tighter mb-4">
            {title}
          </h2>
        </div>
      )}

      <div
        onClick={handleLearnMoreClick}
        className={`w-full h-full flex flex-col p-4 md:p-5 rounded-2xl border-2
        transition-all duration-500 ease-out
        shadow-[12px_17px_51px_rgba(0,0,0,0.22)]
        md:hover:scale-105 active:scale-95 active:rotate-1.7 relative
        ${
          isHighlighted
            ? 'bg-saude-dark-blue border-blue-400'
            : 'border-white hover:border-saude-dark-blue'
        }`}
        style={
          !isHighlighted
            ? {
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(6px)',
              }
            : {}
        }
      >
        {isHighlighted && (
          <div
            className="absolute -top-3 md:-top-4 lg:-top-4 left-1/2 -translate-x-1/2
            bg-red-500 text-white font-league text-xl md:text-lg lg:text-2xl 
            rounded-md uppercase px-3 md:px-2 lg:px-4 py-1 md:py-1 lg:py-1.5 z-20 shadow-lg whitespace-nowrap"
          >
            MAIS VENDIDO
          </div>
        )}

        {isHighlighted && (
          <h2
            className={`font-league uppercase text-5xl md:text-6xl tracking-tighter mb-3 text-center pt-8 ${mainTextColor}`}
          >
            {title}
          </h2>
        )}

        <div className="relative my-3 h-auto">
          <img
            src={imageSrc}
            alt={heading}
            className="rounded-xl w-full h-full object-cover"
          />
        </div>

        <h3
          className={`font-league uppercase ${mainTextColor} ${
            isHighlighted
              ? 'text-xl md:text-2xl lg:text-3xl'
              : 'text-lg md:text-xl lg:text-2xl'
          } mb-3 text-center`}
        >
          {heading}
        </h3>

        <p
          className={`font-ttnorms mt-1 mb-4 flex-grow ${
            isHighlighted ? 'text-white/80' : 'text-saude-dark-blue'
          } ${
            isHighlighted ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'
          } text-center px-3`}
        >
          {description}
        </p>

        <div className="flex flex-row items-center justify-center gap-2 mb-3">
          <button
            onClick={handlePurchaseClick}
            className={`font-bold uppercase rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-98 whitespace-nowrap
              ${
                isHighlighted
                  ? 'text-sm md:text-md px-3 md:px-4 py-1.5 md:py-2'
                  : 'text-sm px-2 py-1'
              } ${compreAgoraStyle}`}
          >
            {isPurchasing ? 'Aguarde...' : 'Compre Agora'}
          </button>

          <div
            onClick={handleLearnMoreClick}
            className="transform scale-75 md:scale-90 lg:scale-100"
          >
            <LearnMoreButton
              text="Saiba Mais"
              variant={isHighlighted ? 'light' : 'dark'}
            />
          </div>
        </div>

        <div
          className={`mt-auto pt-4 text-center font-ttnorms ${mainTextColor}`}
        >
          <div className="bg-red-500 text-white rounded-lg p-2 inline-block shadow-lg">
            <p
              className={`font-bold ${
                isHighlighted ? 'text-xl md:text-2xl' : 'text-lg md:text-xl'
              }`}
            >
              {priceInstallments}
            </p>
          </div>
          <p
            className={`mt-2 ${
              isHighlighted ? 'text-xs md:text-sm' : 'text-[10px] md:text-xs'
            }`}
          >
            ou <span className="font-bold">{priceFull}</span> à vista
          </p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
