import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/categoryData";
import CategoryHero from "../components/CategoryHero";
import CoursesSection from "../components/CoursesSection"; // 1. Importe a nova seção

function CategoryPage() {
  const { slug } = useParams();
  const categoryData = categories.find((cat) => cat.slug === slug);

  if (!categoryData) {
    return <Navigate to="/" />;
  }

  // Renderiza a página com os dados corretos
  return (
    <div>
      <CategoryHero
        title={categoryData.title}
        subtitle={categoryData.subtitle}
        heroImage={categoryData.heroImage}
        gradient={categoryData.gradient}
        titleColor1={categoryData.titleColor1}
        titleColor2={categoryData.titleColor2}
        subtitleColor={categoryData.subtitleColor}
      />

      {/* 2. É AQUI que a nova seção de cursos deve ser adicionada */}
      <CoursesSection
        categorySlug={slug}
        backgroundColor={categoryData.coursesBackgroundColor}
      />

      {/* Outras seções como TestimonialSection podem vir aqui no futuro */}
    </div>
  );
}

export default CategoryPage;
