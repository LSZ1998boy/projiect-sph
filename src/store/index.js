import Vue from 'vue'
import Vuex from 'vuex'

// 需要使用插件
Vue.use(Vuex)

// 引入小仓库
import home from '@/store/home'
import search from '@/store/search'

//对外暴露store的一个实例
export default new Vuex.Store({
    // 实现 Vuex仓库 模块式开发
   modules:{
        home,
        search
   }
})