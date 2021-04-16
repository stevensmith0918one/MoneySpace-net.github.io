<template>
    <div class="startSection">
      <Header/>
        <div class="container">
            <div class="mainBanner">
                <div class="wrapper">
                    <div class="left">
                        <div class="bannerInfo">
                            <span class="slogan">{{t('slogan1', {}, {locale: locale})}}</span>
                            <p>{{t('slogan2', {}, {locale: locale})}}</p>
                            <a href="#" class="btnIconType1">
                                <span class="in">
                                    <span class="text">{{t('startSection.signup', {}, {locale: locale})}}</span>
                                    <span class="icon-arrow"></span>
                                </span>
                            </a>
                        </div>
                        <ul class="partnersList">
                            <li><img src="@/assets/img/partner_1_2x.png" alt="partner"></li>
                            <li><img src="@/assets/img/partner_2_2x.png" alt="partner"></li>
                            <li><img src="@/assets/img/partner_3_2x.png" alt="partner"></li>
                            <li><img src="@/assets/img/partner_4_2x.png" alt="partner"></li>
                        </ul>
                    </div>
                    <div class="right">
                        <div class="createLinkAnimation animated">
                            <div class="animationWrapper animated">
                                <div class="createLinkForm animated">
                                    <div class="headBlock">
                                        <span class="title">{{t('startSection.createLinkForm.title', {}, {locale: locale})}}</span>
                                        <span class="subtitle">{{t('startSection.createLinkForm.subtitle', {}, {locale: locale})}}</span>
                                    </div>
                                    <div class="formBlock">
                                        <div class="fieldWrap">
                                            <div class="fieldItem">
                                                <div class="inBlockType1">
                                                    <span class="label">{{t('startSection.createLinkForm.proServiceLabel', {}, {locale: locale})}}</span>
                                                    <div class="inWrap">
                                                        <div class="input">
                                                            <span class="typingText product animated">{{t('startSection.createLinkForm.proServiceValue', {}, {locale: locale})}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="fieldItem">
                                                <div class="inBlockType1">
                                                    <span class="label">{{t('startSection.createLinkForm.amountLabel', {}, {locale: locale})}}</span>
                                                    <div class="inWrap">
                                                        <div class="input">
                                                            <span class="typingText sum animated">{{t('startSection.createLinkForm.amountValue', {}, {locale: locale})}}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkWrap">
                                            <div class="checkBtn">
                                                <input type="checkbox" name="card" id="card">
                                                <label for="card">{{t('startSection.createLinkForm.card', {}, {locale: locale})}}</label>
                                            </div>
                                        </div>
                                        <span class="btnFillType2 full">{{t('startSection.createLinkForm.submit', {}, {locale: locale})}}</span>
                                    </div>
                                </div>
                                <div class="createLinkCard animated">
                                    <div class="img">
                                        <img src="@/assets/img/product_image.png" alt="product image">
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <span class="title">{{t('startSection.createLinkCard.title', {}, {locale: locale})}}</span>
                                            <span class="cost">{{t('startSection.createLinkCard.cost', {}, {locale: locale})}}</span>
                                        </div>
                                        <div class="button">
                                            <button class="btnIconType7">
                                                <img src="@/assets/img/logo.png" alt="logo" class="icon">
                                                <span class="text">{{t('startSection.createLinkCard.pay', {}, {locale: locale})}}</span>
                                            </button>
                                            <button class="btnIconType7 dark animated">
                                                <img src="@/assets/img/logo_3.png" alt="logo" class="icon">
                                                <span class="text">{{t('startSection.createLinkCard.pay', {}, {locale: locale})}}</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="createLinkPayForm animated">
                                    <div class="paymentForm">
                                        <div class="headBlock">
                                            <div class="formTitle">{{t('startSection.createLinkPayForm.checkout', {}, {locale: locale})}}</div>
                                            <div class="siteLogo2">
                                                <img src="@/assets/img/logo.png" alt="logo">
                                                <div class="data">
                                                    <span class="subtitle">{{t('startSection.createLinkPayForm.subTitle', {}, {locale: locale})}}</span>
                                                    <span class="title">{{t('startSection.createLinkPayForm.title', {}, {locale: locale})}}</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formBlock">
                                            <div class="fieldsWrap">
                                                <div class="fieldItem">
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">{{t('startSection.createLinkPayForm.cardNoLabel', {}, {locale: locale})}}</span>
                                                            <div class="inWrap">
                                                                <div class="input">
                                                                    <span class="fadingText animated">{{t('startSection.createLinkPayForm.cardNoValue', {}, {locale: locale})}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fieldItem">
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">{{t('startSection.createLinkPayForm.expDateLabel', {}, {locale: locale})}}</span>
                                                            <div class="inWrap comb">
                                                                <div class="input">
                                                                    <span class="fadingText animated">{{t('startSection.createLinkPayForm.expDateValue1', {}, {locale: locale})}}</span>
                                                                </div>
                                                                <div class="input">
                                                                    <span class="fadingText animated">{{t('startSection.createLinkPayForm.expDateValue2', {}, {locale: locale})}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">{{t('startSection.createLinkPayForm.cvcLabel', {}, {locale: locale})}}</span>
                                                            <div class="inWrap">
                                                                <div class="input">
                                                                    <span class="fadingText animated">{{t('startSection.createLinkPayForm.cvcValue', {}, {locale: locale})}}</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkWrap">
                                                <div class="checkBtn">
                                                    <input type="checkbox" name="card" id="card">
                                                    <label for="card">{{t('startSection.createLinkPayForm.card', {}, {locale: locale})}}</label>
                                                </div>
                                            </div>
                                            <button class="btnFillType2 full upp">{{t('startSection.createLinkPayForm.submit', {}, {locale: locale})}}</button>
                                        </div>
                                    </div>
                                </div>
                              <transition>
                                <div class="createLinkPayCard animated">
                                  <img src="@/assets/img/card.png" alt="card">
                                </div>
                              </transition>

                                <div class="createLinkResult animated">
                                    <div class="icon"><img src="@/assets/img/done.svg" alt="done"></div>
                                    <span class="text">{{t('startSection.createLinkPayForm.way', {}, {locale: locale})}}</span>
                                </div>
                                <div class="overlay"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import Header from "./Header";
import {useI18n} from "vue-i18n";
export default {
  name: 'StartSection',
  components: {Header},
  props: {
    msg: String
  },
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  },
  methods: {
    setLocale(locale) {
      this.locale = locale;
      localStorage.setItem('locale', locale);
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
