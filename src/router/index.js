import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/pages/Index/index'
import GoodDetail from '@/pages/Detail/good_detail'
import GoodList from '@/pages/List/goods_list'
import UserCenter from '@/pages/user'
import AccountNews from '@/pages/Account/news'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Index',
      component: Index,
      meta: {
        title: '魔力试用首页',
        auth: false
      }
    },
    {
      path: '/good_detail',
      name: 'GoodDetail',
      component: GoodDetail,
      meta: {
        title: '商品详情',
        auth: false
      }
    },
    {
      path: '/good_list',
      name: 'GoodList',
      component: GoodList,
      meta: {
        title: '商品列表',
        auth: false
      }
    },
    {
      path: '/user',
      name: 'UserCenter',
      component: UserCenter,
      children: [
        {
          path: '/user/news',
          name: 'AccountNews',
          component: AccountNews
        }
      ]
    }
  ]
})
