<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useScoresStore } from '@/stores/scores'

const store = useScoresStore()
const scores = ref(storeToRefs(store).scores)

onMounted(() => {
  store.refreshScores()
})
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
