import { useContext } from 'react';

import { useTranslation } from 'react-i18next';

import { ELanguageResources } from '@/i18n';
import { ThemeContext } from '@/providers';

export function Home() {
  const { t } = useTranslation(ELanguageResources.common);
  const theme = useContext(ThemeContext);

  return (
    <div>
      {t('home')}
      <button
        type="button"
        onClick={theme.toggleTheme}
      >
        Toggle Theme
      </button>
    </div>
  );
}
