<script setup lang="ts">
import { RouterView } from 'vue-router'
import NavigationWrapper from '@/components/NavigationPanel/NavigationWrapper.vue'
import 'primeicons/primeicons.css'
import DrawerWrapper from './components/NavigationPanel/DrawerSection/DrawerWrapper.vue'
</script>

<template>
  <header class="lg:hidden">
    <DrawerWrapper />
  </header>
  <main
    class="text-white bg-[#181818] md:grid grid-cols-12 md:h-screen overflow-visible md:overflow-hidden"
  >
    <section
      class="col-span-2 py-6 hidden lg:block overflow-visible md:overflow-y-scroll custom-scrollbar"
    >
      <NavigationWrapper />
    </section>
    <RouterView />
  </main>
</template>

<style>
.custom-scrollbar::-webkit-scrollbar {
  width: 12px;
}

.custom-scrollbar::-webkit-scrollbar-track {
  background: #1c1c1c;
}

.custom-scrollbar::-webkit-scrollbar-thumb {
  background-color: #333;
  border-radius: 10px;
  border: 3px solid #1c1c1c;
}

.custom-scrollbar::-webkit-scrollbar-thumb:hover {
  background-color: #2b2b2b;
}
</style>
