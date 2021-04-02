<template>
  <header>
    <div class="wrapper">
      <div class="left">
        <div class="logoWrapper">
          <div class="siteLogo">
            <img src="@/assets/img/logo.png" alt="logo">
            <span>money space</span>
            <a href="#/home">main</a>
          </div>
        </div>
        <div class="menuWrapper menuSm">
          <div class="inner">
            <span class="icon-close close closeMenuBtn"></span>
            <span class="menuTitleSm">Menu</span>
            <nav>
              <ul class="menuList">
                <li><a href="#">Payment Links</a></li>
                <li><a href="#/pricing">Pricing & Plans</a></li>
                <li><a href="#">Contact Us</a></li>
              </ul>
              <div class="langBlock sm">
                <div class="title">Language</div>
                <div class="head">
                  <div class="in">
                    <img src="@/assets/img/eng.png" alt="eng" class="lang">
                    <span class="text">English</span>
                    <img src="@/assets/img/arrow_right.svg" alt="arrow" class="arr">
                  </div>
                </div>
                <div class="list">
                  <div class="in">
                    <a href="#">
                      <img src="@/assets/img/thai.png" alt="thai" class="lang">
                      <span class="text">Thai</span>
                    </a>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="langBlock">
          <div class="head">
            <div class="in">
              <img src="@/assets/img/eng.png" alt="eng" class="lang">
              <img src="@/assets/img/arrow.svg" alt="arrow" class="arr">
            </div>
          </div>
          <div class="list">
            <div class="in">
              <a href="#">
                <img src="@/assets/img/thai.png" alt="thai" class="lang">
              </a>
            </div>
          </div>
        </div>
        <a href="#" class="btnFillType1">Signup</a>
        <a href="#" class="siteLink loginSm">Sign Up</a>
        <div class="openMenuBtn">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
