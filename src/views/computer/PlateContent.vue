<script setup lang="ts">
import Announcement from '@/features/plate/components/Announcement.vue'
import ArticleList from '@/features/article/components/ArticleList.vue'
import PictureList from '@/features/commic/components/PictureList.vue'

import { PageType } from '@/constant/enums'
import { computed, onBeforeMount } from 'vue'
import { useRoute } from 'vue-router'
import { useCommicStore } from '@/features/commic/hooks'
import { usePlateStore } from '@/features/plate/store'

const route = useRoute()
const plateStore = usePlateStore()

const isArticlePage = computed<boolean>(() => {
  const plate = plateStore.plates?.find(
    (item) => item.routeName === route.params.routeName,
  )

  // 如果没有获取到版块列表，默认按文字版块模式渲染画面
  if (!plate) {
    return true
  }

  return plate.pageType === PageType.ARTICLE
})

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
