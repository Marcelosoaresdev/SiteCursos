// CoursesSection.jsx - VERSÃO CORRIGIDA

import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import ComboCard from './ComboCard';
import { courses } from '../data/categoryData';
import { fadeInUp, containerStagger } from '../utils/animationVariants';

// 1. Adicionamos a nova prop 'titleColor' com um valor padrão
function CoursesSection({ categorySlug, backgroundColor, titleColor = 'text-gray-800' }) {
  const allItems = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  const regularCourses = allItems.filter((item) => !item.isCombo);
  const comboCourse = allItems.find((item) => item.isCombo);

  if (allItems.length === 0) {
    return null;
  }

  return (
    <motion.section
      className={`${backgroundColor} py-20 px-6 relative`}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className="font-ttnorms text-gray-500 text-xl uppercase">
            Pré-venda
          </p>
          {/* 2. A cor do título agora vem da prop 'titleColor' */}
          <h2 className={`font-league text-7xl md:text-8xl ${titleColor} uppercase`}>
            Categorias
          </h2>
        </div>

        {/* Renderiza os 3 cards de cursos normais */}
        {regularCourses.length > 0 && (
          <motion.div
            className="flex flex-col md:flex-row items-center lg:items-end justify-center gap-16 md:gap-6 relative"
            variants={containerStagger}
          >
            {regularCourses.map((course) => (
              <motion.div key={course.id} className="relative" variants={fadeInUp}>
                <CourseCard {...course} id={course.id} />
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Renderiza o card do combo */}
        {comboCourse && (
          <motion.div className="relative mt-32" variants={fadeInUp}>
            <ComboCard {...comboCourse} />
          </motion.div>
        )}
      </div>
    </motion.section>
  );
}

export default CoursesSection;