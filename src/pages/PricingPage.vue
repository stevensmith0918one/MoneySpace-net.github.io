<template>
    <div id="bodyWrap">
      <Header/>
      <div class="pricigPageHeader">
        <div class="container">
          <div class="pricingBanner">
            <div class="pageCaption">
              <span class="subtitle">{{t('pricigPageHeader.subtitle', {}, {locale: locale})}}</span>
              <span class="title">{{t('pricigPageHeader.title', {}, {locale: locale})}}</span>
            </div>
          </div>
        </div>
      </div>
      <div class="pricingPageContent">
        <div class="container">
          <div class="calculator">
            <div class="calcForm">
              <div class="headBlock">
                <span class="title">{{t('pricingPageContent.calculator.title', {}, {locale: locale})}}</span>
              </div>
              <div class="formBlock">
                <form action="#">
                  <div class="fieldsWrap">
                    <div class="fieldItem">
                      <div class="inBlockType2">
                        <label for="amount1">{{t('pricingPageContent.calculator.fieldItem[0].amountLabel', {}, {locale: locale})}}</label>
                        <div class="inWrap">
                          <input type="text" name="amount1" id="amount1">
                        </div>
                      </div>
                    </div>
                    <div class="fieldItem">
                      <div class="inBlockType2">
                        <label for="amount2">{{t('pricingPageContent.calculator.fieldItem[1].amountLabel', {}, {locale: locale})}}</label>
                        <div class="inWrap">
                          <input type="text" name="amount2" id="amount2">
                        </div>
                      </div>
                    </div>
                  </div>
                  <button class="btnFillType2 full">{{t('pricingPageContent.calculator.calculate', {}, {locale: locale})}}</button>
                </form>
              </div>
            </div>
            <div class="calcInfo">
              <span class="info">{{t('pricingPageContent.calculator.calcInfo.info[0]', {}, {locale: locale})}}<br>
                {{t('pricingPageContent.calculator.calcInfo.info[1]', {}, {locale: locale})}}<br>
                {{t('pricingPageContent.calculator.calcInfo.info[2]', {}, {locale: locale})}}</span>
              <span class="note">{{t('pricingPageContent.calculator.calcInfo.note', {}, {locale: locale})}}</span>
            </div>
          </div>
          <div class="pricingInfo">
            <div class="titleContainer">
              <span class="subtitle">{{t('pricingPageContent.pricingInfo.subtitle', {}, {locale: locale})}}</span>
              <span class="title">{{t('pricingPageContent.pricingInfo.title', {}, {locale: locale})}}</span>
            </div>
            <div class="contentContainer">
              <div class="info">
                <div class="textBlock">
                  <p>{{t('pricingPageContent.pricingInfo.textBlock', {}, {locale: locale})}}</p>
                </div>
              </div>
              <div class="buttons">
                <a href="#" class="btnFillType4">{{t('pricingPageContent.pricingInfo.buttons[0]', {}, {locale: locale})}}</a>
                <a href="#" class="btnFillType5">{{t('pricingPageContent.pricingInfo.buttons[1]', {}, {locale: locale})}}</a>
              </div>
            </div>
          </div>
          <div class="tariffList">
            <div class="item">
              <div class="tariffItem">
                <span class="cost num">{{t('pricingPageContent.tariffList.item[0].cost', {}, {locale: locale})}}<span>
                  {{t('pricingPageContent.tariffList.item[0].constUnit', {}, {locale: locale})}}</span></span>
                <div class="info">
                  <p>{{t('pricingPageContent.tariffList.item[0].info', {}, {locale: locale})}}</p>
                </div>
              </div>
            </div>
            <div class="item">
              <div class="tariffItem">
                <span class="cost">{{t('pricingPageContent.tariffList.item[1].cost', {}, {locale: locale})}}</span>
                <div class="info">
                  <p>{{t('pricingPageContent.tariffList.item[1].info', {}, {locale: locale})}}</p>
                </div>
              </div>
            </div>
          </div>

          <div class="joinSection ">
            <div class="joinBlock lg">
              <div class="img">
                <img src="@/assets/img/image_2.jpg" alt="image">
              </div>
              <div class="info">
                            <span class="title sm">{{t('pricingPageContent.joinSection.title[0]', {}, {locale: locale})}}<br>
                                {{t('pricingPageContent.joinSection.title[1]', {}, {locale: locale})}}<br>
                                {{t('pricingPageContent.joinSection.title[2]', {}, {locale: locale})}}<br>
                            </span>
                <div class="content">
                  <div class="textBlock">
                    <p>{{t('pricingPageContent.joinSection.textBlock', {}, {locale: locale})}}</p>
                  </div>
                </div>
                <a href="#" class="btnIconType1 sm">
                                <span class="in">
                                    <span class="text">{{t('pricingPageContent.joinSection.text', {}, {locale: locale})}}</span>
                                    <span class="icon-arrow"></span>
                                </span>
                </a>
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
  components: {Header, Footer },
  name: 'PricingPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
