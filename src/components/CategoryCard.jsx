import React from "react";
import { Link } from "react-router-dom";

function CategoryCard({
  title,
  description,
  gradientClasses,
  imageSrc,
  buttonText,
  linkTo,
}) {
  // 1. A lógica condicional no final foi removida.
  //    Agora o componente retorna diretamente o JSX do card.
  return (
    <div className="w-full mx-auto bg-brand-purple-light h-80 lg:h-96 rounded-2xl overflow-hidden relative group/card p-6 flex flex-col items-center justify-start text-center">
      {/* Círculo de hover */}
      <div
        className={`absolute h-24 w-24 -top-12 -right-12 rounded-full ${gradientClasses} group-hover/card:scale-[900%] duration-500 z-0 transition-transform`}
      />

      {/* IMAGEM */}
      <img
        src={imageSrc}
        alt={title}
        className="h-32 lg:h-40 object-contain mb-3 pointer-events-none z-10 transition-all duration-500 group-hover/card:scale-110 group-hover/card:-translate-y-2"
      />

      {/* TÍTULO */}
      <h3 className="z-10 font-league text-3xl sm:text-4xl lg:text-5xl uppercase text-text-light group-hover/card:text-white duration-500">
        {title}
      </h3>

      {/* DESCRIÇÃO */}
      <p className="z-10 text-sm lg:text-base font-ttnorms mt-2 text-text-light/70 group-hover/card:text-white/90 duration-500">
        {description}
      </p>

      {/* BOTÃO */}
      <div className="z-10 md:mt-auto mt-2 w-full">
        {/* 2. O elemento <button> foi substituído por <Link>. */}
        {/* Todas as classes de estilo do botão foram aplicadas diretamente no Link. */}
        <Link
          to={linkTo}
          className="flex justify-center gap-2 items-center mx-auto shadow-xl lg:text-sm text-xs font-bold bg-white backdrop-blur-md isolation-auto border-white before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-brand-purple hover:text-white before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
        >
          <span className="text-brand-purple group-hover:text-white transition-colors duration-300">
            {buttonText}
          </span>
          <svg
            className="w-6 h-6 justify-end group-hover:rotate-90 group-hover:bg-white text-brand-purple ease-linear duration-300 rounded-full border border-brand-purple group-hover:border-none p-1 rotate-45"
            viewBox="0 0 16 19"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
              className="fill-current group-hover:fill-brand-purple"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}

export default CategoryCard;