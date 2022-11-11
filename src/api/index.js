// 当前这个模块， API 进行统一管理
import requests from "./request";

import mockAjax from './mockAjax'
// 三级联动接口
//  /api/product/getBaseCategoryList   get   无参数

export const reqCategoryList = () => {
    // 发请求
    return requests({
        url: '/product/getBaseCategoryList',
        method: 'get'
    })
}

// 获取广告轮播列表
export const reqBannerList = ()=> mockAjax.get('/banners')

// 获取首页楼层列表
export const reqFloorList = ()=> mockAjax.get('/floors')
