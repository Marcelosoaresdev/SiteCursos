import React from "react";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

// O componente agora recebe uma prop 'content'
function ComboDetailsSection({ content, id }) {
  const isStudentVersion = useIsStudentVersion();

  // Se não houver conteúdo para esta seção, não renderiza nada
  if (!content) {
    return null;
  }

  return (
    // Usa o gradiente e a cor de texto vindos dos dados
    <section
      id={id}
      className={`w-full ${content.textColor} ${content.gradient} py-20 px-6`}
    >
      <div className="container mx-auto">
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <h2 className="font-allura text-8xl md:text-9xl -mb-8">
              {content.header.subtitle}
            </h2>
            <h1 className="font-league text-6xl md:text-7xl uppercase">
              {content.header.title}
            </h1>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src={content.header.image}
              alt="Sistema Combo"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>

        {/* --- SEÇÃO "O QUE ESTÁ INCLUSO?" --- */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="font-league text-4xl uppercase mb-8">
            {content.included.title}
          </h3>
          <div className="font-ttnorms text-left text-lg space-y-3 border-l-2 border-blue-400/50 pl-6">
            {content.included.items.map((item, index) => (
              // Usamos dangerouslySetInnerHTML para renderizar o <strong>
              <p key={index} dangerouslySetInnerHTML={{ __html: item }}></p>
            ))}
          </div>
          <div className="mt-12">
            <a
              href={content.included.buttonLink}
              target="_blank"
              rel="noopener noreferrer"
              className="relative group inline-block overflow-hidden font-ttnorms font-bold text-md md:text-lg uppercase rounded-full px-8 py-4 border transition-all duration-300 hover:scale-105 active:scale-95
               bg-black/40 backdrop-blur-md border-white/20 text-white shadow-lg hover:bg-black/50 hover:border-white/40"
            >
              <span className="relative z-10">
                {content.included.buttonText}
              </span>

              {/* Efeito de brilho animado ao hover */}
              <span className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 group-hover:opacity-20 transition-opacity duration-500 z-0" />
            </a>
          </div>
        </div>

        {/* --- SEÇÃO "POR QUE ESCOLHER?" --- */}
        <div className="text-center mt-24">
          <h2 className="font-league text-6xl md:text-7xl uppercase font-black tracking-wider">
            {content.why.line1}
          </h2>
          <p className="font-ttnorms text-xl max-w-xl mx-auto my-6 italic">
            {content.why.paragraph}
          </p>
          <h2 className="font-league text-6xl md:text-7xl uppercase font-black tracking-wider">
            {content.why.line2}
          </h2>
          <div className="w-32 h-1 bg-saude-white mx-auto my-8 rounded-full"></div>
        </div>

        {/* --- 3 CARDS DE BENEFÍCIOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          {content.benefits.map((item) => (
            <div
              key={item.title}
              className="bg-saude-white/10 backdrop-blur-lg border border-saude-white/20 rounded-2xl p-8 text-center shadow-lg transition-all duration-300 hover:bg-saude-white/20 hover:scale-105"
            >
              <h3 className="font-league text-5xl uppercase mb-4">
                {item.title}
              </h3>
              <p className="font-ttnorms text-xl">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ComboDetailsSection;
