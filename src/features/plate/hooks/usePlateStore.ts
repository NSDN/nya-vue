import type { Plate } from '../types'

import { defineStore } from 'pinia'
import { ref } from 'vue'
import { useRoute } from 'vue-router'
import { PageTypeEnum } from '../enum'

const usePlateStore = defineStore('plate', () => {
  const route = useRoute()

  const plates: Plate.PlateItem[] = [
    {
      background:
        'https://static-event.benghuai.com/new_mihoyo_homepage/images/download/cg/origin/2020-10-22.jpg',
      title: '漫画区',
      titleColor: '#fff',
      routeName: 'TranslatePlate',
      pageType: PageTypeEnum.COMMIC,
    },

    {
      background: '',
      title: 'sample',
      routeName: 'Sample01',
      pageType: PageTypeEnum.ARTICLE,
    },

    {
      background: '',
      title: 'sample',
      routeName: 'Sample02',
      pageType: PageTypeEnum.ARTICLE,
    },
  ]

  const currentPlate = ref<string>((route.name ?? '') as string)
  const setCurrentPlate = (name: string) => (currentPlate.value = name)

  return { plates, currentPlate, setCurrentPlate }
})

export default usePlateStore
