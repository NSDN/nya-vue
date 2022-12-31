<script setup lang="ts">
import type { Plate } from '../types'

import { computed } from '@vue/reactivity'
import { useRouterStore } from '@/hooks'

const props = defineProps<{
  item: Plate.PlateItem
}>()

const router = useRouterStore()
const background = computed<string>(() => `url(${props.item.background})`)

const border = computed<string>(() => {
  return props.item.routeName === router.currentRouteName
    ? '0.3rem solid red'
    : 'none'
})

function transfer(): void {
  router.transfer({ name: props.item.routeName })
}
</script>

<template>
  <button class="plate-on-sidebar" @click="transfer">
    <span class="title">{{ item.title }}</span>
  </button>
</template>

<style scoped>
.plate-on-sidebar {
  align-items: center;
  background: v-bind(background);
  background-size: cover;
  border: none;
  border-radius: 3px;
  box-shadow: var(--common-block-box-shadow);
  box-sizing: border-box;
  display: flex;
  height: 5rem;
  justify-content: center;
  outline: none;
  padding: 0;
  width: 100%;
}

.title {
  align-items: center;
  background: transparent;
  border: v-bind('border');
  color: v-bind('item.titleColor ?? "inherit"');
  display: flex;
  height: 100%;
  justify-content: center;
  width: 100%;
}

.plate-on-sidebar:active .title {
  background: rgba(0, 0, 0, 0.2);
}
</style>
