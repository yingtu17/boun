import { createI18n } from 'vue-i18n'
import en from './en.json'
import de from './de.json'
import fr from './fr.json'
import pt from './pt.json'
import zh from './zh.json'
import zht from './zht.json'
import ja from './ja.json'
import ko from './ko.json'
import hi from './hi.json'
import id from './id.json'
import th from './th.json'
import vi from './vi.json'

const i18n = createI18n({
  legacy: false,
  locale: 'zh',
  fallbackLocale: 'en',
  messages: {
    en,
    de,
    fr,
    pt,
    zh,
    zht,
    ja,
    ko,
    hi,
    id,
    th,
    vi
  }
})

export default i18n
