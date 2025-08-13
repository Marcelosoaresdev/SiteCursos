import React from "react";
// As importações do router e framer-motion permanecem as mesmas
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// Importações das suas páginas e componentes
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage";
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";

/**
 * Componente que lida com a lógica de roteamento e animação.
 */
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      {/* O 'key' garante que o AnimatePresence detecte a mudança de página */} {" "}
      <Routes location={location} key={location.pathname}>
        {/* --- Rotas para o site padrão --- */}
        <Route path="/" element={<HomePage />} />
        <Route path="/categoria/:slug" element={<CategoryPage />} />
        {/* --- ✅ NOVAS ROTAS PARA A VERSÃO UNIVERSITÁRIO --- */}
        {/* Ambas apontam para os mesmos componentes, que carregarão os dados corretos. */}
        <Route path="/universitario" element={<HomePage />} />{" "}
        <Route
          path="/universitario/categoria/:slug"
          element={<CategoryPage />}
        />{" "}
      </Routes>{" "}
    </AnimatePresence>
  );
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <main className="bg-slate-900">
        {/* Usamos nosso componente de rotas animadas que agora inclui as rotas de estudante */}
        <AnimatedRoutes />{" "}
      </main>
    </Router>
  );
}

export default App;
