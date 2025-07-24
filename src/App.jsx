import React from "react";
import HeroSection from "./components/HeroSection";
import CategoriesSection from "./components/CategoriesSection";
// IMPORTANDO OS NOVOS COMPONENTES
import CtaSection from "./components/CtaSection";
import TestimonialSection from "./components/TestimonialSection";
import EvolutionSection from "./components/EvolutionSection";

function App() {
  return (
    // O bg-brand-purple aqui serve como uma cor de fundo "reserva"
    <div className="bg-category-gradient">
      {/* <Header />  (Você pode adicionar um Header aqui no futuro) */}
      <main>
        {/* Nossos componentes sendo montados em ordem */}
        <HeroSection />
        <CtaSection />
        <EvolutionSection />
        <CategoriesSection />
        <TestimonialSection />
      </main>
      {/* <Footer /> (E um Footer aqui no futuro) */}
    </div>
  );
}

export default App;
