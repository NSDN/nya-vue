<script setup lang="ts">
import UserInfo from '@/features/authorization/components/UserInfo.vue'
import PlateOnSidebar from '@/features/plate/components/PlateOnSidebar.vue'

import { usePlate } from '@/features/plate/hooks'

const { plates } = usePlate()
</script>

<template>
  <div class="sidebar">
    <UserInfo />

    <div class="plate-group">
      <PlateOnSidebar
        class="plate-item"
        v-for="(item, index) of plates"
        :key="index.toString()"
      />
    </div>
  </div>
</template>

<style scoped>
.sidebar {
  background: rgba(255, 255, 255, 0.8);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  padding: 1rem;
  width: 20rem;
}

.plate-group {
  flex: 1;
  box-sizing: border-box;
  margin: 1rem -1rem 0;
  overflow: auto;
  padding: 0.3rem 0.5rem;
}

.plate-item {
  margin: 1rem 0.5rem 0;
}
.plate-item:first-child {
  margin: 0 0.5rem 0;
}
</style>
