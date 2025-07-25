import React from "react";

// Este componente recebe todas as informações de um curso via props
function CourseCard({
  title,
  imageSrc,
  imageText,
  heading,
  description,
  priceInstallments,
  priceFull,
  isHighlighted = false, // Valor padrão é falso
}) {
  return (
    // O card principal. Aplicamos estilos especiais se 'isHighlighted' for verdadeiro.
    <div
      className={`relative bg-white rounded-2xl shadow-lg p-6 text-center flex flex-col w-full max-w-sm transition-transform duration-300
        ${
          isHighlighted
            ? "border-4 border-blue-500 transform lg:scale-110"
            : "border-4 border-transparent"
        }`}
    >
      {/* Tag "Mais Vendido" só aparece se isHighlighted for verdadeiro */}
      {isHighlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white text-sm font-bold uppercase px-4 py-1 rounded-full z-10">
          Mais Vendido
        </div>
      )}

      <h2 className="font-league text-4xl text-[#203162] uppercase">{title}</h2>

      <div className="relative my-4">
        <img src={imageSrc} alt={heading} className="rounded-xl w-full" />
        <div className="absolute inset-0 bg-black/30 rounded-xl flex items-center justify-center p-2">
          <p className="font-league text-white text-3xl text-center leading-tight drop-shadow-lg">
            {imageText}
          </p>
        </div>
      </div>

      <h3 className="font-league text-2xl text-[#203162] uppercase">
        {heading}
      </h3>
      <p className="font-ttnorms text-gray-600 text-sm mt-2 mb-6 flex-grow">
        {description}
      </p>

      <div className="flex gap-2 justify-center">
        <button className="bg-purple-700 text-white font-bold uppercase text-xs px-4 py-2 rounded-lg hover:bg-purple-800 transition-colors">
          Compre Agora
        </button>
        <button className="bg-transparent border-2 border-gray-400 text-gray-500 font-bold uppercase text-xs px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          Saiba Mais
        </button>
      </div>

      {/* O 'mt-auto' empurra o bloco de preço para o final do card, garantindo alinhamento */}
      <div className="mt-auto pt-6">
        <div className="bg-red-500 text-white rounded-xl p-3">
          <p className="text-sm">{priceInstallments}</p>
          <p className="font-bold text-2xl">{priceFull}</p>
          <p className="text-xs">à vista</p>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
