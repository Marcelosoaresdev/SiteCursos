// HomePage.js
import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CtaSection from "../components/CtaSection";
import TestimonialSection from "../components/TestimonialSection";
import EvolutionSection from "../components/EvolutionSection";
import DecoratedBackground from "../components/DecoratedBackground"; // 👈 Importe o novo componente

function HomePage() {
  return (
      <DecoratedBackground>
        <main>
          <HeroSection />
          <CtaSection />
          <EvolutionSection />
          <CategoriesSection />
          <TestimonialSection />
        </main>
      </DecoratedBackground>
  );
}

export default HomePage;
