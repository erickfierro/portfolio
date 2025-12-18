"use client"

import { createContext, useContext, useState, type ReactNode } from "react"
import { type Locale, translations, type Translations } from "@/lib/i18n"

type LanguageContextType = {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: Translations
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocale] = useState<Locale>("en")

  const t = translations[locale]

  return <LanguageContext.Provider value={{ locale, setLocale, t }}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
