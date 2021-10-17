import { config } from '@vue/test-utils'
import i18n from './src/plugins/i18n.js'

const locale = 'fr'

config.mocks.$t = (msg) => i18n.messages[locale][msg]
