// 配置路由的地方
import Vue from 'vue'
import VueRouter from 'vue-router'
// 使用插件
Vue.use(VueRouter)

// 引入路由组件
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Register from '@/pages/Register'
import Search from '@/pages/Search'

// 配置路由
export default new VueRouter({
    // 配置路由
    routes: [
        {
            path: "/home",
            component: Home,
            meta: { show: true }
        }
        ,
        {
            path: "/login",
            component: Login,
            meta: { show: false }
        }
        ,
        {
            path: "/register",
            component: Register,
            meta: { show: false }
        }
        ,
        {
            path: "/search/:keyword?",
            component: Search,
            meta: { show: true },
            name:"search",
            // 路由组件可以传递 props
            // 1、布尔值写法 params
            // props: true   // 只能传递 params 参数
            // 2、对象写法  额外给路由组件 传递一些 props
            // props: {a:1,b:2},
            // 3、函数写法 最常用  可以将params 和 query参数 通过props 传递给组件
            props:($route)=>{
                return {keyword:$route.params.keyword,k:$route.query.k}
            }

        }
        ,
        // 重定向 初始化时 默认打开的路由组件
        {
            path: '*',  // 默认添加  /home
            redirect: "/home"
        }
    ]
})