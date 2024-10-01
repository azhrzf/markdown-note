<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import NotesWrapper from '@/components/NotesPanel/NotesWrapper.vue'
import { useNoteUpdaterStore, useFolderUpdaterStore } from '@/stores/updater'
import EmptyNote from '@/components/NotesPanel/EmptyNote.vue'
import { sortNotes, findFolderNameBySlug } from '@/stores/helpers'
import MainWrapper from '@/wrapper/MainWrapper.vue'

const route = useRoute()

const filteredNotes = computed(() =>
  sortNotes(useNoteUpdaterStore().notes.filter((note) => note.folder === route.params.folderSlug))
)

const folderName = computed(() => {
  const { folders } = useFolderUpdaterStore()
  return findFolderNameBySlug(folders, route.params.folderSlug)
})
</script>

<template>
  <MainWrapper>
    <div class="py-6 px-7 space-y-5">
      <h2 class="text-xl font-semibold">{{ folderName }}</h2>
      <NotesWrapper v-if="filteredNotes.length > 0" :notes="filteredNotes" />
      <EmptyNote v-else />
    </div>
  </MainWrapper>
</template>
