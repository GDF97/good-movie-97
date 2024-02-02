import { createContext } from "react";

type ILanguageContext = {
  language: string;
  changeLanguage: (language: string) => void;
};

export const LanguageContext = createContext<ILanguageContext>(null!);
