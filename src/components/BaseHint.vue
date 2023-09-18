<script setup lang="ts">
defineProps<{
  hint: string
}>()
</script>

<template>
  <span class="hint" :title="hint">?</span>
</template>

<style scoped>
.hint {
  border: 1.5px #000 solid;
  border-radius: 100%;
  font-size: 16px;
  font-weight: 500;
  height: 1rem;
  text-align: center;
  line-height: 18px;
  width: 1rem;
}
</style>
