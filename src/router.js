import Vue from 'vue'
import Router from 'vue-router'
import PropertyCreate from './views/PropertyCreate.vue'
import PropertyList from './views/PropertyList.vue'
import PropertyShow from './views/PropertyShow.vue'
import NProgress from 'nprogress'
import NotFound from './views/NotFound.vue'
import NetworkIssue from './views/NetworkIssue.vue'
import Search from './views/Search.vue'
import Map from './views/Map.vue'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'search',
      component: Search,
      props: true
    },
    {
      path: '/map',
      name: 'map',
      component: Map,
      props: true
    },
    {
      path: '/list',
      name: 'list',
      component: PropertyList,
      props: true
    },
    {
      path: '/property/:id',
      name: 'property-show',
      component: PropertyShow,
      props: true
    },
    {
      path: '/create',
      name: 'create',
      component: PropertyCreate
    },
    {
      path: '/404',
      name: '404',
      component: NotFound,
      props: true
    },
    {
      path: '/network-issue',
      name: 'network-issue',
      component: NetworkIssue
    },
    {
      path: '*',
      redirect: { name: '404', params: { resource: 'page' } }
    }
  ]
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach(() => {
  NProgress.done()
})

export default router
