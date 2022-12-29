<script setup lang="ts">
import Announcement from '@/features/plate/components/Announcement.vue'
</script>

<template>
  <div id="plate-content-layout">
    <Announcement />

    <div class="search">筛选 / 检索</div>

    <div class="article-list">
      <span class="article-item" v-for="item in 30">这是帖文的示例</span>
    </div>
  </div>
</template>

<style scoped>
#plate-content-layout {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.search {
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 1rem 0 0;
}

.article-list {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  display: flex;
  flex: 1 1 0;
  flex-direction: column;
  margin: 1rem 0 0;
  overflow: auto;
}

.article-item {
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
}
</style>
