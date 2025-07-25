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
    <section className="text-text-light w-full py-12 px-4 sm:px-6 md:px-8">
      <div className="container mx-auto text-center">
        <h2 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase mb-8 sm:mb-12">
          Escolha começar a mudar sua vida
        </h2>

        {/* Grid responsivo com 3 colunas no desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categoriesData.map((cat) => (
            <CategoryCard
              key={cat.title}
              title={cat.title}
              description={cat.description}
              gradientClasses={cat.gradientClasses}
              imageSrc={cat.imageSrc}
              buttonText={cat.buttonText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


export default CategoriesSection;
