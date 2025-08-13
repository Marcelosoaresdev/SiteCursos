// src/components/FaqSection.jsx
import React, { useState } from "react";

function AccordionItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between py-5 px-6 text-left"
      >
        <span className="font-ttnorms text-lg sm:text-xl text-white">
          {question}
        </span>

        {/* Ícone girando */}
        <span
          className={`w-6 h-6 flex-shrink-0 transition-transform duration-200 ${
            open ? "rotate-45" : "rotate-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6 text-brand-yellow"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </span>
      </button>

      {/* Painel com animação de altura + fade + slide */}
      <div
        className={`overflow-hidden transition-[max-height] duration-300 ease-out ${
          open ? "max-h-[1000px]" : "max-h-0"
        }`}
      >
        <div
          className={`px-6 pb-6 transition-all duration-300 ${
            open ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
          }`}
        >
          <p className="font-ttnorms text-base sm:text-lg text-white/80">
            {answer}
          </p>
        </div>
      </div>
    </div>
  );
}

export default function FaqSection({ backgroundClass = "bg-transparent" }) {
  const faqData = [
    {
      question: "Preciso ter experiência prévia?",
      answer:
        "Não. Nossos cursos foram pensados para qualquer pessoa, independentemente do nível de conhecimento. Todo o conteúdo é apresentado de forma clara e progressiva.",
    },
    {
      question: "Por quanto tempo terei acesso?",
      answer:
        "O acesso é vitalício. Você poderá assistir às aulas no seu próprio ritmo, quantas vezes quiser, e revisitar o conteúdo sempre que precisar.",
    },
    {
      question: "Há garantia?",
      answer:
        "Sim. Você conta com nossa garantia de satisfação: dentro de 7 dias após a compra, se não estiver satisfeito, poderá solicitar o reembolso integral, conforme a política da Hotmart.",
    },
    {
      question: "Como funciona o acesso ao conteúdo?",
      answer:
        "Após a confirmação do pagamento, você receberá um login e senha para acessar a plataforma online, onde todo o material estará disponível para você.",
    },
  ];

  return (
    <section className={`relative w-full ${backgroundClass} py-16 md:py-24`}>
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Perguntas <span className="text-brand-yellow">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto" />
          <p className="font-ttnorms text-lg text-white/80 mt-6">
            Tire suas dúvidas sobre os cursos aqui.
          </p>
        </div>

        {/* Lista */}
        <div className="max-w-3xl mx-auto bg-white/10 rounded-xl border border-white/20 overflow-hidden">
          {faqData.map((item, idx) => (
            <AccordionItem
              key={idx}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
