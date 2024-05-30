<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useCarpoolingStore } from '@/stores/carpooling'

const store = useCarpoolingStore()
const scores = ref(storeToRefs(store).scores)

onMounted(() => {
  store.refreshCarpoolers()
  store.refreshScores()
})
</script>

<template>
  <div>Scores</div>

  <ul>
    <li v-for="s in scores" :key="s.carpoolerId">
      <div>{{ store.getDisplayNameById(s.carpoolerId) }}</div>
      <div>{{ s.score }}</div>
    </li>
  </ul>
</template>
