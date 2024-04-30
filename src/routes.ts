import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import CarpoolerScores from '@/components/CarpoolerScores.vue'
import CarpoolerList from '@/components/CarpoolerList.vue'
import type { Carpooler, Score } from '@/types'

const alice: Carpooler = { id: 'alice', displayName: 'Alice' }
const bob: Carpooler = { id: 'bob', displayName: 'Bob' }
const charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

const scores: Score[] = [
  { carpooler: alice, score: 0.3 },
  { carpooler: bob, score: 0.5 },
  { carpooler: charlie, score: -1 }
]

const routes: RouteRecordRaw[] = [
  { path: '/', redirect: '/scores' },
  { path: '/scores', component: CarpoolerScores, props: { scores } },
  { path: '/carpoolers', component: CarpoolerList }
]

export const router = createRouter({
  history: createWebHistory(),
  routes
})
