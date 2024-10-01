import { ref } from 'vue'
import { defineStore } from 'pinia'
import {
  getNotesStorage,
  addNoteStorage,
  updateNotesStorage,
  getFoldersStorage,
  addFolderStorage,
  updateFoldersStorage,
  type Note,
  type NewNoteMetadata,
  type NewFolderMetadata
} from './storage'

export const useNoteUpdaterStore = defineStore('noteUpdater', () => {
  const notes = ref(getNotesStorage())

  function getCurrentNote(id: string) {
    return notes.value.find((note: Note) => note.id === id)
  }

  function addNote(newNoteMetadata: NewNoteMetadata) {
    const newNotes = addNoteStorage(newNoteMetadata)
    notes.value = newNotes

    return newNotes
  }

  function updateNotes(id: string, newNoteMetadata: NewNoteMetadata) {
    const newNotes = updateNotesStorage(id, newNoteMetadata)
    notes.value = newNotes

    return newNotes
  }

  return { notes, getCurrentNote, addNote, updateNotes }
})

export const useFolderUpdaterStore = defineStore('folderUpdater', () => {
  const folders = ref(getFoldersStorage())

  function addFolder(newFolderMetadata: NewFolderMetadata) {
    const newFolders = addFolderStorage(newFolderMetadata)

    folders.value = newFolders

    return newFolders
  }

  function updateFolder(id: string, newFolderMetadata: NewFolderMetadata) {
    const newFolders = updateFoldersStorage(id, newFolderMetadata)

    folders.value = newFolders

    return newFolders
  }

  return { folders, addFolder, updateFolder }
})

export const useFreeEditorStore = defineStore('freeEditor', () => {
  const text = ref('> **~~<u>*Welcome to Markdown Notes*</u>~~**')

  function setText(newText: string) {
    text.value = newText

    return newText
  }

  return { text, setText }
})
