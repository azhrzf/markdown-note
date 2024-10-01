<script setup>
import { ref, computed, watch } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import Select from 'primevue/select'
import { useFolderUpdaterStore } from '@/stores/updater'
import { useNoteUpdaterStore } from '@/stores/updater'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'
import { useRoute } from 'vue-router'

const toast = useToast()
const dialogVisible = ref(false)

const route = useRoute()
const currentFolderSlug = computed(() => route.params.folderSlug || '')

const { addNote } = useNoteUpdaterStore()
const folders = computed(() => useFolderUpdaterStore().folders)

const selectedFolder = ref(folders.value.find((folder) => folder.slug === currentFolderSlug.value))
const title = ref('New Note')

watch(
  [folders, currentFolderSlug],
  ([newFolders, newFolderSlug]) => {
    selectedFolder.value = newFolders.find((folder) => folder.slug === newFolderSlug)
  },
  { immediate: true }
)

const handleSubmit = () => {
  if (!selectedFolder.value || !title.value) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Incomplete data', life: 3000 })
  } else {
    const note = addNote({
      title: title.value,
      content: '**~~*Hello World!*~~**',
      folder: selectedFolder.value.slug
    })
    if (note) {
      toast.add({ severity: 'success', summary: 'Success', detail: 'Note created', life: 3000 })
      console.log(note)
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to create note',
        life: 3000
      })
    }
  }
  dialogVisible.value = false
}
</script>

<template>
  <Toast />
  <button
    class="text-xs bg-[#242424] py-2 space-x-2 w-full rounded-md flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#333333]"
    @click="dialogVisible = true"
  >
    <i class="pi pi-file" style="font-size: 0.75rem"></i><span>New Note</span>
  </button>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Create a New Note"
    :style="{ width: '25rem' }"
  >
    <span class="text-surface-500 dark:text-surface-400 block mb-8"
      >Create a new note into a folder</span
    >
    <form @submit.prevent="handleSubmit">
      <div class="grid grid-cols-6 items-center gap-4 mb-4">
        <label for="title" class="col-span-1 font-semibold w-14">Title</label>
        <InputText
          id="title"
          class="col-span-5 flex-auto"
          autocomplete="off"
          placeholder="Note Title"
          v-model="title"
        />
      </div>
      <div class="grid grid-cols-6 items-center gap-4 mb-4">
        <label for="folder" class="col-span-1 font-semibold w-14">Folder</label>
        <Select
          v-model="selectedFolder"
          :options="folders"
          optionLabel="name"
          placeholder="Select a Folder"
          checkmark
          :highlightOnSelect="false"
          class="col-span-5 w-full"
        />
      </div>
      <div class="flex justify-end gap-2">
        <Button
          type="submit"
          label="Save"
          @click="dialogVisible = false"
          class="bg-[#242424] rounded-md px-3 py-1 transition ease-in-out duration-300 hover:bg-[#333333]"
          >Create</Button
        >
      </div>
    </form>
  </Dialog>
</template>
