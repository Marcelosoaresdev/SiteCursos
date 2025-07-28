import React from "react";
import { Link } from "react-router-dom"; // Para criar links de navegação

function Navbar() {
  return (
    <header className="bg-brand-purple/80 backdrop-blur-sm sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="font-league text-3xl text-white uppercase">
          Meu Site Incrível
        </Link>
        <div className="space-x-6">
          <Link
            to="/"
            className="font-ttnorms text-lg text-white hover:text-brand-yellow transition-colors"
          >
            Início
          </Link>
          <Link
            to="/categoria/saude-fisica"
            className="font-ttnorms text-lg text-white hover:text-brand-yellow transition-colors"
          >
            Saúde Física
          </Link>
          <Link
            to="/categoria/financeiro"
            className="font-ttnorms text-lg text-white hover:text-brand-yellow transition-colors"
          >
            Financeiro
          </Link>
          {/* Adicione links para outras páginas aqui */}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
