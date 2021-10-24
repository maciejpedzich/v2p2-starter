<script setup lang="ts">
import { useDark } from '@vueuse/core';

import InputSwitch from 'primevue/inputswitch';

const prefersDarkTheme = useDark({
  selector: 'link#theme',
  attribute: 'href',
  valueDark: '/themes/dark.min.css',
  valueLight: '/themes/light.min.css'
});
</script>

<template>
  <div class="flex align-items-center">
    <i class="pi pi-sun"></i>
    <InputSwitch v-model="prefersDarkTheme" class="mx-3" />
    <i class="pi pi-moon"></i>
  </div>
</template>
