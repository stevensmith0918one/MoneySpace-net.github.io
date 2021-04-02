<template>
  <div id="bodyWrap">
    <Header/>
    <div class="container">
      <div class="paymentSection">
        <div class="wrapper">
          <div class="titleContainer">
            <span class="pageTitle">Online Payment <span>Gateway</span></span>
          </div>
          <div class="contentContainer">
            <div class="info">
              <div class="textBlock">
                <p>By just calling API for our payment gateway, your online merchant website will be
                  capable of receiving an online payment through credit cards. Our service
                  supports over 27 foreign currencies and enables your company to reach customers
                  across the globe.</p>
              </div>
            </div>
            <a href="#" class="btnIconType3">
              <span class="icon-arrow"></span>
              <span class="text">Download API Documentation</span>
            </a>
            <div class="apiBlock">
              <span class="title">Try moneyspace API</span>
              <div class="codeBlock">
                <div class="headBlock">
                  <span>Title:</span>
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

export default {
  components: {Header, Footer},
  name: 'PaymentPage'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
