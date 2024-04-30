<script setup lang="ts">
import type { Carpooler } from '@/types'
import { onMounted, ref } from 'vue'

const carpoolers = ref<Carpooler[]>()

function refreshData() {
  carpoolers.value = fetchData()

  function fetchData(): Carpooler[] {
    console.log('Fetching carpoolers…')
    const alice: Carpooler = { id: 'alice', displayName: 'Alice' }
    const bob: Carpooler = { id: 'bob', displayName: 'Bob' }
    const charlie: Carpooler = { id: 'charlie', displayName: 'Charlie' }

    return [alice, bob, charlie]
  }
}

onMounted(refreshData)
</script>

<template>
  <div>List of carpoolers</div>

  <ul>
    <li v-for="c in carpoolers" :key="c.id">{{ c.displayName }}</li>
  </ul>
</template>

<style scoped></style>
