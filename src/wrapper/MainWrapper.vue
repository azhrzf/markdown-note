<script setup>
import ScrollPanel from 'primevue/scrollpanel'
import EditorWrapper from '@/components/EditorPanel/EditorWrapper.vue'
import 'primeicons/primeicons.css'
</script>

<template>
  <ScrollPanel class="bg-[#1C1C1C] col-span-3 max-h-screen">
    <slot></slot>
  </ScrollPanel>
  <ScrollPanel class="col-span-7 max-h-screen py-6 pr-6">
    <div class="px-6 h-full w-full">
      <EditorWrapper />
    </div>
  </ScrollPanel>
</template>
