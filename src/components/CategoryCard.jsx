import React from "react";

function CategoryCard({
  title,
  description,
  gradientClasses,
  imageSrc,
  imagePosition,
  buttonText,
  flipImage,
}) {
  const firstLetter = title.charAt(0);
  const restOfTitle = title.substring(1);
  const imageOnLeft = imagePosition === "left";

  // A lógica de virar a imagem (scale) permanece, pois é uma escolha de design
  let scaleClass = "-scale-x-100"; // Padrão virado para a esquerda
  if (imageOnLeft) {
    scaleClass = "scale-x-100"; // Vira para a direita se a imagem for à esquerda
  }
  // A prop flipImage pode forçar uma direção específica se necessário
  if (flipImage === true) scaleClass = "-scale-x-100";
  if (flipImage === false) scaleClass = "scale-x-100";

  return (
    // MOBILE-FIRST: O layout base é uma coluna (flex-col).
    // DESKTOP: Em telas grandes (lg), vira uma linha (lg:flex-row).
    <div className="relative flex flex-col lg:flex-row items-center border-2 border-white/20 rounded-3xl">
      {/* Barra de Gradiente Responsiva */}
      {/* No mobile, é uma borda no topo. No desktop, é uma barra lateral. */}
      <div
        className={`absolute ${gradientClasses} 
        top-0 left-0 w-full h-4 lg:h-full lg:w-4 rounded-t-3xl lg:rounded-3xl 
        ${imageOnLeft ? "lg:-left-6" : "lg:-right-6"}`}
      ></div>

      {/* Container da Imagem */}
      {/* A ordem da imagem (1ª ou 2ª) muda no desktop baseado na prop 'imageOnLeft' */}
      <div
        className={`w-full lg:w-5/12 p-4 ${
          imageOnLeft ? "lg:order-1" : "lg:order-2"
        }`}
      >
        <img
          src={imageSrc}
          alt={title}
          className={`w-full max-h-[350px] object-contain pointer-events-none ${scaleClass}`}
          style={{ filter: "drop-shadow(0 0 10px rgba(0,0,0,0.5))" }}
        />
      </div>

      {/* Container do Texto */}
      {/* Texto alinha no centro no mobile, e à esquerda no desktop. */}
      <div
        className={`w-full lg:w-7/12 p-6 md:p-8 flex flex-col text-center lg:text-left ${
          imageOnLeft ? "lg:order-2" : "lg:order-1"
        }`}
      >
        {/* Título: fonte responsiva */}
        <h3 className="text-4xl md:text-5xl lg:text-6xl uppercase text-white drop-shadow-lg flex items-baseline justify-center lg:justify-start">
          <span className="font-allura text-6xl md:text-7xl lg:text-8xl normal-case">
            {firstLetter}
          </span>
          <span className="font-league ml-2">{restOfTitle}</span>
        </h3>

        <p className="font-ttnorms text-base md:text-lg mt-4 leading-relaxed">
          {description}
        </p>

        {/* O botão agora faz parte do fluxo normal, sem position: absolute */}
        <button className="mt-8 mx-auto lg:mx-0 self-start bg-[#4b1a5a] text-white py-3 px-8 rounded-full text-xs sm:text-sm font-bold uppercase border-2 border-white hover:brightness-125 transition-all w-full max-w-xs lg:w-auto">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default CategoryCard;
