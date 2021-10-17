import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
  en: {
    helloWorld: 'Hello world!'
  },
  de: {
    helloWorld: 'Hallo Welt!'
  },
  fr: {
    helloWorld: 'Bonjour le monde!'
  }
}

const i18n = new VueI18n({
  locale: 'en', // set locale
  fallbackLocale: 'de', // set fallback locale
  messages // set locale messages
})

export default i18n
