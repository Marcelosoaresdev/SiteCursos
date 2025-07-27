import React from "react";
import LearnMoreButton from "./LearnMoreButton";

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
    // LARGURA DOS CARDS 1 E 3 AUMENTADA AQUI
    <div className={`relative flex flex-col text-center transition-all duration-300
        ${isHighlighted ? 'lg:w-96' : 'lg:w-80'}`}
    >
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-bold uppercase px-4 py-1 rounded-full z-10">
          Mais Vendido
        </div>
      )}
      
      <div className={`w-full h-full flex flex-col p-4 md:p-6 rounded-2xl border-2
        ${isHighlighted ? 'border-blue-400' : 'border-blue-300'}`}
        style={{ background: 'rgba(255, 255, 255, 0.1)', backdropFilter: 'blur(10px)' }}
      >
        <h2 className={`font-league uppercase drop-shadow-md ${isHighlighted ? 'text-5xl' : 'text-4xl'}`}>{title}</h2>
        <div className="relative my-4">
          <img src={imageSrc} alt={heading} className="rounded-xl w-full" />
          <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center p-2">
            <p className={`font-league text-white text-center leading-tight drop-shadow-lg ${isHighlighted ? 'text-4xl' : 'text-3xl'}`}>{imageText}</p>
          </div>
        </div>
        <h3 className={`font-league text-white uppercase drop-shadow-md ${isHighlighted ? 'text-3xl' : 'text-2xl'}`}>{heading}</h3>
        <p className={`font-ttnorms text-white/80 mt-2 mb-6 flex-grow ${isHighlighted ? 'text-base' : 'text-sm'}`}>{description}</p>
        
        <div className="flex flex-row items-center justify-center gap-2">
          <button className={`font-bold uppercase rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-98
            ${isHighlighted ? 'text-sm px-4 py-2' : 'text-xs px-3 py-1.5'} ${compreAgoraStyle}`}
          >
            Compre Agora
          </button>
          
          <LearnMoreButton text="Saiba Mais" />
        </div>
        
        <div className="mt-auto pt-6">
          <div className="bg-red-500 text-white rounded-xl p-3">
            <p className={`${isHighlighted ? 'text-base' : 'text-sm'}`}>{priceInstallments}</p>
            <p className={`font-bold ${isHighlighted ? 'text-3xl' : 'text-2xl'}`}>{priceFull}</p>
            <p className={`${isHighlighted ? 'text-sm' : 'text-xs'}`}>à vista</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;