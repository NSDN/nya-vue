<script setup lang="ts">
import { useVModel } from '@/hooks'

const props = defineProps<{
  title: string
  type: string
  modelValue: string
}>()

const value = useVModel(props, 'modelValue')
</script>

<template>
  <form class="login-input">
    <span class="title">{{ title }}：</span>
    <input :type="type" class="input" v-model="value" autocomplete="on" />
  </form>
</template>

<style scoped>
.login-input {
  display: flex;
}

.title {
  text-align: justify;
  text-align-last: justify;
  width: 5rem;
}

.input {
  margin: 0 0 0 0.5rem;
}
</style>
