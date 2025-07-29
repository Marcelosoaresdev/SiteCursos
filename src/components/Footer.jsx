import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente
  return (
    <footer className="bg-[#761cc7] py-8 text-center text-white/60">
      <div className="container mx-auto">
        <p>
          &copy; {currentYear} Vitis Souls Cursos. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
