<script setup lang="ts">
import Header from './components/Header.vue'

import { BASE_BACKGROUND } from '@/config'
</script>

<template>
  <div id="main-layout" :style="`background-image: url(${BASE_BACKGROUND})`">
    <Header />

    <div class="middle">
      <div class="content"><RouterView /></div>
    </div>

    <footer>footer</footer>
  </div>
</template>

<style scoped>
#main-layout {
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.middle {
  display: flex;
  flex: 1 1 0;
  overflow: auto;
}

.middle .content {
  background: rgba(255, 192, 203, 0.8);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: var(--common-content-padding);
  overflow: auto;
}

#main-layout footer {
  align-items: center;
  background: rgba(0, 128, 0, 0.8);
  display: flex;
  height: 2rem;
  justify-content: center;
}
</style>
