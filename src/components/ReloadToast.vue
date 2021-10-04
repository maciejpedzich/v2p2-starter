<script setup lang="ts">
import { watch } from 'vue';
import { useRegisterSW } from 'virtual:pwa-register/vue';

import Button from 'primevue/button';
import Toast from 'primevue/toast';
import { useToast } from 'primevue/usetoast';

const toast = useToast();
const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW();

const close = async () => {
  offlineReady.value = false;
  needRefresh.value = false;
  toast.removeGroup('reload');
};

watch(
  [offlineReady, needRefresh],
  ([newOfflineReadyValue, newNeedRefreshValue]) => {
    if (newOfflineReadyValue || newNeedRefreshValue) {
      const detail = newOfflineReadyValue
        ? 'App is ready to work offline!'
        : 'There is new content available! Click reload to update';

      toast.add({
        closable: false,
        severity: 'info',
        group: 'reload',
        detail
      });
    }
  }
);
</script>

<template>
  <Toast id="reload-toast" position="bottom-right" group="reload">
    <template #message="slotProps">
      <div class="p-d-flex p-flex-column">
        <div class="p-text-center text-lg">
          <p class="mt-0">{{ slotProps.message.detail }}</p>
        </div>
        <div class="grid w-full">
          <div v-if="needRefresh" class="p-col-6">
            <Button
              class="p-button-success"
              label="Reload"
              @click="updateServiceWorker"
            ></Button>
          </div>
          <div :class="['p-col-6', !needRefresh ? 'col-offset-4' : '']">
            <Button
              class="p-button-secondary"
              label="Close"
              @click="close"
            ></Button>
          </div>
        </div>
      </div>
    </template>
  </Toast>
</template>
