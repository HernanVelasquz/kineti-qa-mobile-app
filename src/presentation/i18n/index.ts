import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { getLocales } from "expo-localization";

import es from "./locales/es.json";
import en from "./locales/en.json";

// Detect system language or fallback to Spanish
const systemLanguage = getLocales()?.[0]?.languageCode ?? "es";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      es: { translation: es },
      en: { translation: en },
    },
    lng: systemLanguage,
    fallbackLng: "es",
    interpolation: {
      escapeValue: false, // React already protects against XSS
    },
  });

export default i18n;
