import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function ScrollToTop() {
  // Pega o `pathname` (ex: "/categoria/financeiro") da URL atual
  const { pathname } = useLocation();

  // Este efeito será executado toda vez que o `pathname` mudar
  useEffect(() => {
    // Leva a janela para o topo (posição 0, 0)
    window.scrollTo(0, 0);
  }, [pathname]);

  // Este componente não renderiza nada na tela, ele apenas executa a lógica acima
  return null;
}

export default ScrollToTop;
