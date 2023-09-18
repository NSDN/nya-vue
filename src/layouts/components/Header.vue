<script setup lang="ts">
import UserSimpleInfo from '@/features/authorization/components/UserSimpleInfo.vue'
</script>

<template>
  <header id="header">
    <span id="logo">喵玉殿 | 东方 Project 主题论坛</span>
    <UserSimpleInfo />
  </header>
</template>

<style scoped>
#header {
  align-items: center;
  background: rgba(255, 100, 100, 0.6);
  box-sizing: border-box;
  display: flex;
  font-size: 20px;
  font-weight: 600;
  height: 5rem;
  justify-content: space-between;
  padding: 1rem;
}

#logo {
  cursor: default;
}
</style>
