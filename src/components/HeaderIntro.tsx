import React from "react";
import Button from "./Button";
import RadialGradient from "./RadialGradient";
import { headerIntroData } from "../assets/lib/data";
import { useSectionInView } from "../assets/lib/hooks";
import { useActiveSectionContext } from "../context/active-section-context";
import { useLanguage } from "../context/language-context";
import { BsMouse } from "react-icons/bs";

const HeaderIntro: React.FC = () => {
  // Obtiene el idioma actual (ES o EN)
  const { language } = useLanguage();

  // Hook para detectar si la sección está en vista
  const { ref } = useSectionInView("Home", 0.5);

  // Contexto para manejar la sección activa y el tiempo del último clic
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      className="hero flex flex-col justify-center gap-10 items-center h-full max-lg:h-full max-lg:gap-6"
      ref={ref} // Referencia para detectar si la sección está en vista
      id="home" // Identificador único de la sección
    >
      {/* Gradiente de fondo */}
      <RadialGradient scale="scale-y-125" opacity="opacity-30" />

      {/* Imagen de perfil */}
      <img
        src={headerIntroData.profilepicture} // URL de la imagen
        alt={headerIntroData.profilepicture} // Texto alternativo
        className="w-44 max-lg:w-38 drop-shadow-2xl rounded-full shadow-2xl avatar-img"
      />

      {/* Título principal */}
      <h1 className="flex items-center justify-center gap-10 text-8xl font-bold text-center max-lg:text-4xl max-lg:gap-2">
        {language === "ES"
          ? headerIntroData.title.es // Título en español
          : headerIntroData.title.en}
        <span className="wave text-5xl">&#128075;&#127997;</span> {/* Emoji de saludo */}
      </h1>

      {/* Subtítulo */}
      <h2>{headerIntroData.subtitle}</h2>

      {/* Descripción */}
      <p className="w-1/2 text-center max-lg:hidden">
        {language === "ES"
          ? headerIntroData.description.es // Descripción en español
          : headerIntroData.description.en}
      </p>

      {/* Botones */}
      <div className="button-container flex items-center justify-center mr-8 gap-10 mb-12 max-lg:flex-col max-lg:items-center">
        {headerIntroData.buttons.map((button, index) => (
          <Button
            key={index} // Clave única para cada botón
            label={
              language === "ES" && "es" in button.label
                ? button.label.es // Etiqueta en español
                : button.label.en // Etiqueta en inglés
            }
            iconSVG={button.icon} // Icono del botón
            link={`#${button.name.toLocaleLowerCase()}`} // Enlace del botón
            buttoncolor={button.color} // Color del botón
            onClick={() => {
              setActiveSection(button.name); // Actualiza la sección activa
              setTimeOfLastClick(Date.now()); // Registra el tiempo del último clic
            }}
          />
        ))}
      </div>

      {/* Indicador de scroll hacia abajo */}
      <div className="scroll-down-container animate-bounce flex gap-6">
        <BsMouse className="text-[2.6rem]" /> {/* Icono de mouse */}
      </div>
    </section>
  );
};

export default HeaderIntro;