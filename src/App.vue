<template>
  <div id="app">
    <Header></Header>
    <!-- 路由组件显示 -->
    <router-view></router-view>
    <!-- 在home search 显示 ，在登录 注册时隐藏 -->
    <Footer v-show="$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'

export default {
  name: 'App',
  components: {
    Header,Footer
  }
}
</script>

<style>

</style>
