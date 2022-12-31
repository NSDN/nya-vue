import type { Plate } from '../types'

import { defineStore } from 'pinia'

const usePlateStore = defineStore('plate', () => {
  const plates: Plate.PlateItem[] = [
    {
      background:
        'https://static-event.benghuai.com/new_mihoyo_homepage/images/download/cg/origin/2020-10-22.jpg',
      title: '汉化区',
      titleColor: '#fff',
      routeName: 'TranslatePlate',
    },

    {
      background: '',
      title: 'sample',
      routeName: 'Sample01',
    },

    {
      background: '',
      title: 'sample',
      routeName: 'Sample02',
    },
  ]

  return { plates }
})

export default usePlateStore
