import {createI18n} from "vue-i18n";
import en from "./translations/en.json";
import th from "./translations/th.json";

const i18n = createI18n({
    messages: {
        en: en,
        th: th
    },
    fallbackLocale: localStorage.getItem('locale') || 'th',
    locale: localStorage.getItem('locale') || th
})

export default i18n;