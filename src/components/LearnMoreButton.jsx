import React from 'react';

function LearnMoreButton({ text, variant = 'dark', onClick }) {
  const circleColor = variant === 'light' ? 'bg-white' : 'bg-[#282936]';

  // CORREÇÃO AQUI: A cor inicial do texto na variante 'light' agora é 'text-white'
  const initialTextColor =
    variant === 'light' ? 'text-white' : 'text-[#282936]';

  const hoverTextColor =
    variant === 'light'
      ? 'group-hover:text-saude-dark-blue'
      : 'group-hover:text-white';
  const arrowColor =
    variant === 'light'
      ? 'before:border-saude-dark-blue'
      : 'before:border-white';
  const arrowHoverBg =
    variant === 'light'
      ? 'group-hover:bg-saude-dark-blue'
      : 'group-hover:bg-white';

  return (
    <button
      onClick={onClick}
      className="group relative w-32 h-8 cursor-pointer border-none bg-transparent p-0 flex items-center"
    >
      <span
        className={`
        absolute top-0 left-0 block m-0 w-8 h-8 rounded-[1.2rem]
        transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
        group-hover:w-full
        ${circleColor}
      `}
      >
        <span
          className={`
          absolute top-0 bottom-0 m-auto left-1.5 w-[0.75rem] h-[0.09rem]
          transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
          group-hover:translate-x-2.5
          ${arrowHoverBg}
          before:absolute before:content-[''] before:-top-[0.19rem] before:right-px 
          before:w-[0.5rem] before:h-[0.5rem] before:border-t-[0.1rem] before:border-r-[0.1rem] 
          before:rotate-45
          ${arrowColor}
        `}
        />
      </span>

      <span
        className={`
        absolute inset-0 py-1.5 my-0 ml-6  text-[0.8rem] leading-relaxed text-center uppercase
        transition-all duration-500 ease-[cubic-bezier(0.65,0,0.076,1)]
        ${initialTextColor}
        ${hoverTextColor}
      `}
      >
        {text}
      </span>
    </button>
  );
}

export default LearnMoreButton;
