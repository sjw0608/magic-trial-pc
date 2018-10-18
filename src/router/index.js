import Vue from 'vue'
import Router from 'vue-router'

import Index from '@/pages/Index/index'
import GoodDetail from '@/pages/Detail/good_detail'
import GoodList from '@/pages/List/goods_list'
import UserCenter from '@/pages/user'
import AccountNews from '@/pages/User/news'
import UserProfile from '@/pages/User/user_profile'
import Integral from '@/pages/User/user_log'

//trial
import Trial from '@/pages/Trial/my_trial'
import OrderId from '@/pages/Trial/order_id'

//Account
import Infomation from '@/pages/Account/infomation'
import Authentication from '@/pages/Account/authentication'
import UpdatePassword from '@/pages/Account/update_password'
import Withdrawal from '@/pages/Account/withdrawal'
import BindBankCard from '@/pages/Account/bind_bank'

//Help
import Guide from '@/pages/Help/new_guide'
import SearchHelp from '@/pages/Help/search_help'
import CopyOrders from '@/pages/Help/copy_orders'
import ResultHelp from '@/pages/Help/result_help'

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
        },
        {
          path: '/user/user_profile',
          name: 'UserProfile',
          component: UserProfile
        },
        {
          path: '/user/user_profile/integral',
          name: 'Integral',
          component: Integral
        },
        {
          path: '/user/trial',
          name: 'Trial',
          component: Trial
        },
        {
          path: '/user/trial/order_id',
          name: 'OrderId',
          component: OrderId
        },
        {
          path: '/user/infomation',
          name: 'Infomation',
          component: Infomation
        },
        {
          path: '/user/update_password',
          name: 'UpdatePassword',
          component: UpdatePassword
        },
        {
          path: '/user/withdrawal',
          name: 'Withdrawal',
          component: Withdrawal
        },
        {
          path: '/user/bind_bank',
          name: 'BindBankCard',
          component: BindBankCard
        },
        {
          path: '/user/authentication',
          name: 'Authentication',
          component: Authentication
        },
        {
          path: '/user/guide',
          name: 'Guide',
          component: Guide
        },
        {
          path: '/user/search_help',
          name: 'SearchHelp',
          component: SearchHelp
        },
        {
          path: '/user/copy_orders',
          name: 'CopyOrders',
          component: CopyOrders
        },
        {
          path: '/user/result_help',
          name: 'ResultHelp',
          component: ResultHelp
        }
      ]
    }
  ]
})
