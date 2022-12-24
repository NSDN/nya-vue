<script setup lang="ts">
defineProps<{
  icon: string
  username: string
  article: string
  floorNumber: number
  attachment: string[]
}>()
</script>

<template>
  <div id="floor">
    <div class="personal-info">
      <span class="icon" />
      <span class="userinfo">{{ username }}</span>
    </div>

    <div class="article-container">
      <div class="status">#{{ floorNumber }}</div>
      <div class="article" v-html="article" />
      <div class="attachment">attachment</div>
    </div>
  </div>
</template>

<style scoped>
#floor {
  background: #ebebeb;
  display: flex;
  min-height: 13rem;
}

.personal-info {
  align-items: center;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  width: 10rem;
}

.icon {
  background: #fff;
  border: 1px solid #000;
  box-sizing: border-box;
  height: 120px;
  width: 120px;
}

.userinfo {
  margin: 1rem 0 0;
}

.article-container {
  box-sizing: border-box;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 1rem 1rem 1rem 0;
}

.status {
  text-align: end;
}

.article {
  box-sizing: border-box;
  flex: 1;
  padding: 1rem 0;
  white-space: pre-line;
}

.attachment {
  border-top: 1px solid #000;
}
</style>
