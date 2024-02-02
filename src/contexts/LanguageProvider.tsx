import { useState } from "react";
import { LanguageContext } from "./LanguageContext";

export const LanguageProvider = ({ children }: { children: JSX.Element }) => {
  const [language, setLanguage] = useState("en-US");

  const changeLanguage = (language: string) => {
    setLanguage(language);
  };

  return (
    <LanguageContext.Provider value={{ language, changeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
