<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

function handleBack(): void {
  router.back()
}
</script>

<template>
  <a href="javascript:void(0)" class="back-button" @click="handleBack">
    く 返回
  </a>
</template>
