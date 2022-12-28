import { defineStore } from 'pinia'
import { ref } from 'vue'

const useAuthorizationStore = defineStore('authorization', () => {
  const loginOver = ref<boolean>(false)
  const setLoginStatus = (status: boolean) => (loginOver.value = status)

  return { loginOver, setLoginStatus }
})

export default useAuthorizationStore
