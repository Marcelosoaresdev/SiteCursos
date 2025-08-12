// ComboCard.jsx - VERSÃO REATORADA E GENÉRICA (botão Universitário centralizado no desktop)
import React from "react";
import LearnMoreButton from "./LearnMoreButton";
import { useNavigate } from "react-router-dom";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

function ComboCard({
  heading,
  description,
  imageSrc,
  id,
  priceInstallments,
  priceFull,
  purchaseLink, // 1. Recebendo o link de compra
  theme, // 2. Recebendo o objeto de tema
  categorySlug, // 3. Adicionando categorySlug para redirecionamento
  comboTitle, // 4. Adicionando comboTitle para exibir o nome específico do combo
}) {
  const isStudentVersion = useIsStudentVersion();
  const navigate = useNavigate();

  const handleLearnMoreClick = () => {
    document
      .getElementById(`combo-section`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUniversityClick = (e) => {
    e.stopPropagation();
    if (categorySlug) {
      navigate(`/universitario/categoria/${categorySlug}`);
      setTimeout(() => {
        const element = document.getElementById("student-courses-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          setTimeout(() => {
            const retryElement = document.getElementById(
              "student-courses-section"
            );
            if (retryElement) {
              retryElement.scrollIntoView({
                behavior: "smooth",
                block: "start",
              });
            }
          }, 300);
        }
      }, 200);
    }
  };

  // Botão universitário similar ao CourseCard
  const renderUniversityButton = () => {
    if (isStudentVersion) return null;

    return (
      <button
        onClick={handleUniversityClick}
        className={[
          "group inline-flex w-auto shrink-0 items-center",
          "self-center md:self-start mx-auto md:mx-0", // centraliza no mobile; esquerda no desktop quando usado fora do wrapper
          "gap-1 md:gap-1.5 rounded-full px-3 py-1.5 md:px-3.5 md:py-2",
          "text-xs md:text-[13px] font-semibold tracking-tight",
          "cursor-pointer select-none",
          "bg-gradient-to-r from-blue-500 to-purple-600 text-white",
          "border border-white/20",
          "shadow-sm hover:shadow-md",
          "transition-all duration-200",
          "hover:from-blue-600 hover:to-purple-700 active:scale-[0.98]",
          "focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-0",
        ].join(" ")}
        title="Ver preços universitários"
        aria-label="Ver preços universitários"
      >
        <svg
          className="h-3.5 w-3.5 md:h-4 md:w-4 opacity-90 group-hover:opacity-100 transition-opacity"
          viewBox="0 0 24 24"
          fill="currentColor"
          aria-hidden="true"
        >
          <path d="M12 3L1 8l11 5 8-3.636V15h2V8L12 3zm-5 9.5v2.25c0 .414.336.75.75.75h8.5a.75.75 0 0 0 .75-.75V12.5l-5 2.273L7 12.5z" />
        </svg>
        <span className="uppercase">
          <span className="md:hidden">Universitário</span>
          <span className="hidden md:inline">Universitário</span>
        </span>
        <span
          className="ml-0.5 md:ml-1 inline-block translate-x-0 group-hover:translate-x-0.5 transition-transform"
          aria-hidden="true"
        >
          →
        </span>
      </button>
    );
  };

  const safeTheme = theme || {};

  // Função para dividir o comboTitle em duas partes
  const splitComboTitle = (title) => {
    if (!title) return { mainTitle: "Combo", subtitle: "" };
    
    const parts = title.split(": ");
    if (parts.length >= 2) {
      return {
        mainTitle: parts[0],
        subtitle: parts.slice(1).join(": ")
      };
    }
    return { mainTitle: title, subtitle: "" };
  };

  const { mainTitle, subtitle } = splitComboTitle(comboTitle);

  return (
    <div className="w-full px-4 md:px-8 mb-12 md:mb-24">
      <div className="text-center mb-3">
        <h2
          className={`font-league text-4xl md:text-5xl lg:text-6xl ${safeTheme.titleColor} uppercase mb-2`}
        >
          {mainTitle}
        </h2>
        {subtitle && (
          <h3
            className={`font-league text-3xl lg:text-4xl ${safeTheme.titleColor} capitalize leading-tight`}
          >
            {subtitle}
          </h3>
        )}
      </div>

      <div
        className={`flex flex-col md:flex-row items-center gap-6 md:gap-8 max-w-4xl mx-auto rounded-2xl border-2 p-4 md:p-5 shadow-[12px_17px_51px_rgba(0,0,0,0.22)] ${safeTheme.cardBg} ${safeTheme.cardBorder}`}
      >
        {/* IMAGEM */}
        <div className="w-full md:w-1/3 flex-shrink-0">
          <img
            src={imageSrc}
            alt={heading}
            className="rounded-xl shadow-lg w-full h-full object-cover"
          />
        </div>

        {/* CONTEÚDO */}
        <div className="w-full md:w-2/3 flex flex-col justify-between text-center md:text-left">
          <div>
            <h3
              className={`font-league text-3xl ${safeTheme.headingColor} uppercase`}
            >
              {heading}
            </h3>
            <p className={`font-ttnorms ${safeTheme.textColor} mt-2`}>
              {description}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6 justify-center md:justify-start">
            <a
              href={purchaseLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`font-bold uppercase text-sm px-6 py-3 rounded-full shadow-lg transition-all duration-300 hover:scale-105 active:scale-98 ${safeTheme.buttonBg} ${safeTheme.buttonText}`}
            >
              Garantir Meu Acesso com Desconto
            </a>
            <LearnMoreButton
              text="Saiba Mais"
              onClick={handleLearnMoreClick}
              variant={safeTheme.learnMoreVariant}
            />
          </div>

          <div
            className={`mt-6 w-full mx-auto md:mx-0 font-ttnorms ${safeTheme.headingColor}`}
          >
            {isStudentVersion ? (
              // DESIGN ESPECIAL PARA ESTUDANTES - FORMATO IGUAL AOS COURSECARDS
              <div className="rounded-xl p-3 shadow-sm border border-white/20 backdrop-blur-md bg-black/60">
                <div className="flex flex-col items-center">
                  <div className="flex items-center justify-center gap-1 mb-1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-white/90"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <p className="text-white text-xs font-medium uppercase tracking-wide">
                      Preço Universitário
                    </p>
                  </div>

                  {/* Preços empilhados verticalmente como nos CourseCards */}
                  <div className="flex flex-col items-center gap-1">
                    <p className="text-white text-xl font-bold">
                      {priceInstallments}
                    </p>

                    <p className="text-white text-lg font-bold">
                      {priceFull} à vista
                    </p>
                  </div>
                </div>
              </div>
            ) : (
              // DESIGN NORMAL COM BOTÃO UNIVERSITÁRIO
              <div className="flex flex-col gap-y-3">
                {/* Mobile: botão acima dos preços */}
                <div className="md:hidden">{renderUniversityButton()}</div>

                {/* Desktop: preços + botão lado a lado */}
                <div className="flex flex-col md:flex-row md:items-start md:gap-4">
                  {/* Preço */}
                  <div className="flex-shrink-0">
                    <div
                      className={`${safeTheme.priceBg} text-white rounded-full p-2 inline-block shadow-lg`}
                    >
                      <p className="font-bold text-2xl">{priceInstallments}</p>
                    </div>
                    <p className="mt-2 text-sm md:text-center">
                      ou <span className="font-bold text-lg">{priceFull}</span>{" "}
                      à vista
                    </p>
                  </div>

                  {/* Botão (desktop): centralizado verticalmente */}
                  <div
                    className={[
                      "hidden md:flex",
                      "md:self-center", // <-- centraliza verticalmente ao lado do preço
                      // ajuste fino opcional (descomente/edite um):
                      "md:mb-6", // empurra um pouco para baixo
                      // "md:-mt-1",             // puxa um pouco para cima
                      // "transform md:translate-y-1", // desloca 4px p/ baixo
                    ].join(" ")}
                  >
                    {renderUniversityButton()}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ComboCard;
