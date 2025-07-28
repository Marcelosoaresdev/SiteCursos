import React from 'react';
// Importe os componentes que ele vai renderizar
import DominationSection from './DominationSection';
import InclusionsSection from './InclusionsSection';

// Este é o Hero que fica no topo do bloco de detalhes
function CourseDetailsHero({ details }) {
  return (
    <section className="w-full text-white pt-20">
      {' '}
      {/* Fundo removido daqui */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-white/20 -rotate-3 rounded-2xl"></div>
            <img
              src={details.heroImage}
              alt={details.pageTitle}
              className="relative w-full rounded-2xl shadow-2xl"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1">
          <p className="font-league text-4xl opacity-80">
            {details.pageSubtitle}
          </p>
          <h1 className="font-league text-8xl md:text-9xl uppercase leading-none my-2">
            {details.pageTitle}
          </h1>
          <p className="font-ttnorms text-2xl mt-4">{details.description}</p>
          {details.longDescription && (
            <p className="font-ttnorms text-lg mt-8">
              {details.longDescription}
            </p>
          )}
          <div className="mt-8">
            <a
              href={details.purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-white font-bold uppercase text-lg px-8 py-4 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 bg-white/10 backdrop-blur-md border border-white/20 hover:bg-white/20"
            >
              Compre Agora
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

// Este é o componente principal que monta tudo
function CourseDetails({ details, isFirst, id }) {
  if (!details) return null;

  return (
    // ESTE É O CONTAINER COM O FUNDO GRADIENTE ÚNICO
    <div id={id} className="bg-[linear-gradient(90deg,_#203162,_#00afdb)]">
      <CourseDetailsHero details={details} />
      <DominationSection data={details.domination} />
      <InclusionsSection
        data={details.inclusions}
        purchaseLink={details.purchaseLink}
      />
    </div>
  );
}

export default CourseDetails;
