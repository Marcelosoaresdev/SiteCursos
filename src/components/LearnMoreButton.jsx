// LearnMoreButton.jsx (versão otimizada)
import React from 'react';

function LearnMoreButton({ text }) {
  return (
    <button className="group relative w-32 h-8 cursor-pointer border-none bg-transparent p-0">
      {/* Círculo reduzido */}
      <span className="
        absolute top-0 left-0 block m-0 w-8 h-8 bg-[#282936] rounded-[1.2rem]
        transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
        group-hover:w-full
      ">
        {/* Ícone de seta reduzido */}
        <span className="
          absolute top-0 bottom-0 m-auto left-1.5 w-[0.75rem] h-[0.09rem]
          transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
          group-hover:bg-white group-hover:translate-x-2.5
          before:absolute before:content-[''] before:-top-[0.19rem] before:right-px 
          before:w-[0.5rem] before:h-[0.5rem] before:border-t-[0.1rem] before:border-r-[0.1rem] 
          before:border-white before:rotate-45
        " />
      </span>
      
      {/* Texto do botão reduzido */}
      <span className="
        absolute inset-0 py-1.5 my-0 ml-6
        text-[#282936] font-bold text-[0.7rem] leading-relaxed text-center uppercase
        transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
        group-hover:text-white
      ">
        {text}
      </span>
    </button>
  );
}

export default LearnMoreButton;