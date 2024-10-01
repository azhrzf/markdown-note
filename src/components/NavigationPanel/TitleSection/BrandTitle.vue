<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div>
    <RouterLink to="/">
      <h1 class="text-2xl font-semibold italic transition ease-in-out duration-300 hover:scale-95">
        Markdown Notes
      </h1>
    </RouterLink>
    <p class="text-xs text-gray-400 italic">
      by:
      <a href="https://azhrzf.my.id/" class="hover:underline hover:text-white" target="_blank"
        >azhrzf</a
      >
    </p>
  </div>
</template>
