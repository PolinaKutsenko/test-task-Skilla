import { I18nextProvider, initReactI18next } from 'react-i18next';
import i18n from 'i18next';

import ru from '../locales/ru.js';

const I18NextProvider = ({ children }) => {
  const i18nextInstance = i18n.createInstance();

  i18nextInstance.use(initReactI18next).init({
    lng: 'ru',
    debug: false,
    resources: {
      ru,
    },
    interpolation: {
      escapeValue: false,
    },
  });

  return (
    <I18nextProvider i18n={i18nextInstance}>
        {children}
    </I18nextProvider>
  );
}

export default I18NextProvider;
