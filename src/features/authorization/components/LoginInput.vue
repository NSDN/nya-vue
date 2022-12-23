<script setup lang="ts">
import { ref } from 'vue'

defineProps<{
  title: string
  type: string
}>()

enum EmitTypeEnum {
  INPUT = 'input',
}

const emit = defineEmits<{
  (event: EmitTypeEnum.INPUT, value: string): void
}>()

const value = ref<string>('')

function handleInput(): void {
  emit(EmitTypeEnum.INPUT, value.value)
}
</script>

<template>
  <form class="login-input">
    <span class="title">{{ title }}：</span>

    <input
      :type="type"
      class="input"
      v-model="value"
      autocomplete="on"
      @input="handleInput"
    />
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
