<script setup>
import { computed } from 'vue'
import { useNoteUpdaterStore } from '@/stores/updater'
import { sortNotes } from '@/stores/helpers'
import { useRoute } from 'vue-router'
import { RouterLink } from 'vue-router'
import { trimWords } from '@/stores/helpers'

const route = useRoute()
const currentNoteId = computed(() => route.params.noteId)

const latestNotes = computed(() => {
  const { notes } = useNoteUpdaterStore()
  return sortNotes(notes).slice(0, 3)
})
</script>

<template>
  <div class="space-y-2">
    <p class="text-xs text-gray-400 px-6">Recent Notes</p>
    <RouterLink
      v-for="note in latestNotes"
      :key="note.id"
      :to="`/n/${note.folder}/${note.id}`"
      class="px-6 py-2 flex items-center justify-between transition ease-in-out duration-300"
      :class="{
        'bg-[#333333] text-white': note.id === currentNoteId,
        'hover:bg-[#333333] text-gray-400 ': note.id !== currentNoteId
      }"
    >
      <div class="space-x-2 text-xs flex items-center">
        <i class="pi pi-file"></i>
        <span class="font-semibold">{{ trimWords(note.title, 4) }}</span>
      </div>
    </RouterLink>
  </div>
</template>
