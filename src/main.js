import Vue from 'vue'
import App from './App.vue'

// 引入路由
import router from '@/router'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  // 注册路由信息 组件身上带有 @route  @router 属性
  // 不管是否是路由组件
  router
}).$mount('#app')
