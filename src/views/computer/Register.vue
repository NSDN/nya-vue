<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import BaseCard from '@/components/BaseCard.vue'
import AuthorizationInput from '@/features/authorization/components/AuthorizationInput.vue'

import type { AuthorizationServices } from '@/features/authorization/types'

import { useRegister } from '@/features/authorization/compositions'

const { info, confirmRegister, formError } = useRegister()

const infoList: Record<'title' | 'type' | 'key', string>[] = [
  { title: '用户名', type: 'text', key: 'username' },
  { title: '密码', type: 'password', key: 'password' },
  { title: '确认密码', type: 'password', key: 'confirmPassword' },
]
</script>

<template>
  <div id="register">
    <BackButton class="back-button" />

    <BaseCard class="card" direction="column" height="25rem" width="30rem">
      <AuthorizationInput
        v-for="i in infoList"
        :key="i.key"
        :title="i.title"
        :type="i.type"
        v-model="info[i.key as keyof AuthorizationServices.RegisterInfo]"
        :error="
          formError[i.key as keyof AuthorizationServices.RegisterInfoError]
        "
      />

      <div class="button-group">
        <button class="button" @click="confirmRegister">确认</button>
      </div>
    </BaseCard>
  </div>
</template>

<style scoped>
#register {
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

.card {
  gap: 2.5rem;
}

.button {
  width: 3.5rem;
}
</style>
