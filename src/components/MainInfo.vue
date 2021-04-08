<template>
    <div class="mainInfo">
        <div class="container">
            <div class="wrapper">
                <div class="titleContainer">
                    <span class="sectionTitle md">Simple API</span>
                </div>
                <div class="contentContainer">
                    <div class="infoBlock">
                        <div class="item">
                            <div class="textBlock lg">
                                <p>If you own a website, whether a shopping cart platform, or custom developed
                                    using
                                    web platform, our plugins are easy to integrate!</p>
                            </div>
                        </div>
                        <div class="item">
                            <div class="textBlock lg">
                                <span class="title">Safe and Secure</span>
                                <p>Our industry-leading technology protects your money and guarantees it arrives
                                    safely every time. We’re licensed by government regulators around the world,
                                    so
                                    you can be sure we meet the highest possible standards</p>
                            </div>
                        </div>
                    </div>
                    <ul class="securityList">
                        <li>
                            <img src="@/assets/img/security_1.png" alt="secutity">
                            <span>PCI DSS </span>
                        </li>
                        <li>
                            <img src="@/assets/img/security_2.png" alt="secutity">
                            <span>Bank of Thailand</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <div :class="{ apiImg: isActive(), animatedBlock: isActive() }">
            <div class="circleWrap">
                <div class="circle animated">
                    <span class="text animated">Webiste</span>
                </div>
                <div class="circle animated">
                    <span class="text animated">Payment</span>
                </div>
            </div>
            <div class="overlay animated"></div>
            <span class="text animated">API</span>
            <img src="@/assets/img/check.svg" alt="check" class="icon animated">
        </div>
    </div>
</template>

<script>
export default {
  name: 'MainInfo',
  data: function() {
  return {
      scrollPosition: null
    };
  },
  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },
  unmounted () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods: {
    handleScroll () {
      this.scrollPosition = window.scrollY
    },
    isActive() {
      return this.scrollPosition > 2000;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
