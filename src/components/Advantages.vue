<template>
    <div class="advantages">
        <div class="container">
            <div class="wrapper">
                <div class="advantagesList">
                    <div class="item">
                        <div class="advantagesItem type1">
                            <div class="img">
                                <img src="@/assets/img/advantage_1.svg" alt="advantage">
                            </div>
                            <span class="title">{{t('advantages.item1.title1', {}, {locale: locale})}}<br>{{t('advantages.item1.title2', {}, {locale: locale})}}</span>
                            <p>{{t('advantages.item1.content', {}, {locale: locale})}}</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="advantagesItem type2">
                            <div class="img">
                                <img src="@/assets/img/advantage_2.svg" alt="advantage">
                            </div>
                            <span class="title">{{t('advantages.item2.title1', {}, {locale: locale})}}<br>{{t('advantages.item2.title2', {}, {locale: locale})}}</span>
                            <p>{{t('advantages.item2.content', {}, {locale: locale})}}</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="advantagesItem type3">
                            <div class="img">
                                <img src="@/assets/img/advantage_3.svg" alt="advantage">
                            </div>
                            <span class="title">{{t('advantages.item3.title1', {}, {locale: locale})}}<br>{{t('advantages.item3.title2', {}, {locale: locale})}}</span>
                            <p>{{t('advantages.item3.content', {}, {locale: locale})}}</p>
                        </div>
                    </div>
                    <div class="item">
                        <div class="advantagesItem type4">
                            <div class="img">
                                <img src="@/assets/img/advantage_4.svg" alt="advantage">
                            </div>
                            <span class="title">{{t('advantages.item4.title1', {}, {locale: locale})}}<br>{{t('advantages.item4.title2', {}, {locale: locale})}}</span>
                            <p>{{t('advantages.item4.content', {}, {locale: locale})}}</p>
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
  name: 'Advantages',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
