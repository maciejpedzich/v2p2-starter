<script setup lang="ts">
import InputSwitch from 'primevue/inputswitch';
import useThemeSwitch from '../composables/useThemeSwitch';

const { prefersDarkTheme } = useThemeSwitch();
</script>

<template>
  <div class="flex align-items-center">
    <i class="pi pi-sun"></i>
    <InputSwitch v-model="prefersDarkTheme" class="mx-3" />
    <i class="pi pi-moon"></i>
  </div>
</template>
