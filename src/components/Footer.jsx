import React from "react";
import { motion } from "framer-motion";
import { useScrollAnimation } from "../hooks/useScrollAnimation";

function Footer() {
  const currentYear = new Date().getFullYear();
  const scrollAnimation = useScrollAnimation();

  return (
    <motion.footer
      ref={scrollAnimation.ref}
      className="relative w-full overflow-hidden bg-gradient-to-br from-purple-900 to-brand-purple text-white/60 py-6"
      variants={scrollAnimation.variants}
      initial={scrollAnimation.initial}
      animate={scrollAnimation.animate}
      transition={scrollAnimation.transition}
    >
      {/* Elementos decorativos */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/3 -left-10 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-12 w-72 h-72 rounded-full bg-white/5 blur-3xl"></div>

        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      {/* Conteúdo */}
      <div className="container relative z-10 px-4 mx-auto flex flex-col items-center gap-2 text-center">
        <p className="text-white/70 text-sm md:text-base">
          &copy; {currentYear} Vitis Souls. Todos os direitos reservados.
        </p>

        <p className="text-white/60 text-lg md:text-base">
          Siga nossas redes sociais para novidades e atualizações!
        </p>

        {/* Ícones + nomes lado a lado */}
        <div className="flex flex-col sm:flex-row items-center gap-6 mt-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/vitissouls"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-white hover:text-[#ffc961] transition-colors"
            >
              <path d="M7.5 2h9a5.5 5.5 0 0 1 5.5 5.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9a3.5 3.5 0 0 0 3.5-3.5v-9A3.5 3.5 0 0 0 16.5 4h-9zM12 7a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm0 2a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm4.75-2.75a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
            </svg>
            <span className="text-white/70 text-xl">@vitissouls</span>
          </a>

          {/* TikTok */}
          <a
            href="https://www.tiktok.com/@vitissouls_"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="TikTok"
            className="flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 24 24"
              className="w-7 h-7 text-white hover:text-[#ffc961] transition-colors"
            >
              <path d="M12.75 2c.25 2.25 1.875 4 4.125 4.25v2.625c-.875 0-1.75-.25-2.625-.625v6.75c0 3.25-2.625 5.875-5.875 5.875S2.5 18.25 2.5 15s2.625-5.875 5.875-5.875c.25 0 .625 0 .875.125v2.75c-.25-.125-.5-.125-.75-.125-1.75 0-3.125 1.375-3.125 3.125s1.375 3.125 3.125 3.125 3.125-1.375 3.125-3.125V2h2.125z" />
            </svg>
            <span className="text-white/70 text-xl">@vitissouls_</span>
          </a>
        </div>
      </div>
    </motion.footer>
  );
}

export default Footer;
