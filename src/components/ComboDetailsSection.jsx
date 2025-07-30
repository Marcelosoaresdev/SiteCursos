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
        {/* 3. BANNER ADICIONADO AQUI */}
        {isStudentVersion && (
          <div className="flex justify-center mb-12">
            <div className="bg-red-600 text-white font-league text-4xl uppercase rounded-lg px-8 py-2 shadow-lg">
              Espaço do Universitário
            </div>
          </div>
        )}
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
              alt="Pacote Combo"
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
            {/* Transformamos o botão em um link (<a>) */}
            <a
              href={content.included.buttonLink} // 1. Usamos o link do objeto de dados
              target="_blank" // 2. Abre o link em uma nova aba
              rel="noopener noreferrer" // 3. Boa prática de segurança para links externos
              className="relative group inline-block overflow-hidden font-ttnorms font-bold text-saude-white text-md md:text-lg uppercase rounded-full px-8 py-4 border-2 border-saude-white hover:border-saude-dark-blue transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <span className="relative z-10">
                {content.included.buttonText}
              </span>
              <span className="absolute top-0 left-0 w-full h-full bg-saude-dark-blue scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500 ease-out z-0" />
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
