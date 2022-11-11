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
  },
  mounted() {
    // 通知 vuex 发请求 存储于仓库中
    // 定义在根组件 请求只会发一次  避免重复多次向服务器请求数据
    this.$store.dispatch("categoryList");
  }
}
</script>

<style>

</style>
