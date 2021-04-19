<template>
  <div id="bodyWrap">
    <Header/>
    <div class="container">
      <div class="paymentSection">
        <div class="wrapper">
          <div class="titleContainer">
            <span class="pageTitle">{{t('titleContainer.pageTitle[0]', {}, {locale: locale})}} <span>{{t('titleContainer.pageTitle[1]', {}, {locale: locale})}}</span></span>
          </div>
          <div class="contentContainer">
            <div class="info">
              <div class="textBlock">
                <p>{{t('contentContainer.textBlock', {}, {locale: locale})}}</p>
              </div>
            </div>
            <a href="#" class="btnIconType3">
              <span class="icon-arrow"></span>
              <span class="text">{{t('contentContainer.download', {}, {locale: locale})}}</span>
            </a>
            <div class="apiBlock">
              <span class="title">{{t('contentContainer.try', {}, {locale: locale})}}</span>
              <div class="codeBlock">
                <div class="headBlock">
                  <span>{{t('contentContainer.title', {}, {locale: locale})}}</span>
                </div>
                <div class="contentBlock">
<!--                  <p>&lt;<span class="tag">div</span> <span-->
<!--                      class="attr">id</span>="moneyspace-payment"<br>-->
<!--                    <span class="attr">template</span>="<Template style>"<br>-->
<!--                    <span class="attr">ms-title</span>="<Text on payment button>"<br>-->
<!--                    <span class="attr">ms-key</span>="<Key for payment received from transaction transaction id creation>"<br>-->
<!--                    <span class="attr">description</span>="<Show buyer information>-->
<!--                    "<br>-->
<!--                    <span class="attr">lang</span>="<Display language>"<br>-->
<!--                    <span class="attr">color</span>="<Customize button text color (default: #fff)<br>>"<br>-->
<!--                    <span class="attr">bgcolor</span>="< Customize-->
<!--                    button background color (default: #1d81f1)>"<br>-->
<!--                    /&gt;-->
<!--                  </p>-->
                  <button class="btnIconType4">
                    <span class="text">Run</span>
                  </button>
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
  name: 'PaymentPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
