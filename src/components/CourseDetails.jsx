import React from "react";
// Importe os componentes que ele vai renderizar
import DominationSection from "./DominationSection";
import InclusionsSection from "./InclusionsSection";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

// Este é o Hero que fica no topo do bloco de detalhes
function CourseDetailsHero({ details }) {
  const isStudentVersion = useIsStudentVersion();
  return (
    <section className="w-full text-white pt-20">
      {" "}
      {/* Fundo removido daqui */}
      <div className="container mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
        <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
          <div className="relative w-full max-w-sm">
            <div className="absolute inset-0 bg-white/20 -rotate-3 rounded-2xl"></div>
            <img
              loading="lazy"
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
          {/* Banner ao lado do subtitle */}
          {isStudentVersion && (
            <span className="inline-block bg-red-600 text-white font-league text-xl md:text-4xl rounded-md uppercase px-4 py-1 shadow-md">
              Espaço do Universitário
            </span>
          )}
          <h1 className="font-league text-5xl md:text-9xl uppercase leading-none my-2">
            {details.pageTitle}
          </h1>
          <p className="font-ttnorms text-xl mt-4">{details.description}</p>
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
              className="relative group inline-block overflow-hidden font-ttnorms font-bold text-lg uppercase rounded-full px-8 py-4 
               text-white shadow-lg transition-all duration-300 hover:scale-105 active:scale-95
               bg-black/30 backdrop-blur-md border border-white/20 hover:bg-black/50 hover:border-white/40"
            >
              <span className="relative z-10">Compre Agora</span>

              {/* Brilho animado no hover */}
              <span
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-white/10 via-white/5 to-transparent opacity-0 
                 group-hover:opacity-20 transition-opacity duration-500 z-0"
              />
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
    <div id={id} className={details.detailsBackgroundColor}>
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
