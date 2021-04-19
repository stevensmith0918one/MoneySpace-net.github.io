import {createI18n} from "vue-i18n";
import homeEn from "./translations/HomeEn.json";
import homeTh from "./translations/HomeTh.json";
import contactUsEn from "./translations/contactUsEn.json";
import contactUsTh from "./translations/contactUsTh.json";
import paymentLinkEn from "./translations/paymentLinkEn.json";
import paymentLinkTh from "./translations/paymentLinkTh.json";
import pricingEn from "./translations/pricingEn.json";
import pricingTh from "./translations/pricingTh.json";

const i18n = createI18n({
    messages: {
        en: Object.assign({}, homeEn, contactUsEn, paymentLinkEn, pricingEn),
        th: Object.assign({}, homeTh, contactUsTh, paymentLinkTh, pricingTh)
    },
    fallbackLocale: localStorage.getItem('locale') || 'th',
    locale: localStorage.getItem('locale') || 'th'
})

export default i18n;