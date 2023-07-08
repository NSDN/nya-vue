<script setup lang="ts">
import { reactive } from 'vue'
import { useUserSimpleInfo } from '../compositions'

const info = reactive(useUserSimpleInfo())
</script>

<template>
  <button
    id="user-info"
    @click="info.handleClick"
    @pointerdown="info.handleLongTimePush"
    @pointerup="info.handleReleaseKey"
  >
    <img class="icon" :src="info.userIcon" alt="icon" />
    <span class="username">{{ info.username }}</span>
  </button>
</template>

<style scoped>
#user-info {
  align-items: center;
  align-content: flex-start;
  background: var(--common-block-background);
  border: none;
  border-radius: 3px;
  box-shadow: var(--common-block-box-shadow);
  box-sizing: border-box;
  cursor: default;
  display: flex;
  font-size: 20px;
  height: 5rem;
  outline: none;
  padding: 0 1rem 0 2rem;
  text-decoration: none;
}

#user-info:active {
  background: var(--common-active-background);
}

.icon {
  align-items: center;
  border-radius: 50%;
  border: var(--simple-info_icon-border);
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 4rem;
}

.username {
  margin: 0 0 0 2rem;
}
</style>
