import { type Note } from './storage'

interface FirestoreTimestamp {
  seconds: number
  nanoseconds: number
}

export function sortNotes(notes: Note[]): Note[] {
  return notes.sort((a, b) => {
    const aDate = firestoreTimestampToDate(a.updatedAt)
    const bDate = firestoreTimestampToDate(b.updatedAt)
    return bDate.getTime() - aDate.getTime()
  })
}

export function trimWords(words: string, maxWords: number): string {
  if (words.split(' ').length > maxWords) {
    return words.split(' ').slice(0, maxWords).join(' ') + '...'
  }
  return words
}

function firestoreTimestampToDate(timestamp: FirestoreTimestamp): Date {
  return new Date(timestamp.seconds * 1000 + timestamp.nanoseconds / 1000000)
}

export function formatTimestamp(timestamp: FirestoreTimestamp, detailed: boolean = false): string {
  const date = firestoreTimestampToDate(timestamp)

  const setDetailed = date.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })

  const setSimple = date.toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return detailed ? setDetailed : setSimple
}

export function getTime() {
  const date = new Date()
  return date.getTime()
}
