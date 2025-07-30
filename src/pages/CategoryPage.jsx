import React from "react";
import { useParams, Navigate } from "react-router-dom";

// 👈 1. IMPORTE O DETECTOR E AMBOS OS ARQUIVOS DE DADOS
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";
import {
  categories as generalCategories,
  courses as generalCourses,
} from "../data/categoryData";
import {
  categories as studentCategories,
  courses as studentCourses,
} from "../data/studentData"; // Supondo que o nome do arquivo seja studentData.js

// Componentes da página
import CategoryHero from "../components/CategoryHero";
import CoursesSection from "../components/CoursesSection";
import VideoTestimonialSection from "../components/VideoTestimonialSection";
import ComboDetailsSection from "../components/ComboDetailsSection";
import FinalCtaSection from "../components/FinalCtaSection";
import CourseDetails from "../components/CourseDetails";
import CallToActionSection from '../components/CallToActionSection'; // 1. Importe o novo componente

function CategoryPage() {
  // 👈 2. DETECTA A VERSÃO E CARREGA OS DADOS CORRETOS
  const isStudentVersion = useIsStudentVersion();
  const categories = isStudentVersion ? studentCategories : generalCategories;
  const courses = isStudentVersion ? studentCourses : generalCourses;

  const { slug } = useParams();

  // A lógica de busca agora usa os dados corretos (gerais ou de estudante)
  const categoryData = categories.find((cat) => cat.slug === slug);
  const coursesForThisCategory = courses.filter(
    (course) => !course.isCombo && course.categorySlug === slug
  );

  const handleScrollToDetails = (courseId) => {
    // A função de scroll agora usa o ID do curso para ser mais precisa
    const element = document.getElementById(`curso-${courseId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Se a categoria não for encontrada, redireciona para a home correta
  if (!categoryData) {
    return <Navigate to={isStudentVersion ? "/universitario" : "/"} />;
  }

  return (
    // 👈 3. PÁGINA ENVOLVIDA COM O COMPONENTE DE ANIMAÇÃO
    <div>
      <CategoryHero {...categoryData} />

      <CoursesSection
        id={isStudentVersion ? "student-courses-section" : "courses-section"}
        courses={courses} // ✅ AQUI: Passando a lista de cursos correta para o componente filho
        categorySlug={slug}
        backgroundColor={categoryData.coursesBackgroundColor}
        onLearnMoreClick={handleScrollToDetails}
        titleColor={categoryData.titleColor1}
      />
      <VideoTestimonialSection content={categoryData.videoTestimonial} />

      <div id="combo-section">
        <ComboDetailsSection content={categoryData.comboDetails} />
      </div>

      <FinalCtaSection content={categoryData.finalCta} />

      {/* Loop que renderiza os detalhes de cada curso */}
      <div>
        {coursesForThisCategory.map((course) => (
          <div key={course.id} id={`curso-${course.id}`}>
            <CourseDetails details={course.details} />
          </div>
        ))}
      </div>
      <CallToActionSection content={categoryData.callToAction} />
    </div>
  );
}

export default CategoryPage;
