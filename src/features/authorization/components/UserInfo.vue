<script setup lang="ts">
import { computed } from 'vue'
import { useAuthorizationStore } from '@/features/authorization/hooks'
import { useRouter } from 'vue-router'

const router = useRouter()
const authorization = useAuthorizationStore()

const username = computed<string>(() =>
  authorization.loginDone ? 'username' : '游客'
)

function transfer(): void {
  // TODO: 登入后改为跳转到个人信息页
  !authorization.loginDone && router.push({ name: 'Login' })
}

let timer: NodeJS.Timer | null = null
const clearTimer = () => timer && clearInterval(timer)

function handlePointerDown(): void {
  if (!authorization.loginDone) {
    return
  }

  clearTimer()

  timer = setTimeout((): void => {
    authorization.logout()
    clearTimer()
  }, 2000)
}
</script>

<template>
  <button
    id="user-info"
    @click="transfer"
    @pointerdown="handlePointerDown"
    @pointerup="clearTimer"
  >
    <span class="circle">图</span>
    <span class="username">{{ username }}</span>
  </button>
</template>

<style scoped>
#user-info {
  align-items: center;
  align-content: flex-start;
  background: var(--common-block-background);
  border: none;
  border-radius: 3px;
  box-shadow: var(--common-block-box-shadow);
  box-sizing: border-box;
  color: #333;
  cursor: default;
  display: flex;
  font-size: 20px;
  height: 5rem;
  outline: none;
  padding: 0 1rem 0 2rem;
  text-decoration: none;
}

#user-info:active {
  background: rgba(238, 238, 238, 0.8);
}

.circle {
  align-items: center;
  border-radius: 50%;
  border: 2px solid #333;
  display: flex;
  height: 4rem;
  justify-content: center;
  width: 4rem;
}

.username {
  margin: 0 0 0 2rem;
}
</style>
