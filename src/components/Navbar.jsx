import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Array de links para facilitar a manutenção
  const navLinks = [
    { title: "Início", path: "/" },
    { title: "Saúde Física", path: "/categoria/saude-fisica" },
    { title: "Financeiro", path: "/categoria/financeiro" },
    { title: "Conquista", path: "/categoria/conquista" },
    { title: "Autoestima", path: "/categoria/autoestima" },
    { title: "Relacionamento", path: "/categoria/relacionamento" },
  ];

  // Efeito para detectar scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          {/* Logo */}
          <Link
            to="/"
            className={`font-league text-2xl sm:text-2xl uppercase tracking-tight transition-colors ${
              scrolled ? "text-brand-purple" : "text-white"
            }`}
          >
            Vitis Souls
          </Link>

          {/* Links para Desktop */}
          <div className="hidden lg:flex space-x-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.title}
                to={link.path}
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
          </div>

          {/* Botão do Menu Hambúrguer para Mobile */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-all ${
                isMenuOpen
                  ? "bg-brand-purple text-white hover:bg-brand-purple/90" // cor chamativa quando menu está aberto
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
        className={`fixed inset-0 z-40 bg-white/95 backdrop-blur-lg transition-all duration-300 lg:hidden pt-16 ${
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
