import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CarpoolerScores from '@/components/CarpoolerScores.vue'
import CarpoolerList from '@/components/CarpoolerList.vue'

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/scores' },
  { path: '/scores', component: CarpoolerScores, name: 'carpoolerScores' },
  { path: '/carpoolers', component: CarpoolerList, name: 'carpoolerList' }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
