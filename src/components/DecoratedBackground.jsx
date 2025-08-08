// components/DecoratedBackground.jsx
import React from "react";

function DecoratedBackground({ children }) {
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Elementos decorativos de fundo */}
      <div className="absolute inset-0 z-0">
        {/* Gradiente complexo */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900 to-brand-purple"></div>

        {/* Padrão de pontos */}
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "20px 20px",
          }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10">{children}</div>

      {/* Elementos flutuantes decorativos */}
      <div className="absolute top-10 left-1/4 w-6 h-6 rounded-full border border-white/20"></div>
      <div className="absolute bottom-20 right-1/3 w-5 h-5 rotate-45 border border-white/20"></div>
      <div className="absolute top-1/3 -right-12 w-32 h-32 rounded-full bg-white/5 blur-3xl"></div>
      <div className="absolute -bottom-24 -left-24 w-48 h-48 rounded-full bg-white/10 blur-3xl"></div>
    </div>
  );
}

export default DecoratedBackground;
