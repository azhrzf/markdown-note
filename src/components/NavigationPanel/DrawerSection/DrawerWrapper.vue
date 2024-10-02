<script setup lang="ts">
import BrandTitle from '@/components/NavigationPanel/TitleSection/BrandTitle.vue'
import NavigationDrawer from './NavigationDrawer.vue'
</script>

<template>
  <div class="px-4 py-3">
    <div class="flex justify-between items-center">
      <BrandTitle />
      <div class="space-x-5 flex items-center">
        <NavigationDrawer />
      </div>
    </div>
  </div>
</template>
