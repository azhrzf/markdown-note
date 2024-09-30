<script setup>
import { ref } from 'vue'
import Dialog from 'primevue/dialog'
import InputText from 'primevue/inputtext'
import { useFolderUpdaterStore } from '@/stores/updater'
import Toast from 'primevue/toast'
import { useToast } from 'primevue/usetoast'

const toast = useToast()
const dialogVisible = ref(false)

const { addFolder } = useFolderUpdaterStore()

const title = ref('New Folder')
const slug = ref('new-folder')

const handleSubmit = () => {
  if (!slug.value || !title.value) {
    toast.add({ severity: 'error', summary: 'Error', detail: 'Incomplete data', life: 3000 })
  } else {
    const note = addFolder({
      name: title.value,
      slug: slug.value,
      pinned: false
    })
    if (note) {
      toast.add({ severity: 'success', summary: 'Success', detail: 'Folder created', life: 3000 })
    } else {
      toast.add({
        severity: 'error',
        summary: 'Error',
        detail: 'Failed to create folder',
        life: 3000
      })
    }
  }
  visible.value = false
}
</script>

<template>
  <Toast />
  <button
    class="text-xs bg-[#242424] py-2 space-x-2 w-full rounded-md flex items-center justify-center transition ease-in-out duration-300 hover:bg-[#333333]"
    @click="dialogVisible = true"
  >
    <i class="pi pi-folder" style="font-size: 0.75rem"></i><span>New Folder</span>
  </button>
  <Dialog
    v-model:visible="dialogVisible"
    modal
    header="Create a New Folder"
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
          placeholder="Folder Title"
          v-model="title"
        />
      </div>
      <div class="grid grid-cols-6 items-center gap-4 mb-4">
        <label for="title" class="col-span-1 font-semibold w-14">Slug</label>
        <InputText
          id="slug"
          class="col-span-5 flex-auto"
          autocomplete="off"
          placeholder="folder-title"
          v-model="slug"
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
