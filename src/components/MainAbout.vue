<template>
    <div class="mainAbout">
        <div class="container">
            <div class="wrapper">
                <div class="left">
                    <div class="getLinkWrapper">
                        <div class="getLinkBlock animatedBlock">
                            <div class="field nameBlock">
                                <span class="param">{{t('mainAbout.left.productNameLabel')}}</span>
                                <span class="data name animated">{{t('mainAbout.left.productNameLabel')}}</span>
                            </div>
                            <div class="field priceBlock animated">
                                <span class="param">{{t('mainAbout.left.priceLabel')}}</span>
                                <span class="data price animated">{{t('mainAbout.left.priceValue')}}</span>
                            </div>
                            <div class="btnIconType2 animated">
                                <span class="text animated">
                                    <span class="animated">{{t('mainAbout.left.payLabel1')}}</span><span class="animated">{{t('mainAbout.left.payLabel2')}}</span><span
                                        class="animated">/</span><span class="animated">{{t('mainAbout.left.payValue')}}</span>
                                </span>
                                <span class="icon-arrow"></span>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="right">
                    <div class="titleContainer">
                        <span class="sectionTitle lg">{{t('mainAbout.right.title1')}}<br>{{t('mainAbout.right.title2')}}</span>
                    </div>
                    <div class="contentContainer">
                        <div class="textBlock">
                            <p>{{t('mainAbout.right.content')}}</p>
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
