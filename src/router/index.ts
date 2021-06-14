import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import Statistics from '@/views/Statistics.vue';
import Keeping from '@/views/Keeping.vue'
import Reports from '@/views/Reports.vue';
import NotFound from '@/views/NotFound.vue';

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    component: Keeping
  },
  {
    path: '/keeping',
    component: Keeping
  },
  {
    path: '/statistics',
    component: Statistics
  },
  {
    path: '/reports',
    component: Reports
  },
  {
    path: '*',
    component: NotFound
  },
]

const router = new VueRouter({
  routes
})

export default router
