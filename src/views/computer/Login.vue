<script setup lang="ts">
import AuthorizationInput from '@/features/authorization/components/AuthorizationInput.vue'
import BackButton from '@/components/button/BackButton.vue'

import { reactive } from 'vue'
import { useLogin } from '@/features/authorization/hooks'
import { useRouter } from 'vue-router'

const login = useLogin()
const router = useRouter()

const loginInfo = reactive({
  username: '',
  password: '',
})

async function handleSubmit(): Promise<void> {
  await login.queryToken({
    username: loginInfo.username,
    password: loginInfo.password,
  })

  if (login.loginDone) {
    router.back()
  }
}
</script>

<template>
  <div id="login">
    <BackButton class="back-button" />

    <div class="login-wrapper">
      <AuthorizationInput
        title="用户名"
        type="text"
        v-model="loginInfo.username"
      />

      <AuthorizationInput
        title="密码"
        type="password"
        v-model="loginInfo.password"
      />
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
