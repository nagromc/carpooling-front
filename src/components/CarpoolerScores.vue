<script setup lang="ts">
import { type Carpooler, type Score } from '@/types'
import { onMounted, ref } from 'vue'

const scores = ref<Score[]>([])

function refreshData() {
  scores.value = fetchData()

  function fetchData(): Score[] {
    console.log('Fetching scores…')
    const alice: Carpooler = { id: 'alice', displayName: 'Alice' }
    const bob: Carpooler = { id: 'bob', displayName: 'Bob' }
    const charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

    return [
      { carpooler: alice, score: 0.3 },
      { carpooler: bob, score: 0.5 },
      { carpooler: charlie, score: -1 }
    ]
  }
}

onMounted(refreshData)
</script>

<template>
  <div>Scores</div>

  <ul>
    <li v-for="s in scores" :key="s.carpooler.id">
      <div>{{ s.carpooler.displayName }}</div>
      <div>{{ s.score }}</div>
    </li>
  </ul>
</template>
