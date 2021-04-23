<template>
    <footer>
        <div class="container">
            <div class="wrapper">
                <div class="col">
                    <div class="footMenu">
                        <span class="title">{{t('footer.productArea.title', {}, {locale: locale})}}</span>
                        <ul>
                            <li><a href="#">{{t('footer.productArea.products[0]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.productArea.products[1]', {}, {locale: locale})}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="footMenu">
                        <span class="title">{{t('footer.featureArea.title', {}, {locale: locale})}}</span>
                        <ul>
                            <li><a href="#">{{t('footer.featureArea.features[0]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.featureArea.features[1]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.featureArea.features[2]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.featureArea.features[3]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.featureArea.features[4]', {}, {locale: locale})}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="footMenu">
                        <span class="title">{{t('footer.moneySpaceArea.title', {}, {locale: locale})}}</span>
                        <ul>
                            <li><a href="#">{{t('footer.moneySpaceArea.moneySpaces[0]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.moneySpaceArea.moneySpaces[1]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.moneySpaceArea.moneySpaces[2]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.moneySpaceArea.moneySpaces[3]', {}, {locale: locale})}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="col">
                    <div class="footMenu">
                        <span class="title">{{t('footer.faqArea.title', {}, {locale: locale})}}</span>
                        <ul>
                            <li><a href="/#/businesses">{{t('footer.faqArea.faqs[0]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.faqArea.faqs[1]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.faqArea.faqs[2]', {}, {locale: locale})}}</a></li>
                            <li><a href="#">{{t('footer.faqArea.faqs[3]', {}, {locale: locale})}}</a></li>
                        </ul>
                    </div>
                </div>
                <div class="langBlock invert">
                    <div class="head">
                        <div class="in">
                            <img src="@/assets/img/eng.png" alt="eng" class="lang">
                            <img src="@/assets/img/arrow.svg" alt="arrow" class="arr">
                        </div>
                    </div>
                    <div class="list">
                        <div class="in">
                            <a href="#">
                                <img src="@/assets/img/thai.png" alt="thai" class="lang">
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'Footer',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
