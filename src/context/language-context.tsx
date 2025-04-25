import { useEffect, useState, createContext, useContext } from "react";

type language = "EN" | "ES";

type LanguageContextProviderProps = {
  children: React.ReactNode;
};

type LanguageContextType = {
  language: language;
  toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export default function LanguageContextProvider({
  children,
}: LanguageContextProviderProps) {
  const [language, setLanguage] = useState<language>("ES"); // Cambiado a "ES"

  const toggleLanguage = () => {
    if (language === "EN") {
      setLanguage("ES");
      window.localStorage.setItem("language", "ES");
      document.documentElement.classList.add("ES");
    } else {
      setLanguage("EN");
      window.localStorage.setItem("language", "EN");
      document.documentElement.classList.remove("ES");
    }
  };

  useEffect(() => {
    const localLanguage = window.localStorage.getItem(
      "language"
    ) as language | null;

    if (localLanguage) {
      setLanguage(localLanguage);

      if (localLanguage === "ES") {
        document.documentElement.classList.add("ES");
      }
    } else {
      setLanguage("ES"); // Idioma predeterminado cambiado a "ES"
      document.documentElement.classList.add("ES");
    }
  }, []);

  return (
    <LanguageContext.Provider
      value={{
        language,
        toggleLanguage,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);

  if (context === null) {
    throw new Error(
      "useLanguage must be used within a LanguageContextProvider"
    );
  }

  return context;
}