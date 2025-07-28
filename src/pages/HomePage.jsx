import React from 'react';
import HeroSection from '../components/HeroSection';
import CategoriesSection from '../components/CategoriesSection';
import CtaSection from '../components/CtaSection';
import TestimonialSection from '../components/TestimonialSection';
import EvolutionSection from '../components/EvolutionSection';
import AnimatedPage from '../components/AnimatedPage'; // 👈 1. IMPORTE O COMPONENTE

function HomePage() {
  return (
    <AnimatedPage>
      <div className="bg-category-gradient">
        <main>
          <HeroSection />
          <CtaSection />
          <EvolutionSection />
          <CategoriesSection />
          <TestimonialSection />
        </main>
      </div>
    </AnimatedPage>
  );
}

export default HomePage;
