<script setup lang="ts">
defineProps<{ label: string }>()
</script>

<template>
  <button class="button">{{ label }}</button>
</template>

<style scoped>
.button {
  box-sizing: border-box;
  padding: 0.1rem 0.5rem;
}

.button:focus-visible {
  outline: lightpink auto 1px;
}
</style>
