<script setup lang="ts">
import Announcement from '@/features/plate/components/Announcement.vue'
import { useRouter } from 'vue-router'

const router = useRouter()

function transfer() {
  router.push({ name: 'Article' })
}
</script>

<template>
  <div id="plate-content-layout">
    <Announcement />

    <div class="search">筛选 / 检索</div>

    <div class="article-list">
      <button class="article-item" v-for="item in 30" @click="transfer">
        这是帖文的示例
      </button>
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
  background: none;
  border: none;
  border-bottom: 2px solid #ccc;
  box-sizing: border-box;
  cursor: pointer;
  padding: 0;
  text-align: start;
}
</style>
