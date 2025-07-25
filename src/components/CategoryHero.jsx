import React from "react";

// O componente agora recebe as props para ser dinâmico
function CategoryHero({
  title,
  subtitle,
  heroImage,
  gradient,
  titleColor1,
  titleColor2,
  subtitleColor,
}) {
  // Separa o título em duas palavras (ex: "Saúde" e "Física")
  const [word1, word2] = title.split(" ");

  return (
    // Usa a prop 'gradient' para o fundo
    <section className={`w-full ${gradient} relative overflow-hidden`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16">
        {/* ================================================================== */}
        {/* SEU LAYOUT DE CELULAR/TABLET QUE JÁ FUNCIONAVA (agora com props) */}
        {/* ================================================================== */}
        <div className="flex flex-row justify-center items-center text-left py-12 lg:hidden gap-2 md:gap-8">
          <div className="w-1/4">
            <h1 className="font-league text-6xl sm:text-5xl uppercase leading-none font-extrabold">
              {/* Usa as props de cor e texto */}
              <span className={titleColor1}>{word1}</span>
              <br />
              <span className={titleColor2}>{word2 || ""}</span>
            </h1>
            <p
              className={`font-ttnorms text-base sm:text-lg ${subtitleColor} mt-4 font-medium max-w-xs`}
            >
              {/* Usa a prop de subtítulo */}
              {subtitle}
            </p>
          </div>
          <div className="w-3/4">
            {/* Usa a prop de imagem */}
            <img
              src={heroImage}
              alt={title}
              className="w-full h-auto -scale-x-100 pointer-events-none"
            />
          </div>
        </div>

        {/* ================================================================== */}
        {/* SEU LAYOUT DE DESKTOP QUE JÁ FUNCIONAVA (agora com props) */}
        {/* ================================================================== */}
        <div className="hidden lg:flex items-center min-h-screen relative">
          <div className="relative z-10 md:w-1/2 text-left">
            <h1 className="font-league lg:text-[14rem] uppercase leading-none font-extrabold">
              {/* Usa as props de cor e texto */}
              <span className={`${titleColor1} drop-shadow-lg`}>{word1}</span>
              <br />
              <span className={`${titleColor2} drop-shadow-lg`}>
                {word2 || ""}
              </span>
            </h1>
            <p
              className={`font-ttnorms lg:text-4xl ${subtitleColor} mt-6 font-medium max-w-md`}
            >
              {/* Usa a prop de subtítulo */}
              {subtitle}
            </p>
          </div>
          {/* Usa a prop de imagem */}
          <img
            src={heroImage}
            alt={title}
            className="absolute z-20 bottom-0 right-0 lg:w-[65%] h-auto -scale-x-100 pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}

export default CategoryHero;
