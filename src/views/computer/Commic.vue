<script setup lang="ts">
import BackButton from '@/components/button/BackButton.vue'
import PictureList from '@/features/commic/components/PictureList.vue'
import CommicComment from '@/features/commic/components/CommicComment.vue'
import MarkdownSample from '@/components/MarkdownSample.vue'

import { onMounted } from 'vue'
import { useCommicComment, useCommicStore } from '@/features/commic/hooks'
import { useRoute } from 'vue-router'
import { PictureListTypeEnum } from '@/features/commic/enums'
import { getFormattedDate } from '@/utils'

const route = useRoute()
const commic = useCommicStore()
const comment = useCommicComment()

onMounted(async (): Promise<void> => {
  const commicID = (route.query as { id: string }).id
  await commic.queryPages(commicID)
  await comment.queryList(commicID)
})

function submitComment(content: string): void {
  comment.addItem({
    id: Date.now().toString(),
    date: getFormattedDate(new Date(), 'yyyy-mm-dd'),
    floor: comment.list.length + 1,
    username: 'hyoryu',
    content,
  })
}
</script>

<template>
  <div id="commic">
    <BackButton class="back" />

    <PictureList
      class="pages"
      :list-type="PictureListTypeEnum.PAGE"
      :list="commic.pages"
    />

    <CommicComment class="comment" :list="comment.list" />
    <MarkdownSample @submit="submitComment" />
  </div>
</template>

<style scoped>
#commic {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.back {
  align-self: flex-start;
}

.pages {
  flex: 3;
}

.comment {
  flex: 1;
}
</style>
