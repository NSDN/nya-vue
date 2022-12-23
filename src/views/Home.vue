<script setup lang="ts">
import Floor from '@/features/floor/components/Floor.vue'
import Tiptap from '@/components/Tiptap.vue'

import type { FloorTypes } from '@/features/floor/types'

const floors: FloorTypes.FloorInfo[] = [
  {
    icon: '',
    username: 'Lv.1 大毛玉',
    article:
      '　　历史把那些为共同目标工作因而自己变得高尚的人称为最伟大的人物；经验赞美那些为大多数人带来幸福的人是最幸福的人；宗教本身也教诲我们，人人敬仰的典范，就曾为人类而牺牲自己──有谁敢否定这类教诲呢？\n　　如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家作出的牺牲；那时我们所享受的就不是可怜的、有限的、自私的乐趣，我们的幸福将属于千百万人，我们的事业将悄然无声地存在下去，但是它会永远发挥作用，而面对我们的骨灰，高尚的人们将洒下热泪。',
    floorNumber: 1,
    attachment: [],
  },

  {
    icon: '',
    username: 'Lv.2 大毛玉',
    article:
      '　　历史把那些为共同目标工作因而自己变得高尚的人称为最伟大的人物；经验赞美那些为大多数人带来幸福的人是最幸福的人；宗教本身也教诲我们，人人敬仰的典范，就曾为人类而牺牲自己──有谁敢否定这类教诲呢？\n　　如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家作出的牺牲；那时我们所享受的就不是可怜的、有限的、自私的乐趣，我们的幸福将属于千百万人，我们的事业将悄然无声地存在下去，但是它会永远发挥作用，而面对我们的骨灰，高尚的人们将洒下热泪。',
    floorNumber: 2,
    attachment: [],
  },

  {
    icon: '',
    username: 'Lv.3 大毛玉',
    article:
      '　　历史把那些为共同目标工作因而自己变得高尚的人称为最伟大的人物；经验赞美那些为大多数人带来幸福的人是最幸福的人；宗教本身也教诲我们，人人敬仰的典范，就曾为人类而牺牲自己──有谁敢否定这类教诲呢？\n　　如果我们选择了最能为人类而工作的职业，那么，重担就不能把我们压倒，因为这是为大家作出的牺牲；那时我们所享受的就不是可怜的、有限的、自私的乐趣，我们的幸福将属于千百万人，我们的事业将悄然无声地存在下去，但是它会永远发挥作用，而面对我们的骨灰，高尚的人们将洒下热泪。',
    floorNumber: 3,
    attachment: [],
  },
]
</script>

<template>
  <div id="home">
    <Floor
      v-for="item of floors"
      :key="item.floorNumber.toString()"
      :icon="item.icon"
      :username="item.username"
      :article="item.article"
      :floor-number="item.floorNumber"
      :attachment="item.attachment"
    />
  </div>

  <Tiptap />
</template>
