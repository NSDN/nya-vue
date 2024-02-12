<scrpit lang="ts">
export default { name: 'MarkdownSample' }
</scrpit>

<script setup lang="ts">
import { computed, ref } from 'vue'
import MarkdownIt from 'markdown-it'

const emit = defineEmits<{
  (event: 'submit', value: string): void
}>()

const md = MarkdownIt()

const source = ref<string>('')
const result = computed<string>(() => md.render(source.value))

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

      <div style="flex: 1; text-align: end">
        <button class="button submit" @click="() => emit('submit', result)">
          submit
        </button>
      </div>
    </div>

    <textarea
      class="write"
      v-show="displayMode === DisplayModeEnum.WRITE"
      v-model="source"
    />

    <div
      class="review"
      :class="{
        'review-fix': displayMode === DisplayModeEnum.REVIEW,
      }"
      v-show="displayMode === DisplayModeEnum.REVIEW"
      v-html="result"
    />
  </div>
</template>

<style scoped>
.article {
  margin: 1rem 0 -1rem;
}

.button-group {
  display: flex;
  gap: 0.5rem;
}

.button {
  height: 2rem;
  width: 5rem;
}

.current {
  opacity: 0.6;
}

.write {
  border: 2px solid #333;
  box-sizing: border-box;
  height: 4rem;
  margin: 0.5rem 0 0;
  width: 100%;
}

.review {
  background: var(--common-block-background);
  border: 2px solid #333;
  box-sizing: border-box;
  height: 4rem;
  margin: 0.5rem 0 0;
  overflow: auto;
  padding: 0 1rem;
  width: 100%;
}

.review-fix {
  margin: 0.5rem 0 0.3rem;
}
</style>
