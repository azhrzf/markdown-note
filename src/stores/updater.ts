import { ref, computed } from 'vue'
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

  function addNote(newNoteMetadata: NewNoteMetadata, folderSlug: string) {
    const newNotes = addNoteStorage(newNoteMetadata, folderSlug)
    notes.value = newNotes

    return newNotes
  }

  function updateNotes(id: string, newContent: string) {
    const newNotes = updateNotesStorage(id, newContent)
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
