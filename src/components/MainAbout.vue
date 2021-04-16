<template>
    <div class="mainAbout">
        <div class="container">
            <div class="wrapper">
                <div class="left">
                    <div class="getLinkWrapper">
                        <div class="getLinkBlock animatedBlock">
                            <div class="field nameBlock">
                                <span class="param">{{t('mainAbout.left.productNameLabel', {}, {locale: locale})}}</span>
                                <span class="data name animated">{{t('mainAbout.left.productNameLabel', {}, {locale: locale})}}</span>
                            </div>
                            <div class="field priceBlock animated">
                                <span class="param">{{t('mainAbout.left.priceLabel', {}, {locale: locale})}}</span>
                                <span class="data price animated">{{t('mainAbout.left.priceValue', {}, {locale: locale})}}</span>
                            </div>
                            <div class="btnIconType2 animated">
                                <span class="text animated">
                                    <span class="animated">{{t('mainAbout.left.payLabel1', {}, {locale: locale})}}</span><span class="animated">{{t('mainAbout.left.payLabel2', {}, {locale: locale})}}</span><span
                                        class="animated">/</span><span class="animated">{{t('mainAbout.left.payValue', {}, {locale: locale})}}</span>
                                </span>
                                <span class="icon-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="titleContainer">
                        <span class="sectionTitle lg">{{t('mainAbout.right.title1', {}, {locale: locale})}}<br>{{t('mainAbout.right.title2', {}, {locale: locale})}}</span>
                    </div>
                    <div class="contentContainer">
                        <div class="textBlock">
                            <p>{{t('mainAbout.right.content', {}, {locale: locale})}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'MainAbout',
  props: {
    msg: String
  },
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
