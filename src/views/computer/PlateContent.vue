<script setup lang="ts">
import Announcement from '@/features/plate/components/Announcement.vue'
import ArticleList from '@/features/plate/components/ArticleList.vue'
import CommicList from '@/features/plate/components/CommicList.vue'
import { PageTypeEnum } from '@/features/plate/enum'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const isArticlePage = computed<boolean>(
  () => route.meta.pageType === PageTypeEnum.ARTICLE
)
</script>

<template>
  <div id="plate-content">
    <Announcement />
    <div class="search">筛选 / 检索</div>

    <ArticleList v-if="isArticlePage" />
    <CommicList v-else />
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
