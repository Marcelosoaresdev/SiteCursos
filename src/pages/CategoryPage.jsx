import React from "react";
import { useParams, Navigate } from "react-router-dom";
import { categories } from "../data/categoryData";
import CategoryHero from "../components/CategoryHero";
import CoursesSection from "../components/CoursesSection";
import VideoTestimonialSection from "../components/VideoTestimonialSection";
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
      
      {/* ADICIONE A SEÇÃO QUE FALTAVA AQUI */}
      <ComboDetailsSection content={categoryData.comboDetails} />

      <FinalCtaSection content={categoryData.finalCta} />
    </div>
  );
}

export default CategoryPage;