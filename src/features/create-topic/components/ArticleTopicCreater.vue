<script setup lang="ts">
import { md } from '@/lib/markdown'
import { computed, ref } from 'vue'

/** 切换书写/预览模式用标志 */
const showReview = ref<boolean>(false)
/** 切换书写/预览模式 */
const switchReview = () => (showReview.value = !showReview.value)

/** 预览按钮文字 */
const reviewButtonText = computed<string>(() =>
  showReview.value ? '书写' : '预览',
)

/** 书写内容 */
const sourceText = ref('')

/** 预览内容（markdown） */
const markdownText = computed<string>(() => md.render(sourceText.value))
</script>

<template>
  <div class="article-topic-creater">
    <div class="button-group">
      <button @click="switchReview">{{ reviewButtonText }}</button>
      <button @click="() => {}">提交主题</button>
    </div>

    <textarea
      v-show="!showReview"
      v-model="sourceText"
      class="global-block-wrapper article"
    />

    <p
      v-show="showReview"
      v-html="markdownText"
      class="global-block-wrapper article"
    />
  </div>
</template>

<style scoped>
.article-topic-creater {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1.5rem 0 0;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group button {
  font-size: 1rem;
  height: 2rem;
  width: 6rem;
}

.article {
  border: unset;
  flex: 1;
  margin: 1rem 0 0;
  resize: none;
}
</style>
