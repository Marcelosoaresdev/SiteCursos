import React from "react";
import CourseCard from "./CourseCard";
import ComboCard from "./ComboCard";
// ❌ REMOVIDO: A importação direta de 'courses' foi removida daqui.
// import { courses } from '../data/categoryData';

// ✅ AQUI: O componente agora recebe 'courses' como uma prop
function CoursesSection({
  courses,
  categorySlug,
  backgroundColor,
  titleColor = "text-gray-800",
}) {
  // A lógica interna agora usa a prop 'courses' que veio da página pai
  const allItems = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  const regularCourses = allItems.filter((item) => !item.isCombo);
  const comboCourse = allItems.find((item) => item.isCombo);

  if (allItems.length === 0) {
    return null;
  }

  return (
    <section className={`${backgroundColor} py-20 px-6 relative`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-ttnorms text-gray-500 text-xl uppercase">
            Pré-venda
          </p>
          <h2
            className={`font-league text-7xl md:text-8xl ${titleColor} uppercase`}
          >
            Categorias
          </h2>
        </div>

        {/* Este mapeamento agora usará os dados corretos (gerais ou de estudante) */}
        {regularCourses.length > 0 && (
          <div className="flex flex-col md:flex-row items-center lg:items-end justify-center gap-16 md:gap-6 relative">
            {regularCourses.map((course) => (
              <div key={course.id} className="relative">
                <CourseCard {...course} />
              </div>
            ))}
          </div>
        )}

        {comboCourse && (
          <div className="relative mt-32">
            <ComboCard {...comboCourse} />
          </div>
        )}
      </div>
    </section>
  );
}

export default CoursesSection;
