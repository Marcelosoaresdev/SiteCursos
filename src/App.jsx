import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CategoryPage from "./pages/CategoryPage"; // Importe a nova página genérica
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />

          {/* ROTA DINÂMICA: Isso captura /categoria/qualquer-coisa */}
          <Route path="/categoria/:slug" element={<CategoryPage />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
