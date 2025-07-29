import React from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/fotoFlavia.jpg";
import { fadeInUp } from "../utils/animationVariants";

function TestimonialSection() {
  return (
    <motion.section
      className="relative w-full py-16 md:py-24 overflow-hidden bg-gradient-to-br from-purple-900 to-brand-purple"
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

        {/* Padrão geométrico sutil */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 max-w-6xl mx-auto">
          {/* Coluna da Imagem */}
          <div className="w-full lg:w-2/5 flex justify-center relative">
            <div className="relative">
              {/* Moldura da foto */}
              <div className="absolute inset-0 rounded-2xl border-4 border-white/20 transform rotate-6"></div>

              {/* Foto principal */}
              <img
                src={profilePic}
                alt="Flávia Cavalcante"
                className="relative w-full max-w-[250px] sm:max-w-[300px] md:max-w-[350px] lg:max-w-lg h-auto rounded-2xl shadow-2xl z-10"
              />

              {/* Elementos decorativos */}
              <div className="absolute -top-6 -left-6 w-16 h-16 rounded-full bg-brand-yellow/20 border-2 border-white/30"></div>
              <div className="absolute -bottom-6 -right-6 w-12 h-12 rotate-45 bg-brand-purple-light border-2 border-white/30"></div>
            </div>
          </div>

          {/* Coluna do Texto */}
          <div className="w-full lg:w-3/5 text-white">
            {/* Cabeçalho */}
            <div className="mb-6">
              <h1 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight">
                <span className="text-brand-yellow">FLÁVIA</span> CAVALCANTE
              </h1>
              <div className="w-24 h-1 bg-brand-yellow mt-3"></div>
            </div>

            {/* Biografia */}
            <div className="space-y-4">
              <p className="font-ttnorms text-lg sm:text-xl leading-relaxed">
                Flávia é uma autora, terapeuta e coach brasileira, residente nos
                USA com mais de{" "}
                <span className="font-bold text-brand-yellow">
                  20 anos de experiência
                </span>{" "}
                levando pessoas a alcançarem a verdadeira abundância.
              </p>

              {/* Destaque para condecoração */}
              <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 mt-6">
                <p className="font-ttnorms italic text-lg text-center">
                  <span className="text-brand-yellow font-bold">
                    Condecorada
                  </span>{" "}
                  pela Academia de Artes Ciências e Letras do Brasil
                </p>
              </div>

              <p className="font-ttnorms text-lg sm:text-xl leading-relaxed mt-6">
                Através de seus livros, cursos, palestras e orientações, ela
                compartilha ferramentas e insights para construir uma vida mais
                plena e significativa.
              </p>
            </div>

            {/* Idiomas */}
            <div className="mt-8">
              <h3 className="font-league text-xl sm:text-2xl text-brand-yellow uppercase mb-3">
                Atua em quatro idiomas:
              </h3>
              <div className="flex flex-wrap gap-4">
                {["Inglês", "Francês", "Espanhol", "Português"].map(
                  (idioma) => (
                    <div
                      key={idioma}
                      className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-full border border-white/20"
                    >
                      <div className="w-2 h-2 rounded-full bg-brand-yellow"></div>
                      <span className="font-ttnorms">{idioma}</span>
                    </div>
                  )
                )}
              </div>
            </div>

            {/* Separador */}
            <div className="w-full h-px bg-white/20 my-10"></div>

            {/* Seção "Autora" */}
            <div className="text-center">
              <h2 className="font-league text-3xl sm:text-4xl text-white uppercase tracking-wide">
                <span className="text-brand-yellow">AUTORA</span> INTERNACIONAL
              </h2>
              <p className="font-ttnorms text-lg mt-4 text-white/80 max-w-2xl mx-auto">
                Com obras traduzidas para múltiplos idiomas, Flávia compartilha
                seu conhecimento transformador através da escrita
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Elementos decorativos flutuantes */}
      <div className="absolute top-20 left-10 w-8 h-8 rounded-full border-2 border-white/20"></div>
      <div className="absolute bottom-20 right-10 w-6 h-6 rotate-45 border-2 border-white/20"></div>
    </motion.section>
  );
}

export default TestimonialSection;
