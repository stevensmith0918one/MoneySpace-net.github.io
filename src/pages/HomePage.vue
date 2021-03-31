<template>
    <div id="bodyWrap">
        <StartSection/>
        <MainAbout/>
        <Advantages/>
        <MainInfo/>
        <JoinSection/>
        <Footer/>
    </div>
</template>


<script>
import StartSection from  '@/components/StartSection'
import MainAbout from '@/components/MainAbout'
import Advantages from '@/components/Advantages'
import MainInfo from '@/components/MainInfo'
import JoinSection from '@/components/JoinSection'
import Footer from '@/components/Footer'

export default {
  components: { StartSection, MainAbout, Advantages, MainInfo, JoinSection, Footer },
  name: 'HomePage',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
