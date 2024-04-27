<script setup lang="ts">
import { ref } from 'vue'
import { Carpooler } from '@/types'
import CarpoolerList from '@/components/CarpoolerList.vue'
import CarpoolerScores from '@/components/CarpoolerScores.vue'

let alice = new Carpooler('alice', 'Alice')
let bob = new Carpooler('bob', 'Bob')
let charlie = new Carpooler('charlie', 'Charlie')

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
