<script setup>
import NoteCard from './NoteCard.vue'

const props = defineProps({
  notes: {
    type: Array,
    required: true
  }
})
</script>

<template>
  <div class="space-y-4">
    <NoteCard v-for="note in props.notes" :key="note.id" :note="note" />
  </div>
</template>
