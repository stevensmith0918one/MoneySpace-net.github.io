import {createI18n} from "vue-i18n";
import en from "./translations/en.json";
import th from "./translations/th.json";
import contactUsEn from "./translations/contactUsEn.json";
import contactUsTh from "./translations/contactUsTh.json";

const i18n = createI18n({
    messages: {
        en: Object.assign({}, en, contactUsEn),
        th: Object.assign({}, th, contactUsTh)
    },
    fallbackLocale: localStorage.getItem('locale') || 'th',
    locale: localStorage.getItem('locale') || 'th'
})

export default i18n;