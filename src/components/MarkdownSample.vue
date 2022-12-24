<scrpit lang="ts">
export default { name: 'MarkdownSample' }
</scrpit>

<script setup lang="ts">
import MarkdownIt from 'markdown-it'
import { ref, watch } from 'vue'

const emit = defineEmits<{
  (event: 'submit', value: string): void
}>()

const markdown = new MarkdownIt()
const source = ref<string>('')
const result = ref<string>(markdown.render(source.value))

watch(source, (): void => {
  result.value = markdown.render(source.value)
})

enum DisplayModeEnum {
  WRITE = 'write',
  REVIEW = 'review',
}

const displayMode = ref<DisplayModeEnum>(DisplayModeEnum.WRITE)
</script>

<template>
  <div class="article">
    <div class="button-group">
      <button
        class="button"
        :class="{ current: displayMode === DisplayModeEnum.WRITE }"
        @click="displayMode = DisplayModeEnum.WRITE"
      >
        write
      </button>

      <button
        class="button"
        :class="{ current: displayMode === DisplayModeEnum.REVIEW }"
        @click="displayMode = DisplayModeEnum.REVIEW"
      >
        review
      </button>
    </div>

    <textarea
      class="write"
      v-show="displayMode === DisplayModeEnum.WRITE"
      v-model="source"
    />

    <div
      class="review"
      v-show="displayMode === DisplayModeEnum.REVIEW"
      v-html="result"
    />

    <button
      class="button submit"
      :class="{
        'submit-fix': displayMode === DisplayModeEnum.WRITE,
      }"
      @click="() => emit('submit', result)"
    >
      submit
    </button>
  </div>
</template>

<style scoped>
.article {
  box-sizing: border-box;
  padding: 1rem;
}

.button-group {
  display: flex;
}

.button {
  height: 2rem;
  width: 5rem;
}

.current {
  opacity: 0.6;
}

.article .write {
  border: 2px solid #333;
  box-sizing: border-box;
  height: 15rem;
  margin: 0.5rem 0 0;
  width: 100%;
}

.article .review {
  border: 2px solid #333;
  box-sizing: border-box;
  height: 15rem;
  margin: 0.5rem 0 0;
  padding: 0 1rem;
  width: 100%;
}

.submit {
  margin: 0.5rem 0 0;
}

.submit-fix {
  margin: 3px 0 0;
}
</style>
