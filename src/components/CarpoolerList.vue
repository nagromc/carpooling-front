<script setup lang="ts">
import type {Carpooler} from "@/types";

defineProps({
  carpoolers: {
    type: Array<Carpooler>,
    required: true
  }
})
</script>

<template>
  <div>List of carpoolers</div>

  <ul>
    <li v-for="c in carpoolers" :key="c.id">{{ c.displayName }}</li>
  </ul>
</template>

<style scoped>

</style>
