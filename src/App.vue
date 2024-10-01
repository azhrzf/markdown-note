<script setup lang="ts">
import { RouterView } from 'vue-router'
import ScrollPanel from 'primevue/scrollpanel'
import NavigationWrapper from '@/components/NavigationPanel/NavigationWrapper.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <main class="bg-[#181818] grid grid-cols-12 overflow-visible md:overflow-hidden">
    <ScrollPanel class="col-span-2 max-h-screen py-6">
      <NavigationWrapper />
    </ScrollPanel>
    <RouterView />
  </main>
</template>
