<script setup lang="ts">
import LoginInput from '@/features/authorization/components/LoginInput.vue'
import BackButton from '@/components/button/BackButton.vue'

import { ref } from 'vue'
import { useAuthorizationStore } from '@/features/authorization/hooks'

const authorization = useAuthorizationStore()

const username = ref<string>('')
const setUserName = (value: string) => (username.value = value)

const password = ref<string>('')
const setPassword = (value: string) => (password.value = value)

async function handleSubmit(): Promise<void> {
  await authorization.queryToken({
    username: username.value,
    password: password.value,
  })
}
</script>

<template>
  <div id="login">
    <BackButton class="back-button" />

    <div class="login-wrapper">
      <LoginInput title="用户名" type="text" @write="setUserName" />
      <LoginInput title="密码" type="password" @write="setPassword" />
      <button class="submit-button" @click="handleSubmit">提交</button>
    </div>
  </div>
</template>

<style scoped>
#login {
  align-items: center;
  display: flex;
  justify-content: center;
  position: relative;
  width: 100%;
}

.back-button {
  left: 0;
  position: absolute;
  top: 0;
}

.login-wrapper {
  align-items: center;
  background: var(--common-block-background);
  border-radius: 5px;
  box-shadow: var(--common-block-box-shadow);
  display: flex;
  flex-direction: column;
  gap: 1rem;
  height: 20rem;
  justify-content: center;
  width: 30rem;
}

.submit-button {
  align-self: center;
}
</style>
