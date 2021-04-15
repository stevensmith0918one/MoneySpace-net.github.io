<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <div class="logoWrapper">
          <div class="siteLogo">
            <img src="@/assets/img/logo.png" alt="logo">
            <span>money space</span>
            <a href="#/">main</a>
          </div>
        </div>
        <div class="menuWrapper menuSm">
          <div class="inner">
            <span class="icon-close close closeMenuBtn"></span>
            <span class="menuTitleSm">Menu</span>
            <nav>
              <ul class="menuList">
                <li><a href="#/payment">Payment Links</a></li>
                <li><a href="#/pricing">Pricing & Plans</a></li>
                <li><a href="#/contact-us">Contact Us</a></li>
              </ul>
              <div class="langBlock sm">
                <div class="title">Language</div>
                <div class="head">
                  <div class="in">
                    <img src="@/assets/img/eng.png" alt="eng" class="lang">
                    <span class="text">English</span>
                    <img src="@/assets/img/arrow_right.svg" alt="arrow" class="arr">
                  </div>
                </div>
                <div class="list">
                  <div class="in">
                    <a href="#">
                      <img src="@/assets/img/thai.png" alt="thai" class="lang">
                      <span class="text">Thai</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="right">
        <nav class="langBlock">
<!--          <div class="head">-->
          <ul>
            <li class="in">
              <img @click="setLocale('th')" src="@/assets/img/thai.png" alt="thai" class="lang">
              <img src="@/assets/img/arrow.svg" alt="arrow" class="arr">
            </li>
<!--          </div>-->
<!--          <div class="list">-->
            <li class="in">
              <img @click="setLocale('en')" src="@/assets/img/eng.png" alt="eng" class="lang">
            </li>
          </ul>
<!--          </div>-->
        </nav>
        <a href="#" class="btnFillType1">{{t('signup', {}, {locale: locale})}}</a>
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
  methods: {
    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem('locale', locale);
    }
  },
  data() {
    return {
      languages: [
        { flag: 'us', language: 'en', title: 'English' },
        { flag: 'th', language: 'th', title: 'Thailand' }
      ],
      lang: 'en'
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
