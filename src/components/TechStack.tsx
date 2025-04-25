import React, { useRef } from "react";
import { Tooltip as ReactTooltip } from "react-tooltip";
import { useSectionInView } from "../assets/lib/hooks";
import {
  skillsDataMobile,
  skillsDataDesign,
  skillsDataWeb,
} from "../assets/lib/data";
import { useTheme } from "../context/theme-context";
import { useLanguage } from "../context/language-context";
import SkillSection from "./SkillSection";
import RadialGradient from "./RadialGradient";
import { navLinks } from "../assets/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";

const TechStack: React.FC = () => {
  // Hook para detectar si la sección está en vista
  const { ref } = useSectionInView("Skills");

  // Obtiene el tema actual (oscuro o claro)
  const { theme } = useTheme();

  // Obtiene el idioma actual (ES o EN)
  const { language } = useLanguage();

  // Referencia para animaciones con Framer Motion
  const animationReference = useRef<HTMLDivElement>(null);

  // Configuración de animaciones de scroll con Framer Motion
  const { scrollYProgress } = useScroll({
    target: animationReference,
    offset: ["0 1", "1.33 1"], // Define el rango de activación de la animación
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]); // Escala progresiva
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]); // Opacidad progresiva

  return (
    <React.Fragment>
      {/* Sección principal */}
      <section
        className="relative tech-stack max-lg:p-16"
        id="skills" // Identificador único para la sección
        ref={ref} // Referencia para detectar si está en vista
      >
        {/* Gradiente de fondo */}
        <RadialGradient
          scale="scale-y-[3]"
          opacity={theme === "light" ? "opacity-30" : "opacity-30"}
          position="top-[55rem]"
        />

        {/* Contenedor del título */}
        <div className="title-container flex flex-col justify-center items-center p-32 w-1/2 gap-6 min-[1921px]:px-[55rem] max-lg:p-0 max-lg:w-full max-lg:items-start max-lg:py-16">
          <motion.div
            ref={animationReference} // Referencia para animaciones
            style={{
              scale: scaleProgess, // Escala animada
              opacity: opacityProgess, // Opacidad animada
            }}
          >
            {/* Título de la sección */}
            <p className="font-black mb-6">
              <span className="text-[--verdementa]">&lt;</span>
              {language === "ES" ? navLinks[1].es : navLinks[1].en} {/* Cambia dinámicamente según el idioma */}
              <span className="text-[--verdementa]">/&gt;</span>
            </p>
            <h2>
              {language === "ES"
                ? "Mi Stack tecnológico y habilidades" // Texto en español
                : "My TechStack and Skills"}
            </h2>
          </motion.div>
        </div>

        {/* Contenedor de las secciones de habilidades */}
        <div className="flex gap-40 justify-center max-lg:flex-col">
          {/* Sección de habilidades web */}
          <div className="w-1/3 max-lg:w-full">
            <SkillSection skillsData={skillsDataWeb} theme={theme} />
          </div>

          {/* Secciones de habilidades de diseño y móviles */}
          <div className="flex flex-col h-[inherit] justify-around max-lg:gap-40">
            <SkillSection skillsData={skillsDataDesign} theme={theme} />
            <SkillSection skillsData={skillsDataMobile} theme={theme} />
          </div>
        </div>
      </section>

      {/* Tooltip para mostrar información adicional */}
      <ReactTooltip
        place="top" // Posición del tooltip
        id="my-tooltip" // Identificador del tooltip
        style={{
          fontSize: "1.5rem", // Tamaño de fuente
          zIndex: 10, // Prioridad en la superposición
          backgroundColor: "var(--verdementa)", // Color de fondo
        }}
      />
    </React.Fragment>
  );
};

export default TechStack;