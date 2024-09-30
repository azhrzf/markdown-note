<script setup>
import { RouterLink, RouterView } from 'vue-router'
import ScrollPanel from 'primevue/scrollpanel'
import EditorWrapper from '@/components/Editor/EditorWrapper.vue'
import NavigationWrapper from '@/components/Navigation/NavigationWrapper.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <main class="bg-[#181818] grid grid-cols-12 h-screen overflow-visible md:overflow-hidden">
    <!-- <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/about">About</RouterLink>
     -->
    <ScrollPanel class="col-span-2 max-h-screen py-6">
      <NavigationWrapper />
    </ScrollPanel>
    <ScrollPanel class="bg-[#1C1C1C] col-span-3 max-h-screen">
      <RouterView />
    </ScrollPanel>
    <ScrollPanel class="col-span-7 max-h-screen py-6 pr-6">
      <div class="px-6 h-full w-full">
        <EditorWrapper />
      </div>
    </ScrollPanel>
  </main>
</template>
