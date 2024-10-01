<script setup lang="ts">
import FreeEditor from '@/components/EditorPanel/FreeEditor.vue'
import ScrollPanel from 'primevue/scrollpanel'
</script>

<template>
  <ScrollPanel class="col-span-10">
    <div class="py-6 px-7 space-y-5 h-full">
      <div>
        <h2 class="text-xl font-semibold">Markdown Playground</h2>
        <p class="text-gray-400">
          Use this playground to try out markdown, write something down, or practice.
        </p>
      </div>
      <FreeEditor />
    </div>
  </ScrollPanel>
</template>
