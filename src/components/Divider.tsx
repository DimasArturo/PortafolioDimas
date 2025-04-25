import React from "react";
import {
  widthStyles,
  spaceStyles,
  heightStyles,
  directionStyles,
} from "../assets/lib/data";

// Propiedades que acepta el componente Divider
interface DividerProps {
  direction:
    | "outer-right-to-inner-left"
    | "outer-left-to-inner-right"
    | "inner-right-to-middle"
    | "inner-left-to-middle"
    | "middle-to-inner-right"
    | "middle-to-inner-left"
    | "middle"; // Dirección del divisor
  color: string; // Color del divisor (nombre de la variable CSS)
  thickness: string; // Grosor del divisor
  height: "small" | "middle" | "large" | "extraLarge"; // Altura del divisor
  dividerStyle: string; // Estilo del borde (e.g., solid, dashed)
}

const Divider: React.FC<DividerProps> = ({
  direction,
  color,
  thickness,
  height,
  dividerStyle,
}) => {
  // Estilo del borde basado en las propiedades
  const borderStyle = {
    borderColor: `var(--${color})`, // Usa la variable CSS para el color
    borderStyle: dividerStyle, // Estilo del borde (solid, dashed, etc.)
  };

  // Obtiene los estilos específicos según las propiedades
  const heightStyle = heightStyles[height]; // Altura del divisor
  const directionStyle = directionStyles[direction]; // Dirección del divisor
  const spaceStyle = spaceStyles[direction]; // Espaciado según la dirección
  const widthStyle = widthStyles[direction]; // Ancho según la dirección

  return (
    <div style={directionStyle} className="relative">
      {/* Primera parte del divisor */}
      <div
        className="flex justify-end mb-10"
        style={{
          height: heightStyle?.heights[0], // Altura de la primera parte
          ...spaceStyle, // Espaciado dinámico
        }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle, // Estilo del borde
            borderRightWidth: thickness, // Grosor del borde derecho
            borderBottomWidth: thickness, // Grosor del borde inferior
            width: widthStyle?.widths[0], // Ancho de la primera parte
          }}
        ></div>
      </div>

      {/* Segunda parte del divisor */}
      <div
        className="flex justify-end -mt-10"
        style={{
          height: heightStyle?.heights[1], // Altura de la segunda parte
        }}
      >
        <div
          className="h-full"
          style={{
            ...borderStyle, // Estilo del borde
            borderLeftWidth: thickness, // Grosor del borde izquierdo
            width: widthStyle?.widths[1], // Ancho de la segunda parte
          }}
        ></div>
      </div>
    </div>
  );
};

export default Divider;