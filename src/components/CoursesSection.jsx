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
    <section className={`${backgroundColor} py-20 px-6 relative`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-ttnorms text-gray-500 text-xl uppercase">
            Pré-venda
          </p>

          {/* 4. USE A VARIÁVEL DO HOOK para mostrar o banner */}
          {isStudentVersion && (
            <div className="flex justify-center mb-4">
              <div className="bg-red-600 text-white font-league text-2xl uppercase rounded-lg px-8 py-2 shadow-lg">
                Espaço do Universitário
              </div>
            </div>
          )}

          <h2
            className={`font-league text-7xl md:text-8xl ${titleColor} uppercase`}
          >
            Categorias
          </h2>
        </div>

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
