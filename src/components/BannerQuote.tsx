import React from "react";
import { useQuoteAnimation } from "../hooks/useQuoteAnimation";

interface BannerProps {
  style: "withBG" | "noBG";
  quoteIndex: number;
  containerType: string;
}

const BannerQuote: React.FC<BannerProps> = ({
  style,
  containerType,
}) => {

  useQuoteAnimation(`.${containerType}-container h2`);

  return style === "withBG" ? (
    <React.Fragment>
    </React.Fragment>
  ) : (
    <React.Fragment>
    </React.Fragment>
  );
};

export default BannerQuote;
