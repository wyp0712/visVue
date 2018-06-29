import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

let dynamicComponent = resolve => require(['@/views/dynamicComponent/index.vue'], resolve)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/dynamicComponent',
      name: 'dynamicComponent',
      component: dynamicComponent
    }
  ]
})
