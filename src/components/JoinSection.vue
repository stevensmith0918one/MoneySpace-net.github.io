<template>
    <div class="joinSection main">
        <div class="container">
            <div class="joinBlock">
                <div class="img dotsTop">
                    <img src="@/assets/img/image_1.jpg" alt="image">
                </div>
                <div class="info">
                    <span class="title lg">{{t('joinSection.title', {}, {locale: locale})}}</span>
                    <div class="content">
                        <div class="textBlock">
                            <p>{{t('joinSection.content', {}, {locale: locale})}}</p>
                        </div>
                    </div>
                    <a href="#" class="btnIconType1 sm">
                        <span class="in">
                            <span class="text">{{t('joinSection.start', {}, {locale: locale})}}</span>
                            <span class="icon-arrow"></span>
                        </span>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {useI18n} from "vue-i18n";

export default {
  name: 'JoinSection',
  setup() {
    const {t, locale} = useI18n();
    return {t, locale}
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
