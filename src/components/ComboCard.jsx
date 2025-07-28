// ComboCard.jsx - VERSÃO REATORADA E GENÉRICA

import React from 'react';
import LearnMoreButton from './LearnMoreButton';

function ComboCard({
  heading,
  description,
  imageSrc,
  id,
  priceInstallments,
  priceFull,
  purchaseLink, // 1. Recebendo o link de compra
  theme,          // 2. Recebendo o objeto de tema
}) {
  const handleLearnMoreClick = () => {
    // O scroll para a seção de detalhes do combo
    document.getElementById(`combo-section`)?.scrollIntoView({ behavior: 'smooth' });
  };

  // Se o tema não for passado, define um objeto vazio para não quebrar
  const safeTheme = theme || {};

  return (
    <div className="w-full px-4 md:px-8 mt-24 md:mt-32">
      {/* 3. Título "Combo" agora usa a cor do tema */}
      <h2 className={`text-center font-league text-7xl md:text-8xl ${safeTheme.titleColor} uppercase mb-8`}>
        Combo
      </h2>

      {/* 4. Background e borda do card agora usam o tema */}
      <div
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto rounded-2xl border-2 p-4 md:p-5 shadow-[12px_17px_51px_rgba(0,0,0,0.22)] ${safeTheme.cardBg} ${safeTheme.cardBorder}`}
      >
        {/* IMAGEM */}
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
            {/* 5. Heading e descrição agora usam a cor do tema */}
            <h3 className={`font-league text-3xl ${safeTheme.headingColor} uppercase`}>
              {heading}
            </h3>
            <p className={`font-ttnorms ${safeTheme.textColor} mt-2`}>{description}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center md:justify-start">
            {/* 6. Botão de compra agora é um link e usa as cores do tema */}
            <a
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold uppercase text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-98 ${safeTheme.buttonBg} ${safeTheme.buttonText}`}
            >
              Compre Agora
            </a>
            <LearnMoreButton 
              text="Saiba Mais" 
              onClick={handleLearnMoreClick} 
              variant={safeTheme.learnMoreVariant}
            />
          </div>

          <div className={`mt-6 w-full sm:max-w-xs mx-auto md:mx-0 font-ttnorms ${safeTheme.headingColor}`}>
             {/* 7. Caixa de preço agora usa a cor do tema */}
            <div className={`${safeTheme.priceBg} text-white rounded-lg p-2 inline-block shadow-lg`}>
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