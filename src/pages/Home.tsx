import { useTranslation } from 'react-i18next';

import { ELanguageResources } from '@/i18n';

export function Home() {
  const { t } = useTranslation(ELanguageResources.common);

  return <div>{t('home')}</div>;
}
