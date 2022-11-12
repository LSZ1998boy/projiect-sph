import { reqGetSearchInfo } from '@/api'

// search 模块小仓库
const state = {
    searchList: {}
}
const mutations = {
    GETSEARCHLIST(state, searchList) {
        state.searchList = searchList
    }
}
const actions = {
    // 获取search 模块数据
    async getSearchList({ commit }, params = {}) {
        // 这个函数在获取服务器数据时 至少需要传递一个参数 
        //  params={}  默认为空对象 {}
        let res = await reqGetSearchInfo(params)
        if(res.code==200) {
            commit('GETSEARCHLIST', res.data)
        }
    }
}
// 计算属性
// 简化仓库中的数据   为简化数据而生
// 假如没有网络 为了防止报错  || [] 赋予 空数组
const getters = {
    goodsList(state) {
        return state.searchList.goodsList || []
    },
    trademarkList(state) {
        return state.searchList.trademarkList || []
    },
    attrsList(state) {
        return state.searchList.attrsList || []
    }
}

//对外暴露store的一个实例
export default {
    state,
    mutations,
    actions,
    getters
}