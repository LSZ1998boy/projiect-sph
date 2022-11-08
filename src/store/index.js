import Vue from 'vue'
import Vuex from 'vuex'

// 需要使用插件
Vue.use(Vuex)

//对外暴露store的一个实例
export default new Vuex.Store({
    state:{},
    mutations:{},
    actions:{},
    getters:{}
})