<template>
  <div
    class="
      w-full
      h-full
      flex flex-column
      align-items-center
      justify-content-center
    "
  >
    <div id="title" class="text-6xl font-bold mb-2">V2P2 Starter</div>
    <div class="text-2xl font-light mb-2">
      Template for web apps using Vue 3, Vite, and PrimeVue with PWA support.
      Also featuring:
    </div>
    <div id="featuring" class="flex text-lg mt-2">
      <span>TypeScript</span>
      <span>Vue Router</span>
      <span>ESLint</span>
      <span>Prettier</span>
      <span>Jest</span>
      <span>Cypress</span>
    </div>
  </div>
</template>

<style scoped>
#featuring span {
  margin-right: 1rem;
  padding-right: 1rem;
  border-right: 1px solid var(--surface-500);
}

#featuring span:last-of-type {
  border-right: none;
}
</style>
