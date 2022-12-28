<script setup lang="ts">
import { useRouter } from 'vue-router'
import { useAuthorizationStore } from '../hooks'

const router = useRouter()

function login(): void {
  router.push({ name: 'login' })
}
</script>

<template>
  <div id="authorization-block">
    <a href="javascript:void(0)" @click="login">登入</a>
    <span>/</span>
    <a href="javascript:void(0)">注册</a>
  </div>
</template>

<style scoped>
#authorization-block {
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  color: #000;
  display: flex;
  font-size: 20px;
  gap: 1rem;
  height: 5rem;
  justify-content: center;
  text-decoration: none;
}
</style>
