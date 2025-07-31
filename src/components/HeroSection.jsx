import { useIsStudentVersion } from "../hooks/useIsStudentVersion";
import leaoImage from "../assets/leao.webp";
import universitariosImage from "../assets/estudante.webp";
import React, { useMemo } from "react";

function HeroSection() {
  const isStudentVersion = useIsStudentVersion();

  const particles = useMemo(() => {
    return [...Array(25)].map(() => ({
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      width: `${Math.random() * 15 + 8}px`, // Ajustei um pouco o tamanho para mais variedade
      height: `${Math.random() * 15 + 8}px`,
      animationDuration: `${Math.random() * 5 + 3}s`, // Ajustei a duração
    }));
  }, []);

  const content = {
    mainTitle: isStudentVersion ? "DESPERTE o SEU" : "TODO GIGANTE",
    subTitle: isStudentVersion ? "GIGANTE" : "JÁ FOI PEQUENO",
    image: isStudentVersion ? universitariosImage : leaoImage,
    imageAlt: isStudentVersion ? "Estudantes celebrando" : "Leão e seu filhote",
    imageScaleClass: isStudentVersion ? "" : "-scale-x-100",
    // Novas propriedades para o gradiente
    gradient: isStudentVersion
      ? "from-[#761cc7] to-[#b362ff]"
      : "from-[#761cc7] to-[#b362ff]",
    // Propriedades para os SVGs abstratos
    abstractSVG: isStudentVersion ? (
      <>
        {/* Ondas azuis */}
        <svg
          className="absolute top-0 left-0 w-full opacity-80"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"
            fill="#FFB800"
          ></path>
        </svg>
      </>
    ) : null,
  };

  return (
    <div
      className={`bg-gradient-to-br ${content.gradient} text-white overflow-hidden relative`}
    >
      {/* === EFEITOS ABSTRATOS === */}
      <div className="absolute inset-0 z-0">{content.abstractSVG}</div>

      {/* === EFEITO DE PARTÍCULAS === */}
      <div className="absolute inset-0 overflow-hidden z-0">
        {/* 👇 3. Usamos a lista de partículas já calculada */}
        {particles.map((particle, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white opacity-10 animate-pulse"
            style={{
              top: particle.top,
              left: particle.left,
              width: particle.width,
              height: particle.height,
              animationDuration: particle.animationDuration,
            }}
          />
        ))}
      </div>

      {/* === MOBILE === */}
      <div className="lg:hidden flex flex-col min-h-screen pt-16 pb-8 px-6 relative z-10 text-center items-center justify-between">
        <div className="flex-1 flex flex-col justify-center items-center">
          <h1 className="font-league text-5xl sm:text-6xl uppercase tracking-tight leading-none mb-2 text-white drop-shadow-md">
            {content.mainTitle}
          </h1>
          <h2 className="font-league text-[5rem] sm:text-[6.5rem] uppercase leading-[0.85] tracking-tighter text-white drop-shadow-lg mb-8">
            {content.subTitle}
          </h2>

          <div className="relative w-full max-w-xs md:max-w-sm mb-8">
            <div className="absolute inset-0 bg-white rounded-full blur-2xl opacity-20 animate-pulse" />
            <img
              preload="true"
              fetchPriority="high"
              src={content.image}
              alt={content.imageAlt}
              className={`relative w-full h-auto object-contain ${content.imageScaleClass} ${
                isStudentVersion ? 'max-h-64 sm:max-h-72 md:max-h-80' : ''
              }`}
            />
          </div>

          {isStudentVersion ? (
            <p className="font-ttnorms text-lg sm:text-xl md:text-2xl max-w-md md:max-w-lg leading-snug mb-6 whitespace-pre-line">
              Chegou a sua hora, o mais importante é{" "}
              <strong className="font-bold text-white">
                dar o PRIMEIRO PASSO
              </strong>{" "}
              para transformar tudo! <br />
              <br />
              Comece agora a{" "}
              <strong className="font-bold text-white">jornada</strong> rumo à
              vida que você merece!
            </p>
          ) : (
            <p className="font-ttnorms text-lg sm:text-xl md:text-2xl max-w-md md:max-w-lg leading-snug mb-6">
              O que <strong className="text-white font-bold">TEMOS</strong> em
              comum não é a{" "}
              <strong className="text-white font-bold">
                ausência de pequenez
              </strong>{" "}
              — mas sim a{" "}
              <strong className="text-white font-bold">coragem de crescer</strong>{" "}
              a partir dela.
            </p>
          )}
        </div>

        <div className="pt-8 animate-bounce">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-white drop-shadow-lg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* === DESKTOP === */}
      <div className="hidden lg:flex min-h-screen items-center relative z-10">
        <div className="flex-1 flex flex-col justify-center pl-20 z-20">
          <h1 className="font-league text-7xl xl:text-8xl uppercase tracking-tight leading-none mb-4 text-white drop-shadow-md">
            {content.mainTitle}
          </h1>
          <h2 className="font-league text-[12rem] leading-[0.85] uppercase tracking-tighter mb-16 drop-shadow-[8px_8px_0_rgba(0,0,0,0.4)]">
            {content.subTitle}
          </h2>

          <div className="relative pl-6 border-l-4 border-white">
            {isStudentVersion ? (
              <p className="font-ttnorms text-2xl leading-snug max-w-lg whitespace-pre-line">
                {`Chegou a sua hora, o mais importante é
dar o PRIMEIRO PASSO para
transformar tudo!

Comece agora a
jornada rumo à vida que você merece!`}
              </p>
            ) : (
              <p className="font-ttnorms text-2xl leading-snug max-w-lg">
                O que <strong className="text-white font-bold">TEMOS</strong> em
                comum não é a ausência de pequenez — mas sim a coragem de
                crescer a partir dela.
              </p>
            )}
          </div>
        </div>

        <div className="flex-1 flex items-center justify-center relative z-10">
          <div className="relative w-[70%] max-w-2xl">
            <div className="absolute inset-0 bg-white rounded-full blur-3xl opacity-10 animate-pulse" />
            <img
              src={content.image}
              alt={content.imageAlt}
              className={`relative w-full h-auto object-contain ${content.imageScaleClass} ${
                isStudentVersion ? 'max-h-96 xl:max-h-[42rem]' : ''
              }`}
            />
          </div>
        </div>

        <div className="absolute bottom-11 left-1/2 -translate-x-1/2 z-20">
          <div className="flex flex-col items-center animate-bounce">
            <p className="text-sm font-ttnorms mb-2 opacity-80 text-white drop-shadow-md">
              Role para ver mais
            </p>
            <div className="w-14 h-14 rounded-full border-2 border-white flex items-center justify-center bg-white/10 backdrop-blur-sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
