// CourseCard.jsx - VERSÃO COMPLETA COM DESIGN DE PREÇOS APRIMORADO
import React from "react";
import LearnMoreButton from "./LearnMoreButton";
import { useIsStudentVersion } from "../hooks/useIsStudentVersion";

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
}) {
  const isStudentVersion = useIsStudentVersion();

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

  const cardStyle = isHighlighted ? theme.highlighted : theme.normal;

  return (
    <div
      className={`relative flex flex-col items-center w-full max-w-xs mx-auto transition-all duration-300 ${
        isHighlighted ? "md:w-64 lg:w-80" : "md:w-56 lg:w-72 pt-12 md:pt-16"
      }`}
    >
      {/* Banner ESPAÇO DO UNIVERSITÁRIO */}
      {universityBanner && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#3A5AFF] text-white font-league text-lg rounded-md uppercase px-4 py-1.5 z-20 shadow-lg whitespace-nowrap">
          ESPAÇO DO UNIVERSITÁRIO
        </div>
      )}

      {!isHighlighted && (
        <div className="absolute top-0 w-full text-center z-10">
          <h2
            className={`font-league uppercase ${cardStyle.titleColor} text-5xl md:text-6xl tracking-tighter mb-4`}
          >
            {title}
          </h2>
        </div>
      )}

      <div
        className={`w-full h-full flex flex-col p-4 md:p-5 rounded-2xl border-2 transition-all duration-500 ease-out shadow-[12px_17px_51px_rgba(0,0,0,0.22)] md:hover:scale-105 active:scale-95 active:rotate-1.7 relative ${cardStyle.cardBg} ${cardStyle.borderColor}`}
      >
        {isHighlighted && (
          <>
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-red-500 text-white font-league text-xl rounded-md uppercase px-4 py-1.5 z-20 shadow-lg whitespace-nowrap">
              MAIS VENDIDO
            </div>
            <h2
              className={`font-league uppercase text-5xl tracking-tighter mb-3 text-center pt-8 ${cardStyle.titleColor}`}
            >
              {title}
            </h2>
          </>
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
          className={`font-ttnorms mt-1 mb-4 flex-grow ${cardStyle.textColor} ${
            isHighlighted ? "text-lg" : "text-md"
          } text-center px-3`}
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
          className={`mt-auto pt-4 text-center font-ttnorms ${cardStyle.titleColor}`}
        >
          {isStudentVersion ? (
            // DESIGN ESPECIAL PARA ESTUDANTES COM GLASSMORPHISM DIFERENTE PARA NÃO-HIGHLIGHTED
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
                  <span className="text-white/70 text-sm hidden sm:inline">
                    |
                  </span>
                  <p className="text-white text-lg font-bold">
                    {priceFull} à vista
                  </p>
                </div>

                <div className="mt-1 bg-white/10 text-white text-xs font-medium px-2 py-1 rounded-full">
                  Economize até 30%
                </div>
              </div>
            </div>
          ) : (
            // DESIGN NORMAL (NÃO ESTUDANTE)
            <>
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
              <p className={`mt-2 ${isHighlighted ? "text-sm" : "text-xs"}`}>
                ou <span className="font-bold">{priceFull}</span> à vista
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
