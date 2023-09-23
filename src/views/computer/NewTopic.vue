<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import UploadCommicWrapper from '@/features/create-topic/components/UploadCommicWrapper.vue'

import { useUncommitTopicStore } from '@/features/create-topic/hooks'

const topic = useUncommitTopicStore()

function inputTopicTitle(event: Event): void {
  const node = event.target as HTMLInputElement
  topic.setTitle(node.value)
}
</script>

<template>
  <div id="new-topic">
    <BackButton class="back" />

    <input
      class="topic-title"
      placeholder="标题"
      :value="topic.title"
      @input="inputTopicTitle"
    />

    <UploadCommicWrapper v-if="topic.isCommicType" />
  </div>
</template>

<style scoped>
#new-topic {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.back {
  align-self: flex-start;
  margin: -1rem 0 0;
}

.topic-title {
  background: var(--common-block-background);
  border: none;
  border-radius: var(--common-block-radius);
  box-sizing: border-box;
  box-shadow: var(--common-block-box-shadow);
  font-size: 16px;
  margin: 1rem 0 0;
  padding: 0.4rem 0.5rem;
}
</style>
