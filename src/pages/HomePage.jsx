// HomePage.js
import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CtaSection from "../components/CtaSection";
import TestimonialSection from "../components/TestimonialSection";
import EvolutionSection from "../components/EvolutionSection";
import AnimatedPage from "../components/AnimatedPage";
import DecoratedBackground from "../components/DecoratedBackground"; // 👈 Importe o novo componente

function HomePage() {
  return (
    <AnimatedPage>
      <DecoratedBackground>
        <main>
          <HeroSection />
          <CtaSection />
          <EvolutionSection />
          <CategoriesSection />
          <TestimonialSection />
        </main>
      </DecoratedBackground>
    </AnimatedPage>
  );
}

export default HomePage;
