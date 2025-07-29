import React from "react";

function Footer() {
  const currentYear = new Date().getFullYear(); // Pega o ano atual automaticamente

  return (
    <footer className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 to-brand-purple text-white/60 py-8">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        {/* Bolhas decorativas */}
        <div className="absolute top-1/3 -left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

        {/* Padrão de pontos */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Conteúdo do Footer */}
      <div className="container relative z-10 px-4 mx-auto text-center">
        <p>
          &copy; {currentYear} Vitis Souls. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
