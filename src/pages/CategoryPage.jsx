import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/categoryData";
import CategoryHero from "../components/CategoryHero";
import CoursesSection from "../components/CoursesSection"; // 1. Importe a nova seção
import VideoTestimonialSection from "../components/VideoTestimonialSection"; // Importe a seção
import ComboDetailsSection from "../components/ComboDetailsSection"; // Seção de detalhes do combo
import FinalCtaSection from "../components/FinalCtaSection";

function CategoryPage() {
  const { slug } = useParams();
  const categoryData = categories.find((cat) => cat.slug === slug);

  if (!categoryData) {
    return <Navigate to="/" />;
  }

  // Renderiza a página com os dados corretos
  return (
    <div>
      <CategoryHero {...categoryData} />
      <CoursesSection
        categorySlug={slug}
        backgroundColor={categoryData.coursesBackgroundColor}
      />
      <VideoTestimonialSection content={categoryData.videoTestimonial} />
      {/* Agora estas seções recebem o conteúdo da categoria específica */}
      <ComboDetailsSection />{" "}
      {/* Supondo que esta seção é a mesma para todas as categorias */}
      <FinalCtaSection content={categoryData.finalCta} />
    </div>
  );
}

export default CategoryPage;
