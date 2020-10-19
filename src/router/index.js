/*
 * @Author: bobocde
 * @Description:
 */
import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import NewHello from '@/components/NewHello'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/newhello',
      name: 'NewHello',
      component: NewHello
    }
  ]
})
