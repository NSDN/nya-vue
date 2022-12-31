<script setup lang="ts">
import { useRouterStore } from '@/hooks'

const router = useRouterStore()

function transfer() {
  router.transfer({ name: 'Article' })
}
</script>

<template>
  <div id="article-list">
    <button class="article-item" v-for="item in 30" @click="transfer">
      这是帖文的示例
    </button>
  </div>
</template>

<style scoped>
#article-list {
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
