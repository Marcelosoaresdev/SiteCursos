// FinalCtaSection.jsx - VERSÃO REATORADA

import React from 'react';
import { motion } from 'framer-motion';
import { fadeInUp } from '../utils/animationVariants';

function FinalCtaSection({ content }) {
  if (!content) {
    return null;
  }

  // 1. A constante com o link fixo foi REMOVIDA.

  return (
    // 2. Fundo e cor do texto da seção agora são dinâmicos
    <motion.section
      className={`w-full ${content.gradient} ${content.textColor} py-20 px-6`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        {/* TÍTULO E DESCRIÇÃO INICIAL */}
        <div className="max-w-4xl mx-auto text-center md:text-left">
          <h2 className="font-league text-4xl md:text-6xl uppercase">
            {content.title}
          </h2>
          <p className="font-ttnorms text-lg md:text-xl mt-4 leading-relaxed">
            {content.mainParagraph}
          </p>
        </div>

        {/* SEÇÃO DE PREÇOS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mt-16 max-w-4xl mx-auto">
          <div className="md:w-1/3 text-center md:text-right">
            <h3 className="font-league text-center text-5xl md:text-6xl uppercase leading-none">
              Preço <br /> Especial do <br /> Pacote:
            </h3>
          </div>

          <div className="md:w-2/3 flex justify-center md:justify-start">
            {/* 3. Cor do texto e bordas dos preços agora são dinâmicos */}
            <div className={`flex flex-col items-center gap-3 font-ttnorms ${content.textColor} w-full`}>
              <p className="text-xl line-through opacity-80">De {content.price.original}</p>
              <p className="text-xl font-semibold">por 12x de</p>
              <div className={`border-2 ${content.borderColor} rounded-full px-8 py-3 w-full max-w-xs text-center`}>
                <p className="font-bold text-4xl sm:text-5xl">{content.price.installments}</p>
              </div>
              <p className="text-xl font-bold uppercase">ou</p>
              <div className={`border-2 ${content.borderColor} rounded-full px-8 py-3 w-full max-w-xs text-center`}>
                <p className="font-bold text-4xl sm:text-5xl">{content.price.full}</p>
              </div>
              <p className="text-xl font-semibold">à vista</p>
            </div>
          </div>
        </div>

        {/* SEÇÃO DOS PRODUTOS INCLUSOS */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mt-12 max-w-4xl mx-auto">
          <div className="w-full md:w-1/2 flex justify-center">
            <img src={content.productImage} alt="Produtos do combo" className="max-w-xs w-full"/>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-ttnorms text-lg leading-relaxed">{content.bonusParagraph}</p>
          </div>
        </div>

        {/* BOTÃO DE CHAMADA PARA AÇÃO (CTA) FINAL */}
        <div className="text-center mt-16">
          {/* 4. O link e o estilo do botão agora são dinâmicos */}
          <a
            href={content.buttonLink}
            target="_blank"
            rel="noopener noreferrer"
            className={`inline-block font-bold text-2xl uppercase rounded-full px-12 py-4 shadow-lg transition-all duration-300 hover:scale-105 active:scale-98 ${content.buttonClasses}`}
          >
            {content.buttonText}
          </a>
        </div>
      </div>
    </motion.section>
  );
}

export default FinalCtaSection;