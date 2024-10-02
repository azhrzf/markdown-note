<script setup lang="ts">
import FreeEditor from '@/components/EditorPanel/FreeEditor.vue'
</script>

<template>
  <div
    class="col-span-10 py-6 px-4 md:px-6 space-y-5 min-h-screen overflow-visible md:overflow-y-scroll custom-scrollbar"
  >
    <div>
      <h2 class="text-xl font-semibold">Markdown Playground</h2>
      <p class="text-gray-400">
        Use this playground to try out markdown, write something down, or practice.
      </p>
    </div>
    <FreeEditor />
  </div>
</template>
