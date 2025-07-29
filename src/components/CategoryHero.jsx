import React from "react";

function CategoryHero({
  title,
  subtitle,
  heroImage,
  gradient,
  titleColor1,
  titleColor2,
  subtitleColor,
}) {
  // Quebra o título em duas palavras
  const [word1, word2] = title.split(" ");

  return (
    <section className={`relative w-full overflow-hidden ${gradient}`}>
      <div className="container mx-auto px-6 sm:px-8 lg:px-16 py-10 md:py-14 lg:py-20">
        {/* ================= MOBILE / TABLET ================= */}
        <div className="flex flex-col-reverse lg:hidden items-center text-center gap-8">
          {/* Texto */}
          <div className="flex flex-col items-center">
            <h1 className="font-league text-5xl sm:text-6xl uppercase leading-tight font-extrabold drop-shadow-md">
              <span className={`${titleColor1}`}>{word1}</span>{" "}
              <span className={`${titleColor2}`}>{word2 || ""}</span>
            </h1>
            <p
              className={`font-ttnorms text-base sm:text-lg ${subtitleColor} mt-4 max-w-xs`}
            >
              {subtitle}
            </p>
          </div>

          {/* Imagem */}
          <div className="w-4/5 sm:w-3/5">
            <img
              src={heroImage}
              alt={title}
              className="w-full h-auto -scale-x-100 drop-shadow-xl"
            />
          </div>
        </div>

        {/* ================= DESKTOP ================= */}
        <div className="hidden lg:flex items-center justify-between gap-8 min-h-[80vh] relative">
          {/* Texto */}
          <div className="w-1/2 relative z-10">
            <h1 className="font-league text-8xl xl:text-[12rem] leading-none uppercase font-extrabold tracking-tight">
              <span className={`${titleColor1} drop-shadow-lg`}>
                {word1}
              </span>
              <br />
              <span className={`${titleColor2} drop-shadow-lg`}>
                {word2 || ""}
              </span>
            </h1>
            <p
              className={`font-ttnorms text-2xl xl:text-3xl ${subtitleColor} mt-8 font-medium max-w-xl`}
            >
              {subtitle}
            </p>
          </div>

          {/* Imagem com efeito */}
          <div className="relative w-1/2 flex justify-end">
            <img
              src={heroImage}
              alt={title}
              className="relative w-[85%] max-w-2xl -scale-x-100 drop-shadow-2xl"
            />
          </div>
        </div>
      </div>

      {/* Detalhes decorativos opcionais */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 -left-10 w-32 h-32 rounded-full bg-white/10 blur-3xl" />
        <div className="absolute bottom-1/4 -right-12 w-40 h-40 rounded-full bg-white/10 blur-3xl" />
      </div>
    </section>
  );
}

export default CategoryHero;
