import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Componente Auxiliar para o Acordeão (FAQ) ---
// Você pode manter isso no mesmo arquivo ou mover para um arquivo separado
function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  const iconVariants = {
    opened: { rotate: 45 },
    closed: { rotate: 0 },
  };

  // Animação leve com grid-rows (sem height:auto)
  const containerVariants = {
    opened: { gridTemplateRows: "1fr", opacity: 1 },
    closed: { gridTemplateRows: "0fr", opacity: 0 },
  };

  return (
    <div className="border-b border-white/20">
      <button
        onClick={() => setIsOpen((v) => !v)}
        className="flex justify-between items-center w-full py-5 px-6 text-left"
      >
        <span className="font-ttnorms text-lg sm:text-xl text-white">
          {question}
        </span>

        <motion.div
          variants={iconVariants}
          animate={isOpen ? "opened" : "closed"}
          transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
          className="w-6 h-6 flex-shrink-0 will-change-transform transform-gpu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="w-6 h-6 text-brand-yellow"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 4.5v15m7.5-7.5h-15"
            />
          </svg>
        </motion.div>
      </button>

      <AnimatePresence initial={false}>
        <motion.div
          key="answer"
          initial="closed"
          animate={isOpen ? "opened" : "closed"}
          exit="closed"
          variants={containerVariants}
          transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
          className="grid overflow-hidden will-change-[grid-template-rows,opacity]"
        >
          <div className="overflow-hidden">
            <p className="font-ttnorms text-base sm:text-lg text-white/80 pb-6 px-6">
              {answer}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

// --- Componente Principal da Seção FAQ ---
function FaqSection() {
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
    // A mágica acontece aqui: A className desta section é uma cópia da TestimonialSection
    <motion.section
      className="relative w-full py-16 md:py-24 overflow-hidden bg-transparent -mt-px"
      // Você pode adicionar animações de entrada aqui se desejar, como no outro componente
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Conteúdo da Seção FAQ */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Cabeçalho da Seção */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Perguntas <span className="text-brand-yellow">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto"></div>
          <p className="font-ttnorms text-lg text-white/80 mt-6">
            Tire suas dúvidas sobre os cursos, terapias e a jornada de
            transformação com Flávia Cavalcante.
          </p>
        </div>

        {/* Lista de Perguntas (Acordeão) */}
        <div className="max-w-3xl mx-auto bg-white/10 md:backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden">
          {faqData.map((item, index) => (
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FaqSection;
