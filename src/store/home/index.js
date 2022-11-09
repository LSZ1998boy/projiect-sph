import {reqCategoryList} from '@/api'

// home 模块小仓库
const state = {
    categoryList:[]
}
const mutations = {
    CATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList
    }
}
const actions = {
    // 通过 api 里面的函数调用 向服务器发请求 获取服务器数据
    // 结果是 promise  使用 asinc 和 await 解析出来
    async categoryList({commit}) {
        let res = await reqCategoryList()
        // console.log(res)
        if(res.code == 200) {
            commit("CATEGORYLIST",res.data)
        }
    }
}
const getters = {}

//对外暴露store的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}