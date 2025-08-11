// src/components/FaqSection.jsx

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

// --- Dados do FAQ ---
// Adicionamos um 'id' para usar como key, o que é mais robusto que o index do map.
// Colocar a função fora do componente evita que seja recriada a cada renderização.
const getFaqData = () => [
  {
    id: "faq-1",
    question: "Preciso ter experiência prévia?",
    answer:
      "Não. Nossos cursos foram pensados para qualquer pessoa, independentemente do nível de conhecimento. Todo o conteúdo é apresentado de forma clara e progressiva.",
  },
  {
    id: "faq-2",
    question: "Por quanto tempo terei acesso?",
    answer:
      "O acesso é vitalício. Você poderá assistir às aulas no seu próprio ritmo, quantas vezes quiser, e revisitar o conteúdo sempre que precisar.",
  },
  {
    id: "faq-3",
    question: "Há garantia?",
    answer:
      "Sim. Você conta com nossa garantia de satisfação: dentro de 7 dias após a compra, se não estiver satisfeito, poderá solicitar o reembolso integral, conforme a política da Hotmart.",
  },
  {
    id: "faq-4",
    question: "Como funciona o acesso ao conteúdo?",
    answer:
      "Após a confirmação do pagamento, você receberá um login e senha para acessar a plataforma online, onde todo o material estará disponível para você.",
  },
];

// --- Sub-componente: Ícone ---
// Componente pequeno e focado, melhora a legibilidade.
const AccordionIcon = ({ isOpen }) => (
  <motion.div
    animate={{ rotate: isOpen ? 45 : 0 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
    className="w-6 h-6 flex-shrink-0"
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
);

// --- Sub-componente: Item do Acordeão ---
// Usamos React.memo para evitar re-renderizações desnecessárias dos itens que não mudaram.
const AccordionItem = React.memo(({ item, isOpen, onToggle }) => {
  // Variantes para o painel de conteúdo. Definidas aqui para ter acesso ao `item.id`.
  const panelVariants = {
    hidden: {
      height: 0,
      opacity: 0,
      marginTop: 0,
      transition: { duration: 0.3, ease: [0.16, 1, 0.3, 1] },
    },
    visible: {
      height: "auto",
      opacity: 1,
      marginTop: "0px", // Assegura que não há margem no estado visível
      transition: {
        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
        opacity: { duration: 0.3, ease: "easeIn", delay: 0.1 },
      },
    },
  };

  return (
    <div className="border-b border-white/20">
      <button
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${item.id}`}
        className="flex w-full items-center justify-between py-5 px-6 text-left"
      >
        <span className="font-ttnorms text-lg text-white sm:text-xl">
          {item.question}
        </span>
        <AccordionIcon isOpen={isOpen} />
      </button>

      {/* AnimatePresence gerencia a animação de entrada e saída do painel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key={`panel-${item.id}`} // A key aqui é importante para AnimatePresence
            id={`faq-panel-${item.id}`}
            variants={panelVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            className="overflow-hidden"
          >
            <p className="font-ttnorms pb-6 px-6 text-base text-white/80 sm:text-lg">
              {item.answer}
            </p>
          </motion.section>
        )}
      </AnimatePresence>
    </div>
  );
});

// --- Componente Principal da Seção FAQ ---
function FaqSection() {
  const [openPanels, setOpenPanels] = useState([]);
  const faqData = useMemo(() => getFaqData(), []);

  const handleToggle = (id) => {
    setOpenPanels((currentOpen) =>
      currentOpen.includes(id)
        ? currentOpen.filter((panelId) => panelId !== id)
        : [...currentOpen, id]
    );
  };

  return (
    <motion.section
      className="relative w-full bg-transparent py-16 md:py-24"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.8 }}
    >
      <div className="container relative z-10 mx-auto px-4 sm:px-6">
        {/* Cabeçalho da Seção */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <h2 className="font-league text-4xl uppercase tracking-tight text-white sm:text-5xl md:text-6xl">
            Perguntas <span className="text-brand-yellow">Frequentes</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-24 bg-brand-yellow" />
          <p className="font-ttnorms mt-6 text-lg text-white/80">
            Tire suas dúvidas sobre os cursos aqui.
          </p>
        </div>

        {/* Lista de Perguntas (Acordeão) */}
        <div className="mx-auto max-w-3xl overflow-hidden rounded-xl border border-white/20 bg-white/10 [content-visibility:auto]">
          {faqData.map((item) => (
            <AccordionItem
              key={item.id} // Chave estável e única
              item={item}
              isOpen={openPanels.includes(item.id)}
              onToggle={() => handleToggle(item.id)}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
}

export default FaqSection;
