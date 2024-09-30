<script setup>
import BrandTitle from './BrandTitle.vue'
import AddButton from './AddButton.vue'
import RecentsNotes from './RecentsNotes.vue'
import FoldersInside from './FoldersInside.vue'
import MoreNav from './MoreNav.vue'
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-5 px-6">
      <BrandTitle />
      <AddButton />
    </div>
    <RecentsNotes />
    <FoldersInside />
    <MoreNav />
  </div>
</template>
