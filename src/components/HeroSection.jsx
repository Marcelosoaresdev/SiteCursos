import React from "react";
import leaoImage from "../assets-webp/leao.webp";

function HeroSection() {
  return (
    <section className="bg-hero-pattern text-text-light w-full relative overflow-hidden">
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* ================================================================== */}
        {/* 1. LAYOUT PARA CELULAR E TABLET (Visível até 'lg') */}
        {/* ================================================================== */}
        <div className="flex flex-col text-center pt-24 pb-16 lg:hidden">
          {/* Parágrafo de apoio no topo */}
          <div className="mb-12">
            <p className="font-ttnorms text-lg sm:text-xl leading-snug max-w-md mx-auto">
              O que <strong className="font-bold">TEMOS</strong> em comum não é
              a ausência de pequenez - mas sim a coragem de crescer a partir
              dela.
            </p>
          </div>

          {/* Título Principal com margem corrigida */}
          <div>
            <h1 className="font-league text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-2 [text-shadow:4px_4px_0_rgba(0,0,0,0.4)]">
              TODO GIGANTE
            </h1>
            <h1 className="font-league text-[6.5rem] sm:text-[8rem] uppercase tracking-tighter leading-[0.8] mb-12 [text-shadow:8px_8px_0_rgba(0,0,0,0.6),_12px_12px_4px_rgba(0,0,0,0.2)]">
              JÁ FOI <br /> PEQUENO
            </h1>
          </div>

          {/* Imagem do Leão na base */}
          <div>
            <img
              src={leaoImage}
              alt="Leão e seu filhote"
              className="w-full max-w-sm mx-auto h-auto -scale-x-100"
            />
          </div>
        </div>

        {/* ================================================================== */}
        {/* 2. LAYOUT PARA DESKTOP (Visível a partir de 'lg') */}
        {/* ================================================================== */}
        <div className="hidden lg:flex container mx-auto px-6 sm:px-8 lg:px-16 items-center min-h-screen">
          {/* CAMADA 1: TEXTO PRINCIPAL (z-10) - COM SOMBRA CUSTOMIZADA VIA TAILWIND */}
          <div className="relative z-10 pt-16 pb-20 text-center">
            <h1 className="font-league text-5xl sm:text-6xl lg:text-8xl uppercase tracking-tight leading-none mb-2 [text-shadow:4px_4px_0_rgba(0,0,0,0.4)]">
              TODO GIGANTE
            </h1>
            <h1 className="font-league text-[6.5rem] sm:text-[8rem] md:text-[10rem] lg:text-[18rem] uppercase tracking-tighter leading-[0.8] mb-40 [text-shadow:8px_8px_0_rgba(0,0,0,0.6),_12px_12px_4px_rgba(0,0,0,0.2)]">
              JÁ FOI <br /> PEQUENO
            </h1>
          </div>

          {/* CAMADA 2: IMAGEM DO LEÃO (z-20) */}
          <img
            src={leaoImage}
            alt="Leão e seu filhote"
            className="absolute z-20 bottom-0 right-0 w-full md:w-[75%] lg:w-[65%] h-auto -scale-x-100 pointer-events-none"
          />

          {/* CAMADA 3: TEXTO PEQUENO (z-30) */}
          <div className="absolute z-30 top-28 right-6 sm:right-8 lg:right-16 max-w-sm text-center">
            <p className="font-ttnorms text-xl sm:text-3xl leading-snug">
              O que <strong className="font-bold">TEMOS</strong> em comum não é
              a ausência de pequenez - mas sim a coragem de crescer a partir
              dela.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
