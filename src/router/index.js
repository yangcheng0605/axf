import Vue from 'vue'
import Router from 'vue-router'

// 首页
import head from '@/components/head.vue'
// 闪送超市
import supermaket from '@/components/supermaket.vue'
// 购物车
import cart from '@/components/cart.vue'
// 登录
import login from '@/components/login.vue'
// 搜索页面
import search from '@/components/search.vue'
// 修改地址页面
import modified from '@/components/modified.vue'
// 添加地址页面
import mdAddress from '@/components/mdAddress.vue'
// 总地址页面
import address from '@/components/address.vue'
// 空地址页面
import site from '@/components/site.vue'
// 百度地图页面
import map from '@/components/map.vue'
// 详情页面
import details from '@/components/details.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '',
      component: head
    },
    {
      path: '/head',
      name: 'head',
      component: head
    },
    {
      path: '/supermaket',
      name: 'supermaket',
      component: supermaket
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/login',
      name: 'login',
      component: login
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/modified',
      name: 'modified',
      component: modified
    },
    {
      path: '/mdAddress',
      name: 'mdAddress',
      component: mdAddress
    },
    {
      path: '/address',
      name: 'address',
      component: address
    },
    {
      path: '/site',
      name: 'site',
      component: site
    },
    {
      path: '/map',
      name: 'map',
      component: map
    },
    {
      path: '/details',
      name: 'details',
      component: details
    }
  ]
})
