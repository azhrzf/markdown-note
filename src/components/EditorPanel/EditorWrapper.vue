<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { MdEditor } from 'md-editor-v3'
import 'md-editor-v3/lib/style.css'
import NoteMetadata from './NoteMetadata.vue'
import { useRoute } from 'vue-router'
import { useNoteUpdaterStore, useFreeEditorStore } from '@/stores/updater'
import { RouterLink } from 'vue-router'

const route = useRoute()
const currentNoteId = computed(() => {
  const noteId = route.params.noteId
  return Array.isArray(noteId) ? noteId[0] : noteId
})
const lastValidNoteId = ref(currentNoteId.value)

const { getCurrentNote, updateNotes } = useNoteUpdaterStore()
const currentNote = ref(getCurrentNote(currentNoteId.value))

const text = ref(currentNote.value?.content || '')
const fullMetadata = ref(currentNote.value || {})

watch(currentNoteId, (newNoteId) => {
  lastValidNoteId.value = newNoteId
  const newNote = getCurrentNote(newNoteId)
  currentNote.value = newNote
  text.value = newNote.content || ''

  fullMetadata.value = newNote
})

const handleTextChange = (newContent: string) => {
  updateNotes(lastValidNoteId.value, {
    title: currentNote.value.title,
    content: newContent,
    folder: currentNote.value.folder
  })
}

const { text: textFreeEditor, setText } = useFreeEditorStore()
const textPlaceholder = ref(textFreeEditor)

const handleTextPlaceholderChange = (newContent: string) => {
  textPlaceholder.value = setText(newContent)
}
</script>

<template>
  <div v-if="fullMetadata.title" class="space-y-6 h-full w-full">
    <NoteMetadata :note="fullMetadata" />
    <MdEditor
      class="markdown-editor"
      v-model="text"
      language="en-US"
      theme="dark"
      @change="handleTextChange"
    />
  </div>
  <div v-else class="space-y-6 h-full w-full">
    <div>
      <h2 class="text-xl">Welcome to Markdown Notes</h2>
      <p class="text-gray-400">
        Select, create a new note, or use the
        <RouterLink to="playground" class="underline hover:text-white"> playground </RouterLink>
      </p>
    </div>
    <MdEditor
      class="markdown-editor"
      v-model="textPlaceholder"
      language="en-US"
      theme="dark"
      @change="handleTextPlaceholderChange"
    />
  </div>
</template>

<style scoped>
.markdown-editor {
  height: 100%;
  background-color: #181818;
}
</style>
