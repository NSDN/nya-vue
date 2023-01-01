<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const route = useRoute()
const router = useRouter()

const buttonDisplayed = computed<boolean>(
  () => route.meta.displayCreateTopicButton as boolean
)

function transfer(): void {
  router.push({ name: 'NewTopic' })
}
</script>

<template>
  <button id="create-topic-button" v-if="buttonDisplayed" @click="transfer">
    <img class="icon" src="@/assets/img/icon/note.svg" alt="note" />
  </button>
</template>

<style scoped>
#create-topic-button {
  align-items: center;
  background: var(--common-block-background);
  border: none;
  border-radius: 50%;
  box-shadow: var(--common-block-box-shadow);
  bottom: 2.5rem;
  display: flex;
  outline: none;
  padding: 0;
  position: fixed;
  right: 2.5rem;
  height: 3rem;
  justify-content: center;
  width: 3rem;
}

#create-topic-button:active {
  background: rgba(204, 204, 204, 0.8);
}

.icon {
  height: 1.5rem;
  margin: 0 0 0 0.3rem;
}
</style>
