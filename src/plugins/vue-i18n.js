import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

const messages = {
    tr:{
        example:'Örnek'
    },
    en:{
        example:'example'
    }
}

const i18 = new VueI18n({
    locale: 'tr',
    fallbackLocale: 'tr',
    messages
})

export default i18
