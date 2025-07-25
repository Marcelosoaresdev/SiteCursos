import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente
  return (
    <footer className="bg-brand-purple py-8 text-center text-white/60">
      <div className="container mx-auto">
        <p>
          &copy; {currentYear} Meu Site Incrível. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
