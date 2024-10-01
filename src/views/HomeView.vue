<script setup>
import { computed } from 'vue'
import NotesWrapper from '@/components/NotesPanel/NotesWrapper.vue'
import { useNoteUpdaterStore } from '@/stores/updater'
import { sortNotes } from '@/stores/helpers'
import EmptyNote from '@/components/NotesPanel/EmptyNote.vue'
import MainWrapper from '@/wrapper/MainWrapper.vue'

const filteredNotes = computed(() => sortNotes(useNoteUpdaterStore().notes))
</script>

<template>
  <MainWrapper>
    <div class="py-6 px-7 space-y-5">
      <h2 class="text-xl font-semibold">Latest</h2>
      <NotesWrapper v-if="filteredNotes.length > 0" :notes="filteredNotes" />
      <EmptyNote v-else />
    </div>
  </MainWrapper>
</template>
