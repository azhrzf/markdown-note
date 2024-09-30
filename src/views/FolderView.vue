<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NotesWrapper from '@/components/Notes/NotesWrapper.vue'
import { useNoteUpdaterStore } from '@/stores/updater'
import { sortNotes } from '@/stores/helpers'

const route = useRoute()

const filteredNotes = computed(() =>
  sortNotes(useNoteUpdaterStore().notes.filter((note) => note.folder === route.params.folderSlug))
)
</script>

<template>
  <div class="py-6 px-7">
    <NotesWrapper :notes="filteredNotes" />
  </div>
</template>
