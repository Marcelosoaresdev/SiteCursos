import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/categoryData";

// 1. Adicione 'backgroundColor' às props. Damos um valor padrão a ela.
function CoursesSection({ categorySlug, backgroundColor = "bg-blue-100" }) {
  const filteredCourses = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  // Se não houver cursos para mostrar nesta categoria, não renderize nada.
  if (filteredCourses.length === 0) {
    return null;
  }

  return (
    // 2. Use a prop 'backgroundColor' aqui.
    <section className={`${backgroundColor} py-20 px-6`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-ttnorms text-gray-500 text-xl uppercase">
            Pré-venda
          </p>
          <h2 className="font-league text-7xl md:text-8xl text-[#203162] uppercase">
            Categorias
          </h2>
        </div>

        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-16 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard
              key={course.id}
              title={course.title}
              imageSrc={course.imageSrc}
              imageText={course.imageText}
              heading={course.heading}
              description={course.description}
              priceInstallments={course.priceInstallments}
              priceFull={course.priceFull}
              isHighlighted={course.isHighlighted}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
