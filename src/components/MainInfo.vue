<template>
    <div class="mainInfo">
        <div class="container">
            <div class="wrapper">
                <div class="titleContainer">
                    <span class="sectionTitle md">{{t('mainInfo.title', {}, {locale: locale})}}</span>
                </div>
                <div class="contentContainer">
                    <div class="infoBlock">
                        <div class="item">
                            <div class="textBlock lg">
                                <p>{{t('mainInfo.content.item1.value', {}, {locale: locale})}}</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="textBlock lg">
                                <span class="title">{{t('mainInfo.content.item2.label', {}, {locale: locale})}}</span>
                                <p>{{t('mainInfo.content.item2.value', {}, {locale: locale})}}</p>
                            </div>
                        </div>
                    </div>
                    <ul class="securityList">
                        <li>
                            <img src="@/assets/img/security_1.png" alt="secutity">
                            <span>{{t('mainInfo.security1', {}, {locale: locale})}}</span>
                        </li>
                        <li>
                            <img src="@/assets/img/security_2.png" alt="secutity">
                            <span>{{t('mainInfo.security2', {}, {locale: locale})}}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="{ apiImg: isActive(), animatedBlock: isActive() }">
            <div class="circleWrap">
                <div class="circle animated">
                    <span class="text animated">{{t('mainInfo.animation.website', {}, {locale: locale})}}</span>
                </div>
                <div class="circle animated">
                    <span class="text animated">{{t('mainInfo.animation.payment', {}, {locale: locale})}}</span>
                </div>
            </div>
            <div class="overlay animated"></div>
            <span class="text animated">{{t('mainInfo.animation.api', {}, {locale: locale})}}</span>
            <img src="@/assets/img/check.svg" alt="check" class="icon animated">
        </div>
    </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'MainInfo',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  },
  data: function() {
  return {
      scrollPosition: null,
      screenWidth: null
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY;
      this.screenWidth = document.scrollingElement.clientWidth;
    },
    isActive() {
      switch(true) {
        case (this.screenWidth < 751):
          return this.scrollPosition > 2586;
        case (this.screenWidth < 975):
          return this.scrollPosition > 1900;
        case (this.screenWidth < 1183):
          //TODO use exact scroll position after fix unexpected element appearing in bottom left
          return this.scrollPosition > 1478;
        default:
          return this.scrollPosition > 2000
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
