<script setup lang="ts">
import PictureList from '@/features/commic/components/PictureList.vue'
import { PictureListTypeEnum } from '@/features/commic/enums'
import { useUploadCommic } from '../hooks'

const commicUploader = useUploadCommic()
</script>

<template>
  <div class="upload-commic-wrapper">
    <input
      id="file-uploader"
      style="display: none"
      type="file"
      multiple
      accept="image/jpeg, image/png, image/jpg"
      @change="commicUploader.uploadPages"
    />

    <div class="button-group">
      <label for="file-uploader">上传图片</label>
      <button @click="commicUploader.commitTopic">提交主题</button>
    </div>

    <PictureList
      :list="commicUploader.pages"
      :list-type="PictureListTypeEnum.PAGE"
    />
  </div>
</template>

<style scoped>
.upload-commic-wrapper {
  display: flex;
  flex: 1;
  flex-direction: column;
  margin: 1.5rem 0 0;
}

.button-group {
  display: flex;
  justify-content: space-between;
}

.button-group label {
  align-items: center;
  background: #eee;
  border: 1px solid #888;
  box-sizing: border-box;
  display: flex;
  height: 2rem;
  justify-content: center;
  width: 6rem;
}

.button-group button {
  font-size: 1rem;
  height: 2rem;
  width: 6rem;
}

.upload-commic-wrapper label:active {
  background: rgba(238, 238, 238, 0.8);
}
</style>
