// HomePage.jsx
import React from "react";

// Componentes da página
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CtaSection from "../components/CtaSection";
import TestimonialSection from "../components/TestimonialSection";
import EvolutionSection from "../components/EvolutionSection";
import DecoratedBackground from "../components/DecoratedBackground";
import Faq from "../components/Faq";

// 👈 1. IMPORTE O NOSSO DETECTOR E AMBOS OS ARQUIVOS DE DADOS
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";
import { categories as generalCategories } from "../data/categoryData";
import { categories as studentCategories } from "../data/studentData";
// (Importe também os 'courses' se outras seções precisarem)

function HomePage() {
  // 👈 2. DETECTA QUAL VERSÃO ESTAMOS USANDO
  const isStudentVersion = useIsStudentVersion();

  // 👈 3. ESCOLHE OS DADOS CORRETOS COM BASE NA VERSÃO
  const categories = isStudentVersion ? studentCategories : generalCategories;
  // const ctaData = isStudentVersion ? studentCtaData : generalCtaData; // Exemplo para o CtaSection

  return (
    <DecoratedBackground>
      <main>
        <HeroSection />

        {/*
          O CtaSection provavelmente tem um link para a página de estudante.
          Você também pode torná-lo dinâmico se os links mudarem.
          Por agora, vamos focar no CategoriesSection.
        */}
        <CtaSection />

        <EvolutionSection />

        {/* 👈 4. PASSE OS DADOS CORRETOS PARA O COMPONENTE FILHO */}
        <CategoriesSection categories={categories} />

        <TestimonialSection />

        <Faq />
      </main>
    </DecoratedBackground>
  );
}

export default HomePage;
