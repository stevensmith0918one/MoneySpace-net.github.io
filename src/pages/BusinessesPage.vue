<template>
    <div id="bodyWrap">
      <Header/>
      <div class="businessSection">
        <div class="container">
          <div class="businessBlock">
            <div class="wrapper">
              <div class="titleBlock">
                <span class="title">{{t('businessSection.subtitle')}}</span>
                <span class="subtitle">{{t('businessSection.title')}}</span>
              </div>
              <div class="contentBlock">
                <ul class="listTempl1">
                  <li>
                    <span class="num">{{t('businessSection.contentBlock[0].id')}}</span>
                    {{t('businessSection.contentBlock[0].value')}}
                  </li>
                  <li>
                    <span class="num">{{t('businessSection.contentBlock[1].id')}}</span>
                    {{t('businessSection.contentBlock[1].value')}}
                  </li>
                  <li>
                    <span class="num">{{t('businessSection.contentBlock[2].id')}}</span>
                    {{t('businessSection.contentBlock[2].value')}}
                  </li>
                  <li>
                    <span class="num">{{t('businessSection.contentBlock[3].id')}}</span>
                    {{t('businessSection.contentBlock[3].value')}}
                  </li>
                </ul>
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
  name: 'BusinessPage',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
