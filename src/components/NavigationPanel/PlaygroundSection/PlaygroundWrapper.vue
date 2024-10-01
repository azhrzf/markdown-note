<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'

const route = useRoute()
const currentRouteName = computed(() => route.name)
</script>

<template>
  <RouterLink
    to="/playground"
    class="px-6 py-2 flex items-center justify-between transition ease-in-out duration-300"
    :class="{
      'bg-[#333333] text-white': currentRouteName === 'playground',
      'hover:bg-[#333333] text-gray-400 ': currentRouteName !== 'playground'
    }"
  >
    <div class="space-x-2 text-xs flex items-center">
      <i class="pi pi-play-circle" style="font-size: 0.75rem"></i>
      <span class="font-semibold">Markdown Playground</span>
      <i
        v-if="currentRouteName === 'playground'"
        class="pi pi-spin pi-expand"
        style="font-size: 0.5rem"
      ></i>
    </div>
  </RouterLink>
</template>
