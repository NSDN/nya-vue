<script setup lang="ts">
import { computed } from 'vue'
import { CommicComment } from '../types'

const props = defineProps<{
  item: CommicComment.Item
}>()

const date = computed<string>(() => `[${props.item.date}]`)
const floor = computed<string>(() => `#${props.item.floor}`)
</script>

<template>
  <div class="comment">
    <div class="bar">
      <span class="date">{{ date }}</span>
      <span class="username">{{ item.username }}</span>
      <span class="floor">{{ floor }}</span>
    </div>

    <div class="content" v-html="item.content" />
  </div>
</template>

<style scoped>
.bar {
  background: rgba(255, 192, 203, 0.5);
  border-radius: 0.3rem;
  box-sizing: border-box;
  box-shadow: 0 0.5px 6px 0 #999;
  padding: 0.1rem 0.5rem;
}

.bar {
  display: flex;
}

.username {
  flex: 1;
  margin: 0 0 0 0.5rem;
}

.content {
  box-sizing: border-box;
  margin: 0.5rem 0 0;
  padding: 0.1rem 0.5rem;
}
</style>
