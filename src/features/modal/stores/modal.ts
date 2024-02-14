import type { Modal } from '../types'

import { defineStore } from 'pinia'
import { STORE_ID } from '@/constant'
import { ref } from 'vue'

export const useModal = defineStore(STORE_ID.MODAL, () => {
  /** 模态框节点 */
  const modal = ref<HTMLDialogElement | undefined>()

  /** 模态框选项 */
  const modalOptions = ref<Modal.ModalOptions>({
    info: '',
    buttonLabel: ['确认', '取消'],
  })

  /** 显示模态框 */
  const showModal = (options: Modal.ModalOptions) => {
    modalOptions.value = { ...modalOptions.value, ...options }
    modal.value?.showModal()
  }

  /** 关闭模态框 */
  const closeModal = () => {
    modal.value?.close()
  }

  return { modal, showModal, closeModal, modalOptions }
})
