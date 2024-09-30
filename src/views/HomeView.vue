<script setup>
import { computed } from 'vue'
import NotesWrapper from '@/components/NotesPanel/NotesWrapper.vue'
import { useNoteUpdaterStore } from '@/stores/updater'
import { sortNotes } from '@/stores/helpers'

const filteredNotes = computed(() => sortNotes(useNoteUpdaterStore().notes))
</script>

<template>
  <div class="py-6 px-7">
    <NotesWrapper :notes="filteredNotes" />
  </div>
</template>
