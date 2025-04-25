import { useActiveSectionContext } from "../../context/active-section-context";
import { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import type { SectionName } from "./types";

export function useSectionInView(sectionName: SectionName, threshold = 0.5) {
  // Detecta si es móvil y actualiza dinámicamente
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Configuración del hook useInView
  const { ref, inView } = useInView({
    threshold: isMobile ? 0.1 : threshold, // Umbral dinámico según el dispositivo
  });

  const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    // Cambia la sección activa si está en vista y no hay clics recientes
    if (inView && Date.now() - timeOfLastClick > 500) {
      setActiveSection(sectionName);
    }
  }, [inView, setActiveSection, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}