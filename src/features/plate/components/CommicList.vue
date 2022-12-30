<template>
  <div id="commic-list">
    <button class="commic-item" v-for="item in 30" @click="">
      <img
        src="https://static-event.benghuai.com/new_mihoyo_homepage/images/download/cg/origin/2020-09-24.jpg"
        alt="image"
      />

      <span>这是帖文的示例（测试过长的主题标题）</span>
    </button>
  </div>
</template>

<style scoped>
#commic-list {
  background: rgba(255, 255, 255, 0.6);
  border-radius: 3px;
  box-shadow: 0 1px 8px 0 #888;
  display: grid;
  flex: 1 1 0;
  gap: 1rem;
  grid-template-columns: repeat(auto-fill, 8rem);
  justify-content: center;
  margin: 1rem 0 0;
  overflow: auto;
  padding: 2rem 1rem;
}

.commic-item {
  background: none;
  border: none;
  box-sizing: border-box;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  padding: 0;
  text-align: start;
}

.commic-item img {
  height: 10rem;
  object-fit: cover;
  width: 8rem;
}

.commic-item span {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  width: 8rem;
}
</style>
