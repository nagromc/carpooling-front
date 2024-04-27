<script setup lang="ts">
import { ref } from 'vue'
import type { Carpooler } from '@/types'
import CarpoolerList from '@/components/CarpoolerList.vue'
import CarpoolerScores from '@/components/CarpoolerScores.vue'

let alice: Carpooler = { id: 'alice', displayName: 'Alice' }
let bob: Carpooler = { id: 'bob', displayName: 'Bob' }
let charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

let carpoolers = ref([alice, bob, charlie])

let scores = ref([
  { carpooler: alice, score: 0.3 },
  { carpooler: bob, score: 0.5 },
  { carpooler: charlie, score: -1 }
])
</script>

<template>
  <h1>Carpooling app</h1>

  <nav>
    <ul>
      <li><a href="carpooler-list">Carpooler list</a></li>
      <li><a href="scores">Scores</a></li>
    </ul>
  </nav>

  <carpooler-list :carpoolers />
  <carpooler-scores :scores />
</template>

<style scoped></style>
