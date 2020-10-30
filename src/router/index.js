import Vue from 'vue'
import Router from 'vue-router'
import User from '@/components/User'
import VueResource from 'vue-resource'
import Movie from '@/components/Movie'
import movieDetail from '@/components/movieDetail'
import newDetail from '@/components/newDetail'
import loginPage from '@/components/loginPage'
import register from '@/components/register'
import FindPwd from '@/components/FindPwd'

const VIP = { template: '<div>测试</div>' }
Vue.use(Router)
Vue.use(VueResource)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: resolve => require(['../pages/index'], resolve),
      meta: {
        title: 'home'
      }
    },
    {
      path: '/user/:id',
      name: 'User',
      props: true,
      component: User,
      children: [
        {
          path: 'vip',
          component: VIP
        }
      ]
    }, {
      path: '/movies',
      name: 'movies',
      component: Movie
    },,
    {
      path: '/movieDetail',
      name: 'movieDetail',
      component: movieDetail
    },,
    {
      path: '/newDetail',
      name: 'newDetail',
      component: newDetail
    },,
    {
      path: '/loginPage',
      name: 'loginPage',
      component: loginPage
    },,
    {
      path: '/register',
      name: 'register',
      component: register
    }, {
      path: '/FindPwd',
      name: 'findPwd',
      component: FindPwd
    }
  ]
})
