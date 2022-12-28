<script setup lang="ts">
import PlateOnSidebar from '@/features/plate/components/PlateOnSidebar.vue'

import { usePlate } from '@/features/plate/hooks'

const { plates } = usePlate()
</script>

<template>
  <div class="sidebar">
    <PlateOnSidebar
      class="plate-item"
      v-for="(item, index) of plates"
      :key="index.toString()"
    />
  </div>
</template>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  padding: 1rem;
  width: 20rem;
  overflow: auto;
}

.plate-item {
  margin: 1rem 0 0;
}
.plate-item:first-child {
  margin: 0;
}
</style>
