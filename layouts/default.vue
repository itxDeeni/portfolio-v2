<template>
  <div class="app">
    <LayoutMatrixRain />
    <LazyLayoutTheNavbar />
    <main class="main-content">
      <slot />
    </main>
    <LazyLayoutTheFooter />
  </div>
</template>

<style scoped>
.app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.main-content {
  flex: 1;
  position: relative;
  z-index: 1;
}
</style>
