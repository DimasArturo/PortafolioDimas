// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import React from "react";
import { Link } from "react-router-dom";
import { sideBarLeftSocials, FooterLinks } from "../assets/lib/data";
import { useLanguage } from "../context/language-context";

interface SocialLink {
  link: string;
  icon: string | React.FC<{ className: string }>;
  strokeColor?: string;
  altimgname: string;
  iconcolor?: string;
}

const Footer: React.FC = () => {
  const { language } = useLanguage();

  return (
    <footer className="bg-darkblue flex justify-around items-center gap-10 p-10 max-lg:flex-col max-lg:pb-48 relative z-[1]">
<div className="flex gap-10">
  {FooterLinks.map((link, index) => (
    <p
      key={index} // Clave única para cada enlace
      className="text-white text-2xl font-bold hover:text-[--verdementa] cursor-pointer"
    >
      {language === "ES" ? link.es : link.en} {/* Texto dinámico según el idioma */}
    </p>
  ))}
</div>
      <div className="socials flex gap-10">
        {sideBarLeftSocials.map((social: SocialLink, index: number) => (
          <Link
            to={social.link}
            className=""
            key={index}
            target="_blank"
            rel="noopener noreferrer"
          >
            {typeof social.icon === "function" ? (
              <social.icon className={`stroke-[--verdementa]`} />
            ) : (
              <img
                src={social.icon}
                alt={social.altimgname}
                style={{ stroke: "var(--verdementa)" }}
              />
            )}
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;