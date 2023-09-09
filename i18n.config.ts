import de from '~/locales/de.json'
import en from '~/locales/en.json'

export default defineI18nConfig(() => ({
    legacy: false,
    locales: ['de', 'en'],
    defaultLocale: 'de',
    fallbackLocale: 'de',
    messages: {
        de,
        en
    }
}))
