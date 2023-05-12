<script setup lang="ts">
import CreateTopicButton from '@/features/create-topic/components/CreateTopicButton.vue'
import Sidebar from './components/Sidebar.vue'

import { BASE_BACKGROUND, BASE_BACKGROUND_SIZE } from '@/config'
</script>

<template>
  <div id="main-layout" :style="`background-image: url(${BASE_BACKGROUND})`">
    <header>header</header>

    <div class="middle">
      <Sidebar />
      <div class="content"><RouterView /></div>
    </div>

    <footer>footer</footer>
    <CreateTopicButton />
  </div>
</template>

<style scoped>
#main-layout {
  background-size: v-bind('BASE_BACKGROUND_SIZE');
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-layout header {
  align-items: center;
  background: rgba(255, 0, 0, 0.8);
  display: flex;
  height: 5rem;
  justify-content: center;
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
