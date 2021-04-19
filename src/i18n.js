import {createI18n} from "vue-i18n";
import en from "./translations/en.json";
import th from "./translations/th.json";
import contactUsEn from "./translations/contactUsEn.json";
import contactUsTh from "./translations/contactUsTh.json";
import paymentLinkEn from "./translations/paymentLinkEn.json";
import paymentLinkTh from "./translations/paymentLinkTh.json";
import pricingEn from "./translations/pricingEn.json";
import pricingTh from "./translations/pricingTh.json";

const i18n = createI18n({
    messages: {
        en: Object.assign({}, en, contactUsEn, paymentLinkEn, pricingEn),
        th: Object.assign({}, th, contactUsTh, paymentLinkTh, pricingTh)
    },
    fallbackLocale: localStorage.getItem('locale') || 'th',
    locale: localStorage.getItem('locale') || 'th'
})

export default i18n;