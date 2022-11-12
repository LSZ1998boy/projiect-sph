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

// 获取搜索模块数据  /api/list    POST
// {
//     "category3Id": "61",
//     "categoryName": "手机",
//     "keyword": "小米",
//     "order": "1:desc",
//     "pageNo": 1,
//     "pageSize": 10,
//     "props": ["1:1700-2799:价格", "2:6.65-6.74英寸:屏幕尺寸"],
//     "trademark": "4:小米"
//   }

// 当前接口 给服务器传递的参数 至少是一个空对象 {}  否则会报错
// reqGetSearchInfo({})  
export const reqGetSearchInfo = (params)=>requests({
    url: '/list',
    method: 'post',
    data: params
})