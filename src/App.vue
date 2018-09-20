<template>
  <div id="app">
    <v-header></v-header>
    <router-view/>
    <v-footer></v-footer>
    <v-float></v-float>
  </div>
</template>

<script>
import VHeader from '@/components/Header/header'
import VFooter from '@/components/Footer/footer'
import VFloat from '@/components/Float/float'
import './style/sczx/comm.css'
import './style/sczx/comm-ml.css'
export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
    VFloat
  }
}
</script>

<style lang='less'>
@import './style/index.less';
</style>
