import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/categoryData";
import CategoryHero from "../components/CategoryHero";
import CoursesSection from "../components/CoursesSection"; // 1. Importe a nova seção
import VideoTestimonialSection from "../components/VideoTestimonialSection"; // Importe a seção
import ComboDetailsSection from "../components/ComboDetailsSection"; // Seção de detalhes do combo

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

      {/* 2. É AQUI que a nova seção de cursos deve ser adicionada */}
      <CoursesSection
        categorySlug={slug}
        backgroundColor={categoryData.coursesBackgroundColor}
      />
      <VideoTestimonialSection content={categoryData.videoTestimonial} />

      <ComboDetailsSection />

      {/* Outras seções como TestimonialSection podem vir aqui no futuro */}
    </div>
  );
}

export default CategoryPage;
