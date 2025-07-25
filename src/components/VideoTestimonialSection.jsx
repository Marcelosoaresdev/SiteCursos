import React from "react";

function VideoTestimonialSection({ content }) {
  if (!content || !content.videoId) {
    return null;
  }

  return (
    <section className="relative w-full py-20 px-6 sm:px-8">
      {/* CAMADA 1: Imagem de fundo com 'bg-contain' */}
      <div
        className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: `url(${content.background})` }}
      ></div>

      {/* CAMADA 2: Sobreposição de GRADIENTE escuro */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1e3a8a]/95 via-[#1e40af]/80 to-[#1d4ed8]/70"></div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12">
          {/* Coluna do Texto */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <p className="font-ttnorms text-xl md:text-2xl text-white leading-relaxed max-w-lg mx-auto md:mx-0">
              {content.text}
            </p>
          </div>

          {/* Coluna do Player de Vídeo */}
          <div className="w-full md:w-1/2">
            <div className="aspect-video rounded-lg overflow-hidden shadow-2xl border-2 border-white/10">
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
