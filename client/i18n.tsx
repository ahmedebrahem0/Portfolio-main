import { createContext, useContext, useEffect, type ReactNode } from "react";
import { useLocation } from "react-router-dom";
import { arabic } from "./translations/ar";

export type Locale = "en" | "ar";
const LocaleContext = createContext<Locale>("en");
const site = "https://protofolio-blush-six.vercel.app";

export function translate(value: string, locale: Locale): string {
  return locale === "ar" ? (arabic as Record<string, string>)[value] ?? value : value;
}

export function useTranslation() {
  const locale = useContext(LocaleContext);
  return { locale, t: (value: string) => translate(value, locale) };
}

export function T({ children }: { children: string }) {
  const { t } = useTranslation();
  return <>{t(children)}</>;
}

function setMeta(selector: string, content: string) {
  document.querySelector<HTMLMetaElement>(selector)?.setAttribute("content", content);
}

export function LocaleProvider({ locale, children }: { locale: Locale; children: ReactNode }) {
  const { pathname } = useLocation();
  useEffect(() => {
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    const title = translate("Ahmed Ebrahem — Front-End Developer", locale);
    const description = translate("Ahmed Ebrahem — Front-End Developer in Cairo. Explore production storefronts, enterprise dashboards, and interactive web experiences built with React, Next.js, and TypeScript.", locale);
    document.title = title;
    setMeta('meta[name="description"]', description);
    setMeta('meta[property="og:title"]', title);
    setMeta('meta[property="og:description"]', description);
    setMeta('meta[name="twitter:title"]', title);
    setMeta('meta[name="twitter:description"]', description);
    setMeta('meta[property="og:locale"]', locale === "ar" ? "ar_EG" : "en_US");
    const canonical = `${site}${locale === "ar" ? "/ar/" : "/"}`;
    document.querySelector<HTMLLinkElement>('link[rel="canonical"]')?.setAttribute("href", canonical);
    setMeta('meta[property="og:url"]', canonical);
  }, [locale, pathname]);
  return <LocaleContext.Provider value={locale}>{children}</LocaleContext.Provider>;
}
