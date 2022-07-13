<scrpit lang="ts">
export default { name: 'App' }
</scrpit>

<script setup lang="ts">
import { NTag } from 'naive-ui'
const title = '喵玉殿'
</script>

<template>
  <div class="app">
    <NTag>{{ title }}</NTag>
  </div>
</template>
