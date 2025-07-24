import React from "react";
import CategoryCard from "./CategoryCard";

// Importando todas as imagens das categorias
import saudeImg from "../assets-webp/corrida.webp";
import financeiroImg from "../assets-webp/financeiro.webp";
import conquistaImg from "../assets-webp/conquista.webp";
import autoestimaImg from "../assets-webp/autoestima.webp";
import relacionamentoImg from "../assets-webp/relacionamento.webp";

// Array de dados completo com todas as propriedades para cada card
const categoriesData = [
  {
    title: "Saúde Física",
    description:
      "Descubra como transformar a corrida (e qualquer exercício) no seu superpoder pessoal.",
    gradientClasses: "bg-gradient-to-b from-brand-blue to-brand-green",
    imageSrc: saudeImg,
    imagePosition: "right",
    buttonText: "QUERO COMEÇAR MINHA TRANSFORMAÇÃO FÍSICA",
  },
  {
    title: "Financeiro",
    description:
      "Do primeiro real ao seu próprio império. Não é sobre trabalhar mais, é sobre trabalhar diferente.",
    gradientClasses: "bg-gradient-to-b from-green-400 to-green-600",
    imageSrc: financeiroImg,
    imagePosition: "left",
    buttonText: "QUERO CONSTRUIR MINHA PROSPERIDADE",
  },
  {
    title: "Conquista",
    description:
      "Domine cada etapa da sua evolução e acelere suas conquistas até se tornar um elite.",
    gradientClasses: "bg-gradient-to-b from-brand-yellow to-brand-orange",
    imageSrc: conquistaImg,
    imagePosition: "right",
    buttonText: "QUERO ACELERAR MINHAS CONQUISTAS",
    flipImage: false, // Forçando a imagem a não virar
  },
  {
    title: "Autoestima",
    description:
      "Não é sobre fingir confiança - é sobre construir um valor real que ninguém pode tirar de você.",
    gradientClasses: "bg-gradient-to-b from-pink-500 to-brand-pink",
    imageSrc: autoestimaImg,
    imagePosition: "left",
    buttonText: "QUERO DESPERTAR MINHA CONFIANÇA TOTAL",
  },
  {
    title: "Relacionamento",
    description:
      "Aprenda a construir o amor que você sempre quis, começando por dentro.",
    gradientClasses: "bg-gradient-to-b from-red-500 to-brand-red",
    imageSrc: relacionamentoImg,
    imagePosition: "right",
    buttonText: "QUERO TRANSFORMAR MEUS RELACIONAMENTOS",
  },
];

function CategoriesSection() {
  return (
    // Padding e fontes responsivas
    <section className="text-text-light w-full py-20 px-4 sm:px-6 lg:px-8">
      {/* Aumenta a largura máxima em telas maiores para os cards terem mais espaço */}
      <div className="container mx-auto max-w-xl md:max-w-3xl lg:max-w-5xl text-center">
        <h2 className="font-league text-5xl md:text-7xl lg:text-8xl uppercase mb-12 md:mb-20">
          Escolha começar a mudar sua vida
        </h2>
        <div className="space-y-16 md:space-y-24">
          {categoriesData.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              gradientClasses={cat.gradientClasses}
              imageSrc={cat.imageSrc}
              imagePosition={cat.imagePosition}
              buttonText={cat.buttonText}
              flipImage={cat.flipImage} // flipImage ainda é usado para a direção do -scale-x-100
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CategoriesSection;
