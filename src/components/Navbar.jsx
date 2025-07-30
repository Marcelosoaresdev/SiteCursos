import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
// 👈 1. Importe o hook para detectar a versão do site
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  // 👈 2. Verifique qual versão do site está ativa
  const isStudentVersion = useIsStudentVersion();

  // 👈 3. Os links continuam dinâmicos, o que está correto para o seu caso.
  const navLinks = [
    {
      title: "Início",
      path: isStudentVersion ? "/universitario" : "/",
      end: true,
    },
    {
      title: "Saúde Física",
      path: `${
        isStudentVersion ? "/universitario" : ""
      }/categoria/saude-fisica`,
    },
    {
      title: "Financeiro",
      path: `${isStudentVersion ? "/universitario" : ""}/categoria/financeiro`,
    },
    {
      title: "Conquista",
      path: `${isStudentVersion ? "/universitario" : ""}/categoria/conquista`,
    },
    {
      title: "Autoestima",
      path: `${isStudentVersion ? "/universitario" : ""}/categoria/autoestima`,
    },
    {
      title: "Relacionamento",
      path: `${
        isStudentVersion ? "/universitario" : ""
      }/categoria/relacionamento`,
    },
  ];

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Efeito para travar o scroll do body quando o menu mobile está aberto
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen]);

  return (
    <>
      <header
        className={`fixed w-full top-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-sm py-3 shadow-sm"
            : "bg-transparent py-5"
        }`}
      >
        <nav className="container mx-auto px-4 sm:px-6 flex justify-between items-center">
          {/* Logo com link dinâmico */}
          <Link
            to={isStudentVersion ? "/universitario" : "/"}
            className={`font-league text-xl sm:text-2xl uppercase font-bold tracking-tight transition-colors ${
              scrolled ? "text-brand-purple" : "text-white"
            }`}
          >
            Vitis Souls
          </Link>

          {/* Links para Desktop */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
                end={link.end}
                className={({ isActive }) =>
                  `font-medium px-4 py-2 rounded-lg transition-all duration-300 ${
                    isActive
                      ? "bg-brand-purple text-white shadow-md"
                      : `${
                          scrolled
                            ? "text-gray-700 hover:bg-purple-100/40"
                            : "text-white/90 hover:bg-white/10"
                        }`
                  }`
                }
              >
                {link.title}
              </NavLink>
            ))}

            {/* 👇 BOTÃO DE SAÍDA CONDICIONAL PARA DESKTOP */}
            {isStudentVersion && (
              <Link
                to="/"
                className="font-medium px-4 py-2 rounded-lg transition-all duration-300 bg-orange-100 text-orange-600 hover:bg-orange-200 ml-2"
              >
                Voltar ao site principal
              </Link>
            )}
          </div>

          {/* Botão do Menu Hambúrguer para Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isMenuOpen
                  ? "text-gray-800"
                  : scrolled
                  ? "bg-brand-purple/10 text-brand-purple hover:bg-brand-purple/20"
                  : "bg-white/10 text-white hover:bg-white/20"
              }`}
              aria-label="Abrir menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d={
                    isMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16m-7 6h7"
                  }
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Painel do Menu Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 lg:hidden pt-20 ${
          isMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center py-8 px-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.title}
              to={link.path}
              end={link.end}
              className={({ isActive }) =>
                `w-full text-center py-4 px-6 mb-3 rounded-xl text-lg font-medium transition-all ${
                  isActive
                    ? "bg-brand-purple text-white shadow-lg"
                    : "text-gray-700 hover:bg-purple-50"
                }`
              }
              onClick={() => setIsMenuOpen(false)}
            >
              {link.title}
            </NavLink>
          ))}

          {/* 👇 BOTÃO DE SAÍDA CONDICIONAL PARA MOBILE */}
          {isStudentVersion && (
            <Link
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className="w-full text-center py-4 px-6 mt-4 rounded-xl text-lg font-medium transition-all bg-orange-100 text-orange-700 hover:bg-orange-200"
            >
              Voltar ao site principal
            </Link>
          )}

          <div className="mt-8 flex flex-col items-center">
            <div className="bg-gray-200 w-32 h-1 rounded-full mb-6"></div>
            <p className="text-gray-500 text-sm">Vitis Souls Cursos</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
