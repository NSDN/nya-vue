<script setup lang="ts">
import Announcement from '@/features/plate/components/Announcement.vue'
import ArticleList from '@/features/article/components/ArticleList.vue'
import PictureList from '@/features/commic/components/PictureList.vue'

import { PageTypeEnum } from '@/features/plate/enum'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useCommicStore } from '@/features/commic/hooks'

const route = useRoute()

const isArticlePage = computed<boolean>(
  () => route.meta.pageType === PageTypeEnum.ARTICLE
)

const commic = useCommicStore()

onBeforeMount(async (): Promise<void> => {
  // TODO: 请求文章
  isArticlePage.value ? () => {} : await commic.queryList()
})
</script>

<template>
  <div id="plate-content">
    <Announcement />

    <div class="search">筛选 / 检索</div>

    <ArticleList v-if="isArticlePage" />

    <PictureList
      v-else
      :list="commic.list"
      @click-item="commic.clickListItem"
    />
  </div>
</template>

<style scoped>
#plate-content {
  display: flex;
  flex: 1;
  flex-direction: column;
}

.search {
  align-items: center;
  background: rgba(255, 255, 255, 0.6);
  display: flex;
  height: 5rem;
  justify-content: center;
  margin: 1rem 0 0;
}
</style>
