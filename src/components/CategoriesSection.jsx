import React from "react";
import { motion } from "framer-motion";
import CategoryCard from "./CategoryCard";
import { fadeInUp, containerStagger } from "../utils/animationVariants";
import { useScrollAnimation } from "../hooks/useScrollAnimation";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

// Importando todas as imagens das categorias
import saudeImg from "../assets/corrida.webp";
import financeiroImg from "../assets/financeiro.webp";
import conquistaImg from "../assets/conquista.webp";
import autoestimaImg from "../assets/autoestima.webp";
import relacionamentoImg from "../assets/relacionamento.webp";

// Array de dados completo com todas as propriedades para cada card
const categoriesData = [
  {
    title: "Saúde Física",
    description:
      "Descubra como transformar a corrida (e qualquer exercício) no seu superpoder pessoal.",
    gradientClasses: "bg-gradient-to-r from-[#203162] to-[#00afdb]",
    imageSrc: saudeImg,
    imagePosition: "right",
    buttonText: "QUERO COMEÇAR MINHA TRANSFORMAÇÃO FÍSICA",
    linkTo: "/categoria/saude-fisica",
  },
  {
    title: "Financeiro",
    description:
      "Do primeiro real ao seu próprio império. Não é sobre trabalhar mais, é sobre trabalhar diferente.",
    gradientClasses: "bg-gradient-to-b from-green-400 to-green-600",
    imageSrc: financeiroImg,
    imagePosition: "left",
    buttonText: "QUERO CONSTRUIR MINHA PROSPERIDADE",
    linkTo: "/categoria/financeiro",
  },
  {
    title: "Conquista",
    description:
      "Domine cada etapa da sua evolução e acelere suas conquistas até se tornar um elite.",
    gradientClasses: "bg-gradient-to-b from-brand-yellow to-brand-orange",
    imageSrc: conquistaImg,
    imagePosition: "right",
    buttonText: "QUERO ACELERAR MINHAS CONQUISTAS",
    flipImage: false,
    linkTo: "/categoria/conquista",
  },
  {
    title: "Autoestima",
    description:
      "Não é sobre fingir confiança - é sobre construir um valor real que ninguém pode tirar de você.",
    gradientClasses: "bg-gradient-to-b from-pink-500 to-brand-pink",
    imageSrc: autoestimaImg,
    imagePosition: "left",
    buttonText: "QUERO DESPERTAR MINHA CONFIANÇA TOTAL",
    linkTo: "/categoria/autoestima",
  },
  {
    title: "Relacionamento",
    description:
      "Aprenda a construir o amor que você sempre quis, começando por dentro.",
    gradientClasses: "bg-gradient-to-b from-red-500 to-brand-red",
    imageSrc: relacionamentoImg,
    imagePosition: "right",
    buttonText: "QUERO TRANSFORMAR MEUS RELACIONAMENTOS",
    linkTo: "/categoria/relacionamento",
  },
];

function CategoriesSection() {
  const scrollAnimation = useScrollAnimation();
  const isStudentVersion = useIsStudentVersion(); // Verifica a versão do site

  return (
    <motion.section
      ref={scrollAnimation.ref}
      className="text-text-light w-full py-12 px-4 sm:px-6 md:px-8"
      variants={scrollAnimation.variants}
      initial={scrollAnimation.initial}
      animate={scrollAnimation.animate}
      transition={scrollAnimation.transition}
    >
      <div className="container mx-auto text-center">
        <h2 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase mb-8 sm:mb-12">
          Escolha começar a mudar sua vida
        </h2>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          variants={containerStagger}
        >
          {categoriesData.map((cat) => {
            // Lógica para criar o link dinâmico
            const dynamicLink = isStudentVersion
              ? `/universitario${cat.linkTo}`
              : cat.linkTo;

            return (
              <motion.div key={cat.title} variants={fadeInUp}>
                <CategoryCard
                  title={cat.title}
                  description={cat.description}
                  gradientClasses={cat.gradientClasses}
                  imageSrc={cat.imageSrc}
                  buttonText={cat.buttonText}
                  linkTo={dynamicLink} // Usando o link dinâmico aqui
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}

export default CategoriesSection;
