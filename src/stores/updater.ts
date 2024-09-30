import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import {
  getNotesStorage,
  updateNotesStorage,
  getFoldersStorage,
  updateFoldersStorage,
  addNoteStorage,
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

  console.log(folders.value)

  function updateFolder(id: string, newFolderMetadata: NewFolderMetadata) {
    const newFolders = updateFoldersStorage(id, newFolderMetadata)

    folders.value = newFolders

    return newFolders
  }

  return { folders, updateFolder }
})
