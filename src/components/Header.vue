<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <div class="logoWrapper">
          <div class="siteLogo">
            <img src="@/assets/img/logo.png" alt="logo">
            <span>{{t('header.logo', {}, {locale: locale})}}</span>
            <a href="#/">main</a>
          </div>
        </div>
        <div class="menuWrapper menuSm">
          <div class="inner">
            <span class="icon-close close closeMenuBtn"></span>
            <span class="menuTitleSm">Menu</span>
            <nav>
              <ul class="menuList">
                <li><a href="#/payment">{{t('header.nav.payment', {}, {locale: locale})}}</a></li>
                <li><a href="#/pricing">{{t('header.nav.pricing', {}, {locale: locale})}}</a></li>
                <li><a href="#/contact-us">{{t('header.nav.contact-us', {}, {locale: locale})}}</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="langBlock">
          <div class="head">
            <div class="in">
              <img @click="setLocale('th')" src="@/assets/img/thai.png" alt="eng" class="lang">
              <img @click="showSecondLangBlock(true)" src="@/assets/img/arrow.svg" alt="arrow" class="arr">
            </div>
          </div>
          <div class="list" :class="{ showSecondLangBlockCSS: arrowClicked }">
            <div class="in">
              <a href="#">
                <img @click="setLocale('en')" src="@/assets/img/eng.png" alt="thai" class="lang">
              </a>
            </div>
          </div>
        </div>
        <a href="#" class="btnFillType1">{{t('header.signup', {}, {locale: locale})}}</a>
        <a href="#" class="siteLink loginSm">Sign Up</a>
        <div class="openMenuBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'Header',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  },
  data() {
    return {
      arrowClicked: false
    }
  },
  methods: {
    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem('locale', locale);
      this.showSecondLangBlock(false);
    },
    showSecondLangBlock(arrowClicked) {
      this.arrowClicked = arrowClicked;
    },
    isArrowClicked() {
      return this.arrowClicked;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.showSecondLangBlockCSS {
  display: block !important;
}
</style>
