import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/components/Main'
import Listado from '@/components/Listado'
import Acerca from '@/components/Acerca'
import FAQ from '@/components/Faq'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    },
    {
      path: '/listado/:region',
      name: 'Regiones',
      component: Listado
    },
    {
      path: '/listado',
      name: 'Listado',
      component: Listado
    },
    {
      path: '/faq',
      name: 'FAQ',
      component: FAQ
    },
    {
      path: '/acerca',
      name: 'Acerca',
      component: Acerca
    }
  ],
  scrollBehavior(to, from, savedPosition) {
    return to.hash ? { selector: to.hash } : { x: 0, y: 0 };
  }
})
