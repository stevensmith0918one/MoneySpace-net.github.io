<template>
  <div id="bodyWrap">
    <Header/>
    <div class="container">
      <div class="contactBlock">
        <div class="wrapper">
          <div class="left">
            <div class="titleContainer">
              <span class="pageTitle">{{t('pageTitle', {}, {locale: locale})}}</span>
              <span class="pageSubtitle">Money space (Pay enterprise co.,ltd)</span>
            </div>
            <div class="contentContainer">
              <div class="timingBlock">
                <span class="title">{{t('contentContainer.title', {}, {locale: locale})}}</span>
                <span class="data">{{t('contentContainer.data', {}, {locale: locale})}}</span>
              </div>
              <ul class="contactsList">
                <li>
                  <a href="mailto:th@moneyspace.net">
                    <img src="@/assets/img/mail.svg" alt="mail" class="icon">
                    <span class="data">{{t('contactsList[0]', {}, {locale: locale})}}</span>
                  </a>
                </li>
                <li>
                  <a href="tel:021070364 ">
                    <img src="@/assets/img/phone.svg" alt="phone" class="icon">
                    <span class="data">{{t('contactsList[1]', {}, {locale: locale})}}</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div class="right">
            <div class="mapWrapper">
              <div class="mapBlock">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.714213689474!2d100.56133511483033!3d13.735744490357867!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30e29efd295efcf3%3A0x4ca047bcbe11ce24!2zU29pIFN1a2h1bXZpdCAyNSwgS3J1bmcgVGhlcCBNYWhhIE5ha2hvbiAxMDExMCwg0KLQsNC40LvQsNC90LQ!5e0!3m2!1sru!2sby!4v1601449484351!5m2!1sru!2sby"
                    frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false"
                    tabindex="0"></iframe>
              </div>
              <div class="locationBlock">
                <div class="title">
                  <img src="@/assets/img/location.svg" alt="location" class="icon">
                  <span class="data">{{t('locationBlock.title', {}, {locale: locale})}}</span>
                </div>
                <div class="content">
                  <p>{{t('locationBlock.content', {}, {locale: locale})}}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>
</template>


<script>
import Footer from '@/components/Footer'
import Header from "@/components/Header";
import {useI18n} from "vue-i18n";

export default {
  components: {Header, Footer},
  name: 'ContactUsPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
