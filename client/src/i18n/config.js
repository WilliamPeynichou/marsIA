import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  fr: {
    translation: {
      "opener": {
        "start": "Début des inscriptions",
        "subtitle": "Festival de courts-métrages IA",
        "cta": "Participer maintenant"
      },
      "nav": {
        "home": "Accueil",
        "catalogue": "Films",
        "submit": "Soumettre",
        "jury": "Jury",
        "profile": "Profil"
      },
      "submit": {
        "title": "Soumettre un film",
        "step1": "Informations",
        "step2": "Fiche IA",
        "step3": "Médias",
        "continue": "Continuer",
        "back": "Retour",
        "submit": "Soumettre"
      },
      "catalogue": {
        "title": "Catalogue",
        "films": "films",
        "filters": "Filtres",
        "category": "Catégorie",
        "country": "Pays",
        "tools": "Outils IA"
      },
      "profile": {
        "title": "Mon Profil",
        "submissions": "Mes films",
        "settings": "Paramètres",
        "logout": "Se déconnecter"
      }
    }
  },
  en: {
    translation: {
      "opener": {
        "start": "Applications open",
        "subtitle": "AI Short Film Festival",
        "cta": "Participate now"
      },
      "nav": {
        "home": "Home",
        "catalogue": "Films",
        "submit": "Submit",
        "jury": "Jury",
        "profile": "Profile"
      },
      "submit": {
        "title": "Submit a film",
        "step1": "Information",
        "step2": "AI Sheet",
        "step3": "Media",
        "continue": "Continue",
        "back": "Back",
        "submit": "Submit"
      },
      "catalogue": {
        "title": "Catalogue",
        "films": "films",
        "filters": "Filters",
        "category": "Category",
        "country": "Country",
        "tools": "AI Tools"
      },
      "profile": {
        "title": "My Profile",
        "submissions": "My films",
        "settings": "Settings",
        "logout": "Logout"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "fr",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;
