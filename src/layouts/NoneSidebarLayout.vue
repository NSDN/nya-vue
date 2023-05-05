<template>
  <div id="main-layout">
    <header>header</header>

    <div class="middle">
      <div class="content"><RouterView /></div>
    </div>

    <footer>footer</footer>
  </div>
</template>

<style scoped>
#main-layout {
  background: url('https://static-event.benghuai.com/new_mihoyo_homepage/images/download/cg/origin/2020-11-12.jpg');
  background-size: cover;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

#main-layout header {
  align-items: center;
  background: rgba(255, 0, 0, 0.8);
  display: flex;
  height: 5rem;
  justify-content: center;
}

.middle {
  display: flex;
  flex: 1 1 0;
  overflow: auto;
}

.middle .content {
  background: rgba(255, 192, 203, 0.8);
  box-sizing: border-box;
  display: flex;
  flex: 1;
  padding: var(--common-content-padding);
  overflow: auto;
}

#main-layout footer {
  align-items: center;
  background: rgba(0, 128, 0, 0.8);
  display: flex;
  height: 2rem;
  justify-content: center;
}
</style>
