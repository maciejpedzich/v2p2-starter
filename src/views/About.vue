<script setup lang="ts">
const currentYear = new Date().getFullYear();
</script>

<template>
  <div class="lg:text-6xl text-5xl font-bold mb-2">About</div>
  <div class="lg:text-lg text-md mb-2">V2P2 Starter v1.1.0</div>
  <div class="lg:text-lg text-md mb-2">
    &copy; 2020-{{ currentYear }} Maciej Pędzich, released under MIT License
  </div>
</template>
