import React from "react";

function EvolutionSection() {
  return (
    <section className="bg-text-section text-text-dark w-full py-24 px-8">
      <div className="container mx-auto text-center max-w-5xl">
        {/* Primeira linha com tamanho aumentado e ênfase */}
        <p className="font-league text-4xl md:text-5xl lg:text-6xl mb-10 leading-tight">
          Não precisa de ser uma revolução.
          <br />
          Precisa de ser uma{" "}
          <strong className="font-bold text-brand-purple">EVOLUÇÃO</strong>.
        </p>

        {/* Segunda parte com hierarquia clara */}
        <div className="space-y-6">
          <p className="font-ttnorms text-3xl md:text-4xl leading-snug">
            Sua história real começa quando você decide escrevê-la{" "}
            <strong className="font-bold underline decoration-brand-purple">
              conscientemente
            </strong>
            :
          </p>
          <p className="font-league text-4xl md:text-5xl text-brand-purple font-bold">
            Um passo, uma decisão
          </p>
          <p className="font-ttnorms text-3xl md:text-4xl leading-snug">
            que leva você a{" "}
            <strong className="font-bold">várias conquistas</strong>
          </p>
        </div>
      </div>
    </section>
  );
}

export default EvolutionSection;
