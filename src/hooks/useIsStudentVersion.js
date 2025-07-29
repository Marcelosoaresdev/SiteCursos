import { useLocation } from "react-router-dom";

/**
 * Retorna `true` se a URL atual incluir '/universitario'.
 */
export function useIsStudentVersion() {
  const location = useLocation();
  return location.pathname.includes("/universitario");
}
