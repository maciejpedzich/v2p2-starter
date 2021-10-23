<script setup lang="ts">
import { ref } from 'vue';

import Menubar from 'primevue/menubar';
import { PrimeIcons } from 'primevue/api';

const menuItems = ref([
  {
    label: 'Home',
    icon: PrimeIcons.HOME,
    to: '/'
  },
  {
    label: 'About',
    icon: PrimeIcons.INFO_CIRCLE,
    to: '/about'
  },
  {
    label: 'Source code',
    icon: PrimeIcons.GITHUB,
    url: 'https://github.com/maciejpedzich/v2p2-starter'
  }
]);
</script>

<template>
  <Menubar class="top-0 left-0 w-full fixed" :model="menuItems">
    <template #start>
      <strong class="mx-2 md:mx-5">V2P2 Starter</strong>
    </template>
  </Menubar>
</template>
