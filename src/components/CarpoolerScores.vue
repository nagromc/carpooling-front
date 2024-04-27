<script setup lang="ts">
import { Score } from '@/types'

defineProps({
  scores: {
    type: Array<Score>,
    required: true
  }
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

<style scoped></style>
