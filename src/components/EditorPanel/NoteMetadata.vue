<script setup lang="ts">
import { ref, computed, watch } from 'vue'
import { defineProps } from 'vue'
import { useNoteUpdaterStore, useFolderUpdaterStore } from '@/stores/updater'
import { findFolderNameBySlug } from '@/stores/helpers'
import { type Folder } from '@/stores/storage'
import Textarea from 'primevue/textarea'
import Select from 'primevue/select'
import { formatTimestamp } from '@/stores/helpers'

const props = defineProps({
  note: {
    type: Object,
    required: true
  }
})

const folders = computed(() => useFolderUpdaterStore().folders)

const folderName = computed(() => {
  return findFolderNameBySlug(folders.value, props.note.folder)
})

const editTitle = ref(false)
const title = ref(props.note.title)

watch(
  () => props.note.title,
  (newTitle) => {
    title.value = newTitle
  }
)

function handleTitleBlur() {
  updateNotes(props.note.id, {
    title: title.value,
    content: props.note.content,
    folder: props.note.folder
  })
  editTitle.value = false
}

const editFolder = ref(false)
const selectedFolder = ref<Folder | null>(null)

watch(
  [folders, () => props.note.folder],
  ([newFolders, newFolderSlug]) => {
    selectedFolder.value = newFolders.find((folder: Folder) => folder.slug === newFolderSlug)
  },
  { immediate: true }
)

const { updateNotes } = useNoteUpdaterStore()

function handleFolderChange(event: { value: { slug: string } }) {
  updateNotes(props.note.id, {
    title: props.note.title,
    content: props.note.content,
    folder: event.value.slug
  })
}
</script>

<template>
  <div class="space-y-5">
    <div class="space-x-2">
      <Textarea v-if="editTitle" v-model="title" class="w-full" @blur="handleTitleBlur" />
      <h2 v-else class="inline text-xl font-semibold">{{ title }}</h2>
      <button
        @click="editTitle = !editTitle"
        class="text-gray-400 transition ease-in-out duration-300 hover:text-white"
      >
        <i class="pi pi-pen-to-square" style="font-size: 1rem"></i>
      </button>
    </div>
    <table>
      <tbody>
        <tr>
          <td><i class="cols-3 pi pi-calendar text-gray-400"></i></td>
          <td><p class="cols-1 text-xs px-4 text-gray-400">Created</p></td>
          <td>
            <p class="cols-2 text-xs">{{ formatTimestamp(props.note.createdAt, true) }}</p>
          </td>
        </tr>
        <tr>
          <td><i class="cols-3 pi pi-calendar text-gray-400"></i></td>
          <td><p class="cols-1 text-xs px-4 text-gray-400">Updated</p></td>
          <td>
            <p class="cols-2 text-xs">{{ formatTimestamp(props.note.updatedAt, true) }}</p>
          </td>
        </tr>
        <tr>
          <td><i class="cols-3 pi pi-folder text-gray-400"></i></td>
          <td><p class="cols-1 text-xs px-4 text-gray-400">Folder</p></td>
          <td class="flex items-center space-x-2">
            <Select
              v-if="editFolder"
              v-model="selectedFolder"
              :options="folders"
              @change="handleFolderChange"
              optionLabel="name"
              placeholder="Select a Folder"
              checkmark
              :highlightOnSelect="false"
              class="w-full text-xs h-6 items-center"
            />
            <p v-else class="cols-2 text-xs">{{ selectedFolder?.name || folderName }}</p>
            <button
              @click="editFolder = !editFolder"
              class="text-gray-400 transition ease-in-out duration-300 hover:text-white"
            >
              <i class="pi pi-pen-to-square" style="font-size: 0.75rem"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
