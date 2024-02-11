<script setup lang="ts"></script>

<template>
  <div class="article-topic-creater">
    <div class="button-group">
      <button @click="() => {}">预览</button>
      <button @click="() => {}">提交主题</button>
    </div>

    <textarea class="article" />
  </div>
</template>

<style scoped>
.article-topic-creater {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1.5rem 0 0;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  font-size: 1rem;
  height: 2rem;
  width: 6rem;
}

.article {
  flex: 1;
  margin: 1rem 0 0;
}
</style>
