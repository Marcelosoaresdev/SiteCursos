import React from "react";

// ⚠️ Atenção: Substitua pelo caminho da imagem do seu "Pacote Completo"
import comboPackageImage from "../assets-webp/corrida.webp"; // Imagem de exemplo

function ComboDetailsSection() {
  return (
    // Seção principal com o gradiente de fundo
    <section className="w-full text-white bg-[linear-gradient(to_bottom,_#1e3a8a,_#0ea5e9)] py-20 px-6">
      <div className="container mx-auto">
        {/* --- CABEÇALHO DA SEÇÃO --- */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 text-center md:text-left">
          {/* Coluna do Texto com alinhamento corrigido */}
          <div className="md:w-1/2 flex flex-col items-center md:items-end">
            <h2 className="font-allura text-8xl md:text-9xl -mb-8">Pacote</h2>
            <h1 className="font-league text-6xl md:text-7xl uppercase">
              Premium Combo
            </h1>
          </div>

          {/* Coluna da Imagem (inalterada) */}
          <div className="md:w-1/2 flex justify-center md:justify-start">
            <img
              src={comboPackageImage}
              alt="Pacote Combo"
              className="w-full max-w-sm rounded-lg"
            />
          </div>
        </div>

        {/* --- SEÇÃO "O QUE ESTÁ INCLUSO?" --- */}
        <div className="max-w-3xl mx-auto text-center mt-20">
          <h3 className="font-league text-4xl uppercase mb-8">
            O que está incluso?
          </h3>
          <div className="font-ttnorms text-left text-lg space-y-3 border-l-2 border-blue-400/50 pl-6">
            <p>
              <strong>Curso 1. Transforme Sua Vida</strong> – O Caminho Completo
              para Saúde e Vitalidade
            </p>
            <p>
              <strong>Curso 2. Corra para a Vida</strong> – Transforme Corpo e
              Mente Através do Movimento
            </p>
            <p>
              <strong>Curso 3. Corrida Elite</strong> – Performance, Longevidade
              e Transcendência
            </p>
            <p>
              <strong>Bônus: E-book grátis</strong> da nossa coleção
              especialmente selecionada + <strong>Caderno de exercícios</strong>{" "}
              + <strong>Sistema Integrado</strong> – Desperte o atleta interior,
              não importa onde você está começando.
            </p>
          </div>
          <div className="mt-12">
            <button className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-lg font-medium text-white rounded-full group bg-slate-900 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white">
              <span className="relative px-12 py-4 transition-all ease-in duration-75 bg-slate-900 rounded-full group-hover:bg-opacity-0">
                COMEÇAR MINHA TRANSFORMAÇÃO COMPLETA
              </span>
            </button>
          </div>
        </div>

        {/* --- SEÇÃO "POR QUE ESCOLHER?" --- */}
        <div className="text-center mt-24">
          <h2 className="font-league text-6xl md:text-8xl uppercase font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
            Por que escolher o
          </h2>
          <p className="font-ttnorms text-lg max-w-xl mx-auto my-4">
            Cada curso desbloqueia um novo nível de potencial do seu corpo e da
            sua saúde.
          </p>
          <h2 className="font-league text-6xl md:text-8xl uppercase font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.5)]">
            Pacote Completo?
          </h2>
        </div>

        {/* --- 3 CARDS DE BENEFÍCIOS --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12 max-w-5xl mx-auto">
          <div className="border-2 border-white/30 rounded-xl p-6 text-center">
            <h3 className="font-league text-3xl uppercase">Curso 1</h3>
            <p className="font-ttnorms mt-2">
              Reprograma seus hábitos diários.
            </p>
          </div>
          <div className="border-2 border-white/30 rounded-xl p-6 text-center">
            <h3 className="font-league text-3xl uppercase">Curso 2</h3>
            <p className="font-ttnorms mt-2">
              Canaliza essa energia no movimento.
            </p>
          </div>
          <div className="border-2 border-white/30 rounded-xl p-6 text-center">
            <h3 className="font-league text-3xl uppercase">Curso 3</h3>
            <p className="font-ttnorms mt-2">
              Te eleva à performance de elite.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ComboDetailsSection;
