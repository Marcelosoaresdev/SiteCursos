import React from "react";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

function CategoryHero({
  title,
  subtitle,
  heroImage,
  gradient,
  titleColor1,
  titleColor2,
  subtitleColor,
}) {
  // Detecta se está no modo universitário
  const isStudentVersion = useIsStudentVersion();

  // Frase de impacto baseada na categoria
  const getImpactPhrase = (categoryTitle) => {
    const phrases = {
      "Energia e Disciplina":
        "Domine os pilares fundamentais de uma saúde física impecável e desperte seu máximo potencial",
      "CORRIDA PRA VIDA":
        "Do primeiro passo ao pódio, domine os pilares fundamentais de uma saúde física impecável e desperte seu máximo potencial.",
      "DO PRIMEIRO REAL AO IMPÉRIO":
        "Construa uma mentalidade milionária e conquiste sua independência financeira total",
      "TRANSFORME SEUS MAIORES SONHOS":
        "Em conquistas inevitáveis através de estratégias comprovadas, seus sonhos merecem um plano que realmente funcione.",
      "Confiança inabalável":
        "Desenvolva uma confiança inabalável e torne-se a versão mais poderosa de si mesmo. Não é sobre fingir confiança, é construir um valor real que ninguém pode tirar de você.",
      "CRIE CONEXÕES":
        "Profundas e relacionamentos extraordinários que duram para sempre, seu padrão no amor não é má sorte - é programação que pode mudar!",
    };
    return (
      phrases[categoryTitle] ||
      "Transforme sua vida através de métodos comprovados e resultados garantidos"
    );
  };

  const impactPhrase = getImpactPhrase(title);

  const handleScrollDown = () => {
    // Tenta encontrar a próxima seção na ordem de prioridade
    const selectors = [
      '[id*="courses-section"]',
      '[class*="CoursesSection"]',
      "section:nth-of-type(2)",
      'div[class*="Section"]:not([class*="Hero"])',
    ];

    for (const selector of selectors) {
      const nextSection = document.querySelector(selector);
      if (nextSection) {
        nextSection.scrollIntoView({ behavior: "smooth" });
        return;
      }
    }

    // Fallback: scroll para baixo uma altura de viewport
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  return (
    <section
      className={`relative w-full overflow-hidden ${gradient} ${
        isStudentVersion ? "pt-2 md:pt-36" : "" // cria espaço extra se for universitário
      }`}
    >
      {/* Padrão de grade no fundo */}
      <div
        className="absolute inset-0 opacity-50 "
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Banner especial para universitário */}
      {isStudentVersion && (
        <div className="absolute top-16 md:top-20 left-1/2 -translate-x-1/2 bg-red-600 text-white px-6 py-3 rounded-lg shadow-lg text-center z-20">
          <span className="font-bold text-lg sm:text-xl md:text-2xl uppercase">
            ESPAÇO DO UNIVERSITÁRIO
          </span>
        </div>
      )}

      {/* ================= MOBILE / TABLET ================= */}
      <div
        className={`lg:hidden flex flex-col min-h-screen pb-8 px-6 relative z-10 justify-between ${
          isStudentVersion ? "pt-32" : "pt-16"
        }`}
      >
        {/* Conteúdo principal */}
        <div className="flex flex-col justify-center flex-1 space-y-8">
          {/* Imagem simples - SEM efeitos */}
          <div className="flex justify-center">
            <img
              src={heroImage}
              alt={title}
              className="w-80 sm:w-96 object-contain"
            />
          </div>

          {/* Título e subtítulo - SEGUNDO */}
          <div className="space-y-6 max-w-md">
            {/* Título principal */}
            <h1 className="font-league text-5xl sm:text-5xl uppercase leading-tight font-extrabold drop-shadow-md text-left">
              <span className={`${titleColor1}`}>{title}</span>
            </h1>

            {/* Frase de impacto */}
            <h2
              className={`font-ttnorms text-xl sm:text-2xl ${titleColor1} font-bold leading-tight text-left`}
            >
              {impactPhrase}
            </h2>

            {/* Texto descritivo */}
            <p
              className={`font-ttnorms text-base sm:text-lg ${subtitleColor} leading-relaxed opacity-90 text-left`}
            >
              {subtitle}
            </p>
          </div>
        </div>

        {/* Seta para baixo - CENTRALIZADA */}
        <div className="flex justify-center">
          <button
            onClick={handleScrollDown}
            className="animate-bounce bg-white/30 backdrop-blur-sm rounded-full p-4 hover:bg-white/40 transition-all duration-300 shadow-lg border border-white/20"
            aria-label="Rolar para baixo"
          >
            <svg
              className="w-6 h-6 text-white drop-shadow-md"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* ================= DESKTOP ================= */}
      <div
        className={`hidden lg:flex items-center justify-between gap-8 relative z-10 px-16 ${
          isStudentVersion ? "min-h-[85vh]" : "min-h-[100vh]"
        }`}
      >
        {/* Texto */}
        <div className="w-1/2 relative z-10 space-y-8">
          {/* Título principal */}
          <h1 className="font-league text-6xl xl:text-9xl leading-none uppercase font-extrabold tracking-tight">
            <span className={`${titleColor1} drop-shadow-lg`}>{title}</span>
          </h1>

          {/* Frase de impacto */}
          <h2
            className={`font-ttnorms text-3xl ${titleColor1} font-bold leading-tight max-w-2xl`}
          >
            {impactPhrase}
          </h2>

          {/* Texto descritivo */}
          <p
            className={`font-ttnorms text-xl xl:text-2xl ${subtitleColor} font-medium max-w-xl leading-relaxed opacity-90`}
          >
            {subtitle}
          </p>
        </div>

        {/* Imagem simples */}
        <div className="relative w-1/2 flex justify-end">
          <img src={heroImage} alt={title} className="w-[85%] max-w-2xl" />
        </div>

        {/* Seta para baixo centralizada no desktop */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <button
            onClick={handleScrollDown}
            className="animate-bounce bg-white/20 backdrop-blur-sm rounded-full p-4 hover:bg-white/30 transition-all duration-300"
            aria-label="Rolar para baixo"
          >
            <svg
              className="w-8 h-8 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Detalhes decorativos aprimorados */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 -left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 -right-12 w-40 h-40 rounded-full bg-white/10 blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 rounded-full bg-white/5 blur-2xl" />
      </div>
    </section>
  );
}

export default CategoryHero;
