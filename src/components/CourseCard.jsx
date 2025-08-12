// CourseCard.jsx - VERSÃO COMPLETA COM BOTÃO UNIVERSITÁRIO INTEGRADO AO PREÇO

import React from "react";
import LearnMoreButton from "./LearnMoreButton";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";
import { useNavigate } from "react-router-dom";

function CourseCard({
  id,
  title,
  imageSrc,
  heading,
  description,
  priceInstallments,
  priceFull,
  isHighlighted = false,
  purchaseLink,
  theme,
  universityBanner = false,
  categorySlug,
}) {
  const isStudentVersion = useIsStudentVersion();
  const navigate = useNavigate();

  if (!theme) {
    console.error(
      `O curso com id ${id} não possui um objeto de tema definido.`
    );
    return null;
  }

  const handlePurchaseClick = (e) => {
    e.stopPropagation();
    if (purchaseLink) {
      window.open(purchaseLink, "_blank", "noopener,noreferrer");
    }
  };

  const handleLearnMoreClick = (e) => {
    e.stopPropagation();
    document
      .getElementById(`curso-${id}`)
      ?.scrollIntoView({ behavior: "smooth" });
  };

  const handleUniversityClick = (e) => {
    e.stopPropagation();
    if (categorySlug) {
      navigate(`/universitario/categoria/${categorySlug}`);
      // Aumentamos o timeout e adicionamos verificações
      setTimeout(() => {
        const element = document.getElementById("student-courses-section");
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "start" });
        } else {
          // Fallback: tenta novamente após mais tempo
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

  const cardStyle = isHighlighted ? theme.highlighted : theme.normal;

  // --- Botão "Universitário" simplificado, sem classes de posicionamento ---
  // A posição agora é controlada pelo layout do contêiner pai (Flexbox).
  const renderUniversityButton = () => {
    if (isStudentVersion) return null;

    return (
      <button
        onClick={handleUniversityClick}
        className={[
          "group flex items-center self-center gap-1 md:gap-1.5 rounded-full px-3 py-1.5 md:px-3.5 md:py-2",
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

  return (
    <div
      className={`relative flex flex-col items-center w-full max-w-xs mx-auto transition-all duration-300 ${
        isHighlighted ? "md:w-64 lg:w-80" : "md:w-56 lg:w-72"
      }`}
    >
      {universityBanner && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3A5AFF] text-white font-league text-lg rounded-md uppercase px-4 py-1.5 z-20 shadow-lg whitespace-nowrap">
          ESPAÇO DO UNIVERSITÁRIO
        </div>
      )}

      {/* Container que agrupa título + card para fazer hover scale juntos */}
      <div className="w-full h-full transition-all duration-500 ease-out md:hover:scale-105 relative">
        {/* --- REMOVIDO --- As chamadas do botão "Universitário" que estavam aqui foram movidas para a seção de preços. */}
        {/* {!isHighlighted && renderUniversityButton("absolute top-0 -right-1 z-50")} */}
        {/* {isHighlighted && renderUniversityButton("absolute -top-6 right-2 z-50")} */}

        <div
          className={`w-full h-full flex flex-col p-4 md:p-5 rounded-2xl border-2 shadow-[12px_17px_51px_rgba(0,0,0,0.22)] relative ${cardStyle.cardBg} ${cardStyle.borderColor}`}
        >
          {isHighlighted && (
            <>
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-red-500 text-white font-league text-xl rounded-md uppercase px-4 py-1.5 z-20 shadow-lg whitespace-nowrap">
                MAIS VENDIDO
              </div>
              <h2
                className={`font-league uppercase text-7xl tracking-tighter mb-3 text-center pt-8 ${cardStyle.titleColor}`}
              >
                {title}
              </h2>
            </>
          )}

          {!isHighlighted && (
            <h2
              className={`font-league uppercase ${cardStyle.titleColor} text-5xl md:text-6xl tracking-tighter  text-center`}
            >
              {title}
            </h2>
          )}

          <div className="relative my-3 h-auto">
            <img
              loading="lazy"
              src={imageSrc}
              alt={heading}
              className="rounded-xl w-full h-full object-cover"
            />
          </div>

          <h3
            className={`font-league uppercase ${cardStyle.titleColor} ${
              isHighlighted ? "text-4xl" : "text-3xl"
            } mb-3 text-center`}
          >
            {heading}
          </h3>

          <p
            className={`font-ttnorms mt-1 mb-4 flex-grow ${
              cardStyle.textColor
            } ${isHighlighted ? "text-lg" : "text-md"} text-center px-3`}
          >
            {description}
          </p>

          <div className="flex flex-row items-center justify-center gap-2 mb-3">
            <button
              onClick={handlePurchaseClick}
              className={`font-bold uppercase rounded-full transition-all duration-300 shadow-lg hover:scale-105 active:scale-98 whitespace-nowrap ${
                cardStyle.buttonBg
              } ${cardStyle.buttonText} ${
                isHighlighted ? "text-md px-4 py-2" : "text-sm px-3 py-2"
              }`}
            >
              Compre Agora
            </button>
            <div
              onClick={handleLearnMoreClick}
              className="transform scale-75 md:scale-90 lg:scale-100 cursor-pointer"
            >
              <LearnMoreButton
                text="Saiba Mais"
                variant={cardStyle.learnMoreVariant}
              />
            </div>
          </div>

          {/* ÁREA DE PREÇOS - VERSÃO ESTUDANTE OU NORMAL */}
          <div
            className={`mt-auto  text-center font-ttnorms ${cardStyle.titleColor}`}
          >
            {isStudentVersion ? (
              // DESIGN ESPECIAL PARA ESTUDANTES
              <div
                className={`rounded-xl p-3 shadow-sm border border-white/20 backdrop-blur-md ${
                  isHighlighted ? "bg-white/5" : "bg-black/60"
                }`}
              >
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
                  <div className="flex flex-wrap items-baseline justify-center gap-x-2">
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
              // --- ALTERAÇÃO PRINCIPAL ---
              // O botão agora é renderizado AQUI, dentro de um contêiner flex-col
              // para empilhar verticalmente com os preços.
              <div className="flex flex-col items-center gap-y-3">
                {renderUniversityButton()}

                {/* Div para agrupar os preços normais */}
                <div>
                  <div
                    className={`${cardStyle.priceBg} text-white rounded-lg p-2 inline-block shadow-lg`}
                  >
                    <p
                      className={`font-bold ${
                        isHighlighted ? "text-2xl" : "text-xl"
                      }`}
                    >
                      {priceInstallments}
                    </p>
                  </div>
                  <p
                    className={`mt-2 ${isHighlighted ? "text-sm" : "text-xs"}`}
                  >
                    ou <span className="font-bold">{priceFull}</span> à vista
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
export default CourseCard;
