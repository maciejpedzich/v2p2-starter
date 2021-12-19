<script setup lang="ts">
import ReloadToast from './components/ReloadToast.vue';
</script>

<template>
  <div
    class="w-full h-full flex flex-column align-items-center justify-content-center"
  >
    <router-view></router-view>
  </div>
  <ReloadToast id="reload-toast" />
</template>

<style>
body {
  color: var(--text-color);
  font-family: var(--font-family);
}

#reload-toast .p-toast-message .p-toast-message-content {
  justify-content: center !important;
}
</style>
