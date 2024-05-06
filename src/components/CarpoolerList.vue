<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useCarpoolersStore } from '@/stores/carpoolers'
import { storeToRefs } from 'pinia'

const store = useCarpoolersStore()
const carpoolers = ref(storeToRefs(store).carpoolers)

onMounted(() => {
  store.refreshCarpoolers()
})
</script>

<template>
  <div>List of carpoolers</div>

  <ul>
    <li v-for="c in carpoolers" :key="c.id">{{ c.displayName }}</li>
  </ul>
</template>
