import React from "react";
import leaoImage from "../assets-webp/leao.webp"; // Usando a imagem .webp otimizada

function HeroSection() {
  return (
    // Padding começa pequeno (px-6) e aumenta em telas maiores.
    <section className="bg-category-gradient text-text-light w-full py-20 md:py-24 px-6 sm:px-8 lg:px-16">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
        {/* Coluna do Texto */}
        {/* No mobile, o texto é centralizado. No desktop (md), alinha à esquerda. */}
        <div className="md:w-1/2 text-center md:text-left">
          {/* Títulos com fontes responsivas. Começam menores e crescem com a tela. */}
          <h1 className="font-league text-5xl sm:text-6xl lg:text-7xl uppercase tracking-tight leading-none mb-2">
            TODO GIGANTE
          </h1>
          <h1 className="font-league text-[6.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[12rem] uppercase tracking-tighter leading-[0.8] mb-6">
            JÁ FOI <br /> PEQUENO
          </h1>

          {/* Parágrafo com fonte responsiva. */}
          <p className="font-ttnorms text-xl sm:text-2xl max-w-lg mx-auto md:mx-0 leading-snug">
            O que <strong className="font-bold">TEMOS</strong> em comum não é a
            ausência de pequenez - mas sim a coragem de crescer a partir dela.
          </p>
        </div>

        {/* Coluna da Imagem */}
        {/* Garante que a imagem não exceda a largura do seu container e se ajuste bem. */}
        <div className="w-full max-w-md md:w-1/2 flex justify-center md:justify-end">
          <img
            src={leaoImage}
            alt="Leão e seu filhote"
            className="w-full h-auto object-contain -scale-x-100"
          />
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
