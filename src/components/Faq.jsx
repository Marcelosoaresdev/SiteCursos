import React, { useState, memo } from "react";
import { motion } from "framer-motion";

const AccordionItem = memo(function AccordionItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  // Variantes para controlar os estados da animação do conteúdo
  const contentVariants = {
    // Estado fechado: altura 0 e invisível
    closed: {
      height: 0,
      opacity: 0,
      transition: { duration: 0.22, ease: [0.22, 1, 0.36, 1] },
    },
    // Estado aberto: altura automática e visível
    open: {
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] },
    },
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
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="w-6 h-6 flex-shrink-0" // Removido transform-gpu, motion cuida disso
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

      {/* Usamos as variantes aqui. O `motion.div` irá animar de `height: 0`
        para `height: 'auto'` de forma otimizada.
      */}
      <motion.div
        variants={contentVariants}
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        className="overflow-hidden" // Essencial para o efeito de altura funcionar
      >
        {/* Não precisamos mais do innerRef ou de um wrapper extra */}
        <p className="font-ttnorms text-base sm:text-lg text-white/80 pb-6 px-6">
          {answer}
        </p>
      </motion.div>
    </div>
  );
});

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
            Tire suas dúvidas sobre os cursos aqui.
          </p>
        </div>

        {/* Lista de Perguntas (Acordeão) */}
        <div className="max-w-3xl mx-auto bg-white/10 rounded-xl border border-white/20 overflow-hidden [content-visibility:auto]">
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
