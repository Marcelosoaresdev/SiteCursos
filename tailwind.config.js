/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Ele vai procurar classes em todos esses arquivos
  ],
  theme: {
    extend: {
      // Aqui definimos nossas cores customizadas
      backgroundImage: {
        "hero-pattern": "url('/src/assets/heroBg.jpg')",
      },
      colors: {
        "brand-purple": "#2E004B", // O roxo principal do fundo
        "brand-purple-light": "#491272", // Um tom mais claro para os cards
        "brand-orange": "#FF8A00",
        "brand-yellow": "#FFC700",
        "brand-pink": "#E4008E",
        "brand-red": "#D90029",
        "brand-blue": "#00B2FF",
        "brand-green": "#00FF85",
        "text-light": "#F5F5F5",
        "text-dark": "#333333",
        "saude": {
          "dark-blue": "#203162",
          "vivid-azure": "#00afdb",
          "dark-gray": "#323232",
          "white": "#f8f8f8",
        },
        "financeiro": {
          "dark-green": "#23451e",
          "light-green": "#c8f0c2",
        },
        "relacionamento": {
          "dark": '#7f1d1d  ',
          "light": '#f87171',
        }
      },
      // Aqui definimos nossas fontes customizadas
      fontFamily: {
        league: ["League Gothic", "sans-serif"], // Nomes que vamos usar nas classes
        ttnorms: ["TT Norms", "sans-serif"],
        allura: ["Allura", "cursive"],
      },
      keyframes: {
        shine: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      },
      animation: {
        shine: 'shine 2.5s linear infinite',
      },
      backgroundImage: {
        "category-gradient": "radial-gradient(circle at 0% 0%, #ba6fef, #8420cb, #58098f)",
        "cta-gradient": "linear-gradient(90deg, #fbd4b1, #ff961c, #ff4d00)",
        "button-gradient": "linear-gradient(to right, #a855f7, #7e22ce)",
        "hero-pattern": "url('/src/assets-webp/heroBg.webp')",
        "saude-gradient": "linear-gradient(135deg, #d5f5ff, #a9ebff, #49d4ff, #13b8eb)",
      },
      dropShadow: {
        hard: "9px 3px 0 rgba(0, 0, 0, 0.25)",
      },
    },
  },
  plugins: [],
};
