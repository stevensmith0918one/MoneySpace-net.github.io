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
                                    <span class="text">Signup</span>
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
                                        <span class="title">Create payment link</span>
                                        <span class="subtitle">You can set details and send links to your
                                            customers.</span>
                                    </div>
                                    <div class="formBlock">
                                        <div class="fieldWrap">
                                            <div class="fieldItem">
                                                <div class="inBlockType1">
                                                    <span class="label">Prouduct / Service Name:</span>
                                                    <div class="inWrap">
                                                        <div class="input">
                                                            <span class="typingText product animated">iPhone 8 / 32gb</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="fieldItem">
                                                <div class="inBlockType1">
                                                    <span class="label">Amount ( ฿ )</span>
                                                    <div class="inWrap">
                                                        <div class="input">
                                                            <span class="typingText sum animated">25,000</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="checkWrap">
                                            <div class="checkBtn">
                                                <input type="checkbox" name="card" id="card">
                                                <label for="card">Credit / Debit Card</label>
                                            </div>
                                        </div>
                                        <span class="btnFillType2 full">Create Payment Link</span>
                                    </div>
                                </div>
                                <div class="createLinkCard animated">
                                    <div class="img">
                                        <img src="@/assets/img/product_image.png" alt="product image">
                                    </div>
                                    <div class="content">
                                        <div class="info">
                                            <span class="title">iPhone 8 / 32gb</span>
                                            <span class="cost">$25,000</span>
                                        </div>
                                        <div class="button">
                                            <button class="btnIconType7">
                                                <img src="@/assets/img/logo.png" alt="logo" class="icon">
                                                <span class="text">Pay</span>
                                            </button>
                                            <button class="btnIconType7 dark animated">
                                                <img src="@/assets/img/logo_3.png" alt="logo" class="icon">
                                                <span class="text">Pay</span>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div class="createLinkPayForm animated">
                                    <div class="paymentForm">
                                        <div class="headBlock">
                                            <div class="formTitle">Checkout</div>
                                            <div class="siteLogo2">
                                                <img src="@/assets/img/logo.png" alt="logo">
                                                <div class="data">
                                                    <span class="subtitle">powered by </span>
                                                    <span class="title">money space</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="formBlock">
                                            <div class="fieldsWrap">
                                                <div class="fieldItem">
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">Card Number </span>
                                                            <div class="inWrap">
                                                                <div class="input">
                                                                    <span class="fadingText animated">1123 2000 3200
                                                                        2391</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="fieldItem">
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">Exp Date</span>
                                                            <div class="inWrap comb">
                                                                <div class="input">
                                                                    <span class="fadingText animated">08</span>
                                                                </div>
                                                                <div class="input">
                                                                    <span class="fadingText animated">2020</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div class="col">
                                                        <div class="inBlockType1">
                                                            <span class="label">CVC</span>
                                                            <div class="inWrap">
                                                                <div class="input">
                                                                    <span class="fadingText animated">032</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="checkWrap">
                                                <div class="checkBtn">
                                                    <input type="checkbox" name="card" id="card">
                                                    <label for="card">Credit / Debit Card</label>
                                                </div>
                                            </div>
                                            <button class="btnFillType2 full upp">PAY NOW</button>
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
                                    <span class="text">On your way</span>
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
