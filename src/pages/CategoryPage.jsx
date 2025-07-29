import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { categories, courses } from '../data/categoryData';
import CategoryHero from '../components/CategoryHero';
import CoursesSection from '../components/CoursesSection';
import VideoTestimonialSection from '../components/VideoTestimonialSection';
import ComboDetailsSection from '../components/ComboDetailsSection';
import FinalCtaSection from '../components/FinalCtaSection';
import CourseDetails from '../components/CourseDetails'; // Importação que faltava

import AnimatedPage from '../components/AnimatedPage'; // 👈 1. IMPORTE O COMPONENTE

function CategoryPage() {
  const { slug } = useParams();
  const categoryData = categories.find((cat) => cat.slug === slug);

  // Variável que faltava: Filtra os cursos que pertencem a esta categoria
  const coursesForThisCategory = courses.filter(
    (course) => !course.isCombo && course.categorySlug === slug,
  );

  const handleScrollToDetails = (courseSlug) => {
    const element = document.getElementById(`curso-${courseSlug}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Se a categoria não for encontrada na base de dados, redireciona para a Home
  if (!categoryData) {
    return <Navigate to="/" />;
  }

  // Renderiza a página com todas as seções na ordem correta
  return (
    <AnimatedPage>
      <div>
        <CategoryHero {...categoryData} />

        <CoursesSection
          categorySlug={slug}
          backgroundColor={categoryData.coursesBackgroundColor}
          onLearnMoreClick={handleScrollToDetails}
          titleColor={categoryData.titleColor1}
        />
        <VideoTestimonialSection content={categoryData.videoTestimonial} />
        <ComboDetailsSection
          content={categoryData.comboDetails}
          id="combo-section"
        />
        <FinalCtaSection content={categoryData.finalCta} />

        {/* Loop que renderiza os detalhes de cada curso individualmente */}
        <div>
          {coursesForThisCategory.map((course, index) => (
            <CourseDetails
              key={course.id}
              details={course.details}
              isFirst={index === 0}
              id={`curso-${course.id}`} // Adicione esta linha
            />
          ))}
        </div>
      </div>
    </AnimatedPage>
  );
}

export default CategoryPage;
