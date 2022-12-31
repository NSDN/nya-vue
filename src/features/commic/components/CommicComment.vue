<script setup lang="ts">
import Comment from './Comment.vue'

import type { CommicComment } from '../types'

defineProps<{
  list: CommicComment.List
}>()
</script>

<template>
  <div class="commic-comment">
    <Comment class="comment" v-for="item of list" :key="item.id" :item="item" />
  </div>
</template>

<style scoped>
.commic-comment {
  background: var(--common-block-background);
  border-radius: var(--common-block-radius);
  box-shadow: var(--common-block-box-shadow);
  box-sizing: border-box;
  margin: 1rem 0 0;
  overflow: auto;
  padding: 1rem 2rem;
}

.comment {
  margin: 1rem 0 0;
}

.comment:first-child {
  margin: 0;
}
</style>
