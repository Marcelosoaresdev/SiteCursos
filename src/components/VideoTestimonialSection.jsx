// VideoTestimonialSection.jsx - VERSÃO REATORADA

import React from "react";

function VideoTestimonialSection({ content }) {
  // Se não houver conteúdo ou um ID de vídeo, o componente não é renderizado.
  if (!content || !content.videoId) {
    return null;
  }

  return (
    <section className="relative w-full py-20 px-6 sm:px-8">
      {/* CAMADA 1: Imagem de fundo (já estava genérica) */}
      {content.background && (
        <div
          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40"
          style={{ backgroundImage: `url(${content.background})` }}
        ></div>
      )}

      {/* CAMADA 2: Sobreposição de GRADIENTE (agora genérica) */}
      {/* 1. O gradiente agora vem da prop 'content.gradient' */}
      <div className={`absolute inset-0 ${content.gradient}`}></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Coluna do Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            {/* 2. A cor do texto agora vem da prop 'content.textColor' */}
            <p className={`font-ttnorms text-xl md:text-2xl leading-relaxed max-w-lg mx-auto md:mx-0 ${content.textColor}`}>
              {content.text}
            </p>
          </div>

          {/* Coluna do Player de Vídeo */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
              {/* 3. CORREÇÃO: URL de embed do YouTube ajustada para o formato correto */}
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${content.videoId}`}
                title="Player de vídeo do YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default VideoTestimonialSection;