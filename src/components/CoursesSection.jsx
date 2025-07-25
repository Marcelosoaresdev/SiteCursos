import React from "react";
import CourseCard from "./CourseCard";
import { courses } from "../data/categoryData";

// ⚠️ Atenção: Importe as imagens que você precisa
import comboImage from "../assets-webp/corrida.webp"; // ⚠️ SUBSTITUA PELA IMAGEM DO COMBO

function CoursesSection({ categorySlug, backgroundColor = "bg-blue-100" }) {
  const filteredCourses = categorySlug
    ? courses.filter((course) => course.categorySlug === categorySlug)
    : courses;

  return (
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

        {/* Layout dos 3 Cards de Cursos */}
        <div className="flex flex-col lg:flex-row items-center lg:items-stretch justify-center gap-16 lg:gap-8">
          {filteredCourses.map((course) => (
            <CourseCard key={course.id} {...course} />
          ))}
        </div>

        {/* ================================================================== */}
        {/* SEÇÃO DO COMBO SIMPLIFICADA */}
        {/* ================================================================== */}
        <div className="mt-24 md:mt-32">
          {/* TÍTULO "COMBO" NORMAL E ESTILIZADO */}
          <h2 className="text-center font-league text-7xl md:text-8xl text-[#203162] uppercase mb-8">
            Combo
          </h2>

          {/* Card de Conteúdo do Combo */}
          <div className="bg-white/50 backdrop-blur-lg rounded-2xl shadow-2xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto">
            {/* Coluna da Imagem */}
            <div className="w-full md:w-1/3 flex-shrink-0">
              <img
                src={comboImage}
                alt="Pacote Premium Combo"
                className="rounded-xl shadow-lg w-full"
              />
            </div>

            {/* Coluna do Texto e CTA */}
            <div className="w-full md:w-2/3 flex flex-col text-center md:text-left">
              <h3 className="font-league text-3xl text-[#203162] uppercase">
                Pacote Premium Combo
              </h3>
              <p className="font-ttnorms text-gray-700 mt-2">
                Pacote Completo de Transformação da Saúde: receba{" "}
                <strong>todos os 3 Cursos + Materiais Completos</strong> para
                máximos resultados.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mt-6 justify-center md:justify-start">
                <button className="bg-purple-700 text-white font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-purple-800 transition-colors">
                  Compre Agora
                </button>
                <button className="bg-transparent border-2 border-gray-500 text-gray-600 font-bold uppercase text-sm px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors">
                  Saiba Mais
                </button>
              </div>

              <div className="mt-6 w-full sm:max-w-xs mx-auto md:mx-0">
                <div className="bg-red-500 text-white rounded-xl p-3">
                  <p className="text-sm">12x de R$ 58,95* ou</p>
                  <p className="font-bold text-2xl">R$ 570,00</p>
                  <p className="text-xs">à vista</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CoursesSection;
