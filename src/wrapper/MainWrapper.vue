<script setup lang="ts">
import { computed } from 'vue'
import EditorWrapper from '@/components/EditorPanel/EditorWrapper.vue'
import 'primeicons/primeicons.css'

import { useRoute } from 'vue-router'

const route = useRoute()
const folderSlug = computed(() => route.params.folderSlug)
const noteId = computed(() => route.params.noteId)
</script>

<template>
  <div
    :class="{
      hidden: !folderSlug || noteId,
      block: folderSlug && !noteId
    }"
    class="bg-[#1C1C1C] md:col-span-4 lg:col-span-3 md:block overflow-visible md:overflow-y-scroll custom-scrollbar"
  >
    <slot></slot>
  </div>
  <section
    :class="{
      block: !folderSlug || noteId,
      hidden: folderSlug && !noteId
    }"
    class="md:col-span-8 lg:col-span-7 pt-6 md:block overflow-visible md:overflow-y-scroll custom-scrollbar"
  >
    <div class="px-4 md:px-6 min-h-screen w-full">
      <EditorWrapper />
    </div>
  </section>
</template>
