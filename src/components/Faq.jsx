import React, {
  useId,
  useLayoutEffect,
  useMemo,
  useRef,
  useState,
  memo,
} from "react";
import { motion, useReducedMotion } from "framer-motion";

/** Hook para medir a altura do conteúdo sem usar height:auto */
function useMeasuredHeight(isOpen) {
  const ref = useRef(null);
  const [height, setHeight] = useState(0);

  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const measure = () => setHeight(isOpen ? el.scrollHeight : 0);
    measure();

    // Observa mudanças internas (quebra de linha, fonts, imagens, etc.)
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [isOpen]);

  return { ref, height };
}

const AccordionItem = memo(function AccordionItem({
  idBase,
  question,
  answer,
  defaultOpen = false,
}) {
  const [isOpen, setIsOpen] = useState(!!defaultOpen);
  const { ref, height } = useMeasuredHeight(isOpen);
  const reduceMotion = useReducedMotion();

  const contentId = `${idBase}-content`;
  const buttonId = `${idBase}-button`;

  return (
    <div className="border-b border-white/20">
      <button
        id={buttonId}
        aria-expanded={isOpen}
        aria-controls={contentId}
        onClick={() => setIsOpen((v) => !v)}
        className="flex justify-between items-center w-full py-5 px-6 text-left select-none"
      >
        <span className="font-ttnorms text-lg sm:text-xl text-white">
          {question}
        </span>

        {/* Ícone leve: rotação com CSS + transform-gpu */}
        <span
          className={`w-6 h-6 flex-shrink-0 transform-gpu transition-transform duration-200 ${
            isOpen ? "rotate-45" : "rotate-0"
          }`}
          aria-hidden="true"
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
        </span>
      </button>

      {/* Mantém sempre montado; anima a altura em px */}
      <motion.div
        id={contentId}
        role="region"
        aria-labelledby={buttonId}
        // Se "prefers-reduced-motion", não anima.
        animate={{ height: reduceMotion ? (isOpen ? "auto" : 0) : height }}
        initial={false}
        transition={
          reduceMotion
            ? { duration: 0 }
            : { duration: 0.2, ease: [0.22, 1, 0.36, 1] }
        }
        className="overflow-hidden will-change-[height] [transform:translateZ(0)]"
      >
        {/* Wrapper interno para medir a altura real */}
        <div ref={ref}>
          <p className="font-ttnorms text-base sm:text-lg text-white/80 pb-6 px-6">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>
  );
});

function FaqSection() {
  const faqData = useMemo(
    () => [
      {
        q: "Preciso ter experiência prévia?",
        a: "Não. Nossos cursos foram pensados para qualquer pessoa, independentemente do nível de conhecimento. Todo o conteúdo é apresentado de forma clara e progressiva.",
      },
      {
        q: "Por quanto tempo terei acesso?",
        a: "O acesso é vitalício. Você poderá assistir às aulas no seu próprio ritmo, quantas vezes quiser, e revisitar o conteúdo sempre que precisar.",
      },
      {
        q: "Há garantia?",
        a: "Sim. Você conta com nossa garantia de satisfação: dentro de 7 dias após a compra, se não estiver satisfeito, poderá solicitar o reembolso integral, conforme a política da Hotmart.",
      },
      {
        q: "Como funciona o acesso ao conteúdo?",
        a: "Após a confirmação do pagamento, você receberá um login e senha para acessar a plataforma online, onde todo o material estará disponível para você.",
      },
    ],
    []
  );

  const uid = useId(); // base estável para ids acessíveis

  return (
    <section className="relative w-full py-16 md:py-24 overflow-hidden bg-transparent -mt-px">
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="font-league text-4xl sm:text-5xl md:text-6xl uppercase tracking-tight text-white">
            Perguntas <span className="text-brand-yellow">Frequentes</span>
          </h2>
          <div className="w-24 h-1 bg-brand-yellow mt-4 mx-auto" />
          <p className="font-ttnorms text-lg text-white/80 mt-6">
            Tire suas dúvidas sobre os cursos aqui.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-white/10 rounded-xl border border-white/20 overflow-hidden [content-visibility:auto]">
          {faqData.map((item, i) => (
            <AccordionItem
              key={`${uid}-${i}`}
              idBase={`${uid}-${i}`}
              question={item.q}
              answer={item.a}
              defaultOpen={i === 0} // opcional: abre o primeiro
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FaqSection;
