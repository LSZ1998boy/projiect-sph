import Vue from 'vue'
import App from './App.vue'
// 三级联动组件  --注册为全局组件
import TypeNav from '@/components/TypeNav'
// 第一个参数：全局组件的名字 第二个参数： 哪一个组件
Vue.component(TypeNav.name, TypeNav)
// 引入路由
import router from '@/router'
// 引入仓库
import store from '@/store'
// 引入轮播图的包
import 'swiper/css/swiper.css'

// 测试
// import {reqCategoryList} from '@/api'
// reqCategoryList()

// 引入 mockserver.js ------- 虚拟数据
//  引入后 会自动执行一次
import '@/mock/mockServer'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  // 注册路由
  // 注册路由信息 组件身上带有 @route  @router 属性
  // 不管是否是路由组件
  router,
  // 注册仓库， 组件实例身上会多一个 $store 属性
  store
}).$mount('#app')
