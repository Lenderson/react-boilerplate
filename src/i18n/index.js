import i18n from 'i18n-js'

import ptBR from './locales/ptBR'

i18n.defaultLocale = 'pt-br'
i18n.locale = 'pt-br'
i18n.fallbacks = true
i18n.translations = {
  'pt-br': ptBR,
}

export default i18n
