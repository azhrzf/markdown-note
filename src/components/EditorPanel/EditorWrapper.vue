<script setup>
import { ref, computed, watch } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import NoteMetadata from './NoteMetadata.vue'
import { useRoute } from 'vue-router'
import { useNoteUpdaterStore } from '@/stores/updater'
import { formatTimestamp } from '@/stores/helpers'

const route = useRoute()
const currentNoteId = computed(() => route.params.noteId)
const lastValidNoteId = ref(currentNoteId.value)

const { getCurrentNote, updateNotes } = useNoteUpdaterStore()
const currentNote = ref(getCurrentNote(currentNoteId.value))

const text = ref(currentNote.value?.content || '')
const fullMetadata = ref(currentNote.value || {})

watch(currentNoteId, (newNoteId) => {
  if (newNoteId) {
    lastValidNoteId.value = newNoteId
    const newNote = getCurrentNote(newNoteId)
    currentNote.value = newNote
    text.value = newNote.content || ''
    const castNewValue = {
      ...newNote,
      createdAt: formatTimestamp(newNote.createdAt, true),
      updatedAt: formatTimestamp(newNote.updatedAt, true)
    }

    fullMetadata.value = castNewValue
  }
})

const handleTextChange = (newContent) => {
  updateNotes(lastValidNoteId.value, {
    title: currentNote.value.title,
    content: newContent,
    folder: currentNote.value.folder
  })
}
</script>

<template>
  <div class="space-y-6 h-full w-full">
    <NoteMetadata :note="fullMetadata" />
    <MdEditor
      class="markdown-editor"
      v-model="text"
      language="en-US"
      theme="dark"
      @change="handleTextChange"
    />
  </div>
</template>

<style scoped>
.markdown-editor {
  height: 100%;
  background-color: #181818;
}
</style>
