<script setup lang="ts">
import ReloadToast from './components/ReloadToast.vue';
</script>

<template>
  <router-view></router-view>
  <ReloadToast />
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
