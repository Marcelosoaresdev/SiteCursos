import React from "react";
// 1. Importe 'useLocation' para rastrear a URL atual
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// 2. Importe 'AnimatePresence' da biblioteca framer-motion
import { AnimatePresence } from "framer-motion";

import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

/**
 * Componente interno que lida com a lógica de roteamento e animação.
 * É necessário porque o hook 'useLocation' precisa estar dentro do <Router>.
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    // 3. AnimatePresence gerencia as animações de entrada e saída das páginas.
    //    mode="wait" garante que a página antiga termine sua animação de saída
    //    antes que a nova página comece sua animação de entrada.
    <AnimatePresence mode="wait">
      {/* 4. A 'key' e a 'location' são cruciais. Elas informam ao AnimatePresence
          que a página mudou e que uma transição deve ser acionada. */}
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/:slug" element={<CategoryPage />} />
      </Routes>
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <Navbar />
      {/* A tag <main> agora tem uma cor de fundo escura.
          Isso evita o "flash branco" durante a transição de páginas. */}
      <main className="bg-slate-900">
        {/* 5. Usamos nosso novo componente de rotas animadas aqui */}
        <AnimatedRoutes />
      </main>
      <Footer />
    </Router>
  );
}

export default App;
