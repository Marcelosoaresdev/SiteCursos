import React from "react";
import HeroSection from "../components/HeroSection";
import CategoriesSection from "../components/CategoriesSection";
import CtaSection from "../components/CtaSection";
import TestimonialSection from "../components/TestimonialSection";
import EvolutionSection from "../components/EvolutionSection";

function HomePage() {
  return (
    // Este é o conteúdo que estava no seu App.jsx
    <div className="bg-category-gradient">
      <main>
        <HeroSection />
        <CtaSection />
        <EvolutionSection />
        <CategoriesSection />
        <TestimonialSection />
      </main>
    </div>
  );
}

export default HomePage;
