import React from 'react';
import CourseCard from './CourseCard';
import ComboCard from './ComboCard'; // 1. Importe o novo ComboCard
import { courses } from '../data/categoryData';

function CoursesSection({ categorySlug, backgroundColor }) {
  // Filtra todos os itens (cursos e combos) para a categoria atual
  const allItems = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  // Separa os cursos normais do combo
  const regularCourses = allItems.filter(item => !item.isCombo);
  const comboCourse = allItems.find(item => item.isCombo);

  if (allItems.length === 0) {
    return null;
  }

  return (
    <section className={`${backgroundColor} py-20 px-6`}>
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-ttnorms text-gray-500 text-xl uppercase">
            Pré-venda
          </p>
          <h2 className="font-league text-7xl md:text-8xl text-saude-dark-blue uppercase">
            Categorias
          </h2>
        </div>

        {/* Renderiza os 3 cards de cursos normais */}
        {regularCourses.length > 0 && (
            <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center gap-16 lg:gap-8">
            {regularCourses.map((course) => (
                <CourseCard key={course.id} {...course} />
            ))}
            </div>
        )}

        {/* Renderiza o card do combo, se ele existir */}
        {comboCourse && <ComboCard {...comboCourse} />}
        
      </div>
    </section>
  );
}

export default CoursesSection;