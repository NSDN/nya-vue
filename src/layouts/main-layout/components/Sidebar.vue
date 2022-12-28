<script setup lang="ts">
import AuthorizationBlock from '@/features/authorization/components/AuthorizationBlock.vue'
import UserInfo from '@/features/authorization/components/UserInfo.vue'
import { useAuthorizationStore } from '@/features/authorization/hooks'
import PlateOnSidebar from '@/features/plate/components/PlateOnSidebar.vue'

import { usePlate } from '@/features/plate/hooks'

const { plates } = usePlate()
const authorization = useAuthorizationStore()
</script>

<template>
  <div class="sidebar">
    <UserInfo v-if="authorization.loginOver" />
    <AuthorizationBlock v-else />

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
