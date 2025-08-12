import React from "react";
import CourseCard from "./CourseCard";
import ComboCard from "./ComboCard";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion"; // <-- 1. IMPORTE O HOOK (ajuste o caminho se necessário)

// 2. REMOVA a prop 'showUniversityBanner' daqui
function CoursesSection({
  courses,
  categorySlug,
  backgroundColor,
  titleColor = "text-gray-800",
  id,
}) {
  // 3. CHAME O HOOK para saber se é a versão de estudante
  const isStudentVersion = useIsStudentVersion();

  const allItems = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  const regularCourses = allItems.filter((item) => !item.isCombo);
  const comboCourse = allItems.find((item) => item.isCombo);

  if (allItems.length === 0) {
    return null;
  }

  return (
    <section id={id} className={`${backgroundColor} py-20 px-6 relative`}>
      <div className="container mx-auto">
        <div className="text-center mb-8 md:mb-12">
          <div>
            {/* Destaque principal */}
            <div className="inline-block bg-gradient-to-r from-red-500 to-red-600 text-white font-ttnorms text-xl font-bold uppercase px-6 py-3 rounded-xl shadow-lg mb-2">
              <span className="gap-2">Valor de pré-lançamento</span>
            </div>

            {/* Texto secundário ofuscado */}
            <h3 className="text-gray-600 text-sm italic tracking-wide">
              Lançamento em Setembro
            </h3>
          </div>
        </div>

        {comboCourse && (
          <div className="relative">
            <ComboCard {...comboCourse} />
          </div>
        )}

        {regularCourses.length > 0 && (
          <div className="flex flex-col md:flex-row items-center lg:items-end justify-center gap-16 md:gap-6 relative">
            {regularCourses.map((course) => (
              <div key={course.id} className="relative">
                <CourseCard {...course} categorySlug={categorySlug} />
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}

export default CoursesSection;
