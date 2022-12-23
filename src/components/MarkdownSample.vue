<scrpit lang="ts">
export default { name: 'App' }
</scrpit>

<script setup lang="ts">
import { NTag } from 'naive-ui'
import { ref } from 'vue'
import Markdown from 'vue3-markdown-it'
import Editor from '@tinymce/tinymce-vue'

const title = '喵玉殿'
const source = ref<string>('')
</script>

<template>
  <div class="app">
    <NTag>{{ title }}</NTag>

    <div class="article">
      <textarea v-model="source" />
      <Markdown class="markdown" :source="source" />
    </div>

    <div class="article" style="margin: 2rem">
      <Editor />
    </div>
  </div>
</template>

<style scoped>
.article {
  background: #eee;
  display: flex;
}

.article textarea {
  height: 300px;
  padding: 1rem;
  width: 50vw;
}

.article .markdown {
  padding: 0 1rem;
}
</style>
