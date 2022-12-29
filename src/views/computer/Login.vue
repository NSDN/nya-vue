<script setup lang="ts">
import LoginInput from '@/features/authorization/components/LoginInput.vue'
import BackButton from '@/components/button/BackButton.vue'

import type { AuthorizationServices } from '@/features/authorization/types'

import { ref } from 'vue'
import { login } from '@/features/authorization/services'

const username = ref<string>('')
const setUserName = (value: string) => (username.value = value)

const password = ref<string>('')
const setPassword = (value: string) => (password.value = value)

async function handleSubmit(): Promise<void> {
  const userInfo: AuthorizationServices.UserInfo | undefined = await login({
    username: username.value,
    password: password.value,
  })

  if (userInfo) {
    console.log(userInfo)
  }
}
</script>

<template>
  <div id="login">
    <BackButton class="back-button" />

    <div class="login-wrapper">
      <LoginInput title="用户名" type="text" @input="setUserName" />
      <LoginInput title="密码" type="password" @input="setPassword" />
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
  left: 2rem;
  position: absolute;
  top: 1rem;
}

.login-wrapper {
  align-items: center;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 5px;
  box-shadow: 0 1px 8px 0 #888;
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
