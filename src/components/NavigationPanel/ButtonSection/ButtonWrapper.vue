<script setup>
import AddFolder from './AddFolder.vue'
import AddNote from './AddNote.vue'
</script>

<template>
  <div class="grid grid-cols-4 gap-x-2">
    <div class="col-span-2">
      <AddFolder />
    </div>
    <div class="col-span-2">
      <AddNote />
    </div>
  </div>
</template>
