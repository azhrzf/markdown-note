import { Timestamp } from 'firebase/firestore'
import { getTime } from './helpers'
import slugify from 'slugify'

export interface Folder {
  id: string
  name: string
  slug: string
  pinned: boolean
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface NewFolderMetadata {
  name: string
  slug: string
  pinned: boolean
}

export interface Note {
  id: string
  title: string
  content: string
  folder: string
  createdAt: Timestamp
  updatedAt: Timestamp
}

export interface NewNoteMetadata {
  title: string
  content: string
}

export function getNotesStorage() {
  if (localStorage.getItem('notes') === null) {
    localStorage.setItem('notes', JSON.stringify([]))
  }
  const item = localStorage.getItem('notes')
  return item ? JSON.parse(item) : []
}

export function addNoteStorage(newNoteMetadata: NewNoteMetadata, folderSlug: string) {
  const notes = getNotesStorage()

  const newNote = {
    id: (notes.length + 1).toString(),
    folder: folderSlug,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now(),
    ...newNoteMetadata
  }

  localStorage.setItem('notes', JSON.stringify([...notes, newNote]))

  return [...notes, newNote]
}

export function updateNotesStorage(id: string, newContent: string) {
  const notes = getNotesStorage().map((note: Note) => {
    if (note.id === id) {
      return { ...note, content: newContent, updatedAt: Timestamp.now() }
    }
    return note
  })

  localStorage.setItem('notes', JSON.stringify(notes))

  return notes
}

export function getFoldersStorage() {
  const newFolder = {
    id: `${getTime()}`,
    name: 'Not Specified',
    slug: `not-specified-${getTime()}`,
    pinned: false,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }

  if (localStorage.getItem('folders') === null) {
    localStorage.setItem('folders', JSON.stringify([newFolder]))
  }
  const item = localStorage.getItem('folders')
  if (item && Array.isArray(JSON.parse(item)) && JSON.parse(item).length === 0) {
    localStorage.setItem('folders', JSON.stringify([newFolder]))
  }
  return item ? JSON.parse(item) : [newFolder]
}

export function addFolderStorage(newFolderMetadata: NewFolderMetadata) {
  const { name, slug, pinned } = newFolderMetadata
  const folders = getFoldersStorage()
  let slugHandler = slugify(slug)

  if (folders.find((folder: Folder) => folder.slug === slug)) {
    slugHandler = `${slugHandler}-${getTime()}`
  }

  const newFolder = {
    id: `${getTime()}`,
    name,
    slug: slugHandler,
    pinned,
    createdAt: Timestamp.now(),
    updatedAt: Timestamp.now()
  }

  localStorage.setItem('folders', JSON.stringify([...folders, newFolder]))

  return [...folders, newFolder]
}

export function updateFoldersStorage(id: string, newFolderMetadata: NewFolderMetadata) {
  const folders = getFoldersStorage().map((folder: Folder) => {
    if (folder.id === id) {
      return { ...folder, ...newFolderMetadata, updatedAt: Timestamp.now() }
    }
    return folder
  })

  localStorage.setItem('folders', JSON.stringify(folders))
  return folders
}
