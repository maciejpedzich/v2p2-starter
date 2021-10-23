<template>
  <div id="title" class="lg:text-6xl text-5xl text-center font-bold mb-2">
    V2P2 Starter
  </div>
  <div class="lg:text-2xl text-xl text-center font-light mb-2">
    Template for web apps using Vue 3, Vite, and PrimeVue with PWA support. Also
    featuring:
  </div>
  <div
    id="featuring"
    class="flex flex-wrap justify-content-center lg:text-lg text-md mt-2"
  >
    <span>TypeScript</span>
    <span>Vue Router</span>
    <span>ESLint</span>
    <span>Prettier</span>
    <span>Jest</span>
    <span>Cypress</span>
  </div>
</template>

<style scoped>
#featuring span {
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid var(--surface-500);
}

#featuring span:last-of-type {
  margin-right: 0;
  padding-right: 0;
  border-right: none;
}
</style>
