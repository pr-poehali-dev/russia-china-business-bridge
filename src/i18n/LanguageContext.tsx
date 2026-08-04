import { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type Lang = "ru" | "zh";

interface LanguageContextValue {
  lang: Lang;
  setLang: (l: Lang) => void;
  toggle: () => void;
}

const LanguageContext = createContext<LanguageContextValue>({
  lang: "ru",
  setLang: () => {},
  toggle: () => {},
});

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const saved = typeof window !== "undefined" ? localStorage.getItem("site_lang") : null;
    return saved === "zh" ? "zh" : "ru";
  });

  const setLang = (l: Lang) => {
    setLangState(l);
    localStorage.setItem("site_lang", l);
  };

  const toggle = () => setLang(lang === "ru" ? "zh" : "ru");

  useEffect(() => {
    document.documentElement.lang = lang === "zh" ? "zh" : "ru";
  }, [lang]);

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggle }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLang() {
  return useContext(LanguageContext);
}

/** Хелпер: выбирает значение по языку. pick(lang, "русский", "中文") */
export function pick<T>(lang: Lang, ru: T, zh: T): T {
  return lang === "zh" ? zh : ru;
}
