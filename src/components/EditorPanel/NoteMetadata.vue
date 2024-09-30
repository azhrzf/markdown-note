<script setup>
import { computed } from 'vue'
import { defineProps } from 'vue'
import { useFolderUpdaterStore } from '@/stores/updater'
import { findFolderNameBySlug } from '@/stores/helpers'

const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      createdAt: { seconds: 0, nanoseconds: 0 },
      updatedAt: { seconds: 0, nanoseconds: 0 },
      folder: ''
    })
  }
})

const folderName = computed(() => {
  const { folders } = useFolderUpdaterStore()
  return findFolderNameBySlug(folders, props.note.folder)
})
</script>

<template>
  <div class="space-y-5">
    <h2 class="text-xl font-semibold">{{ props.note.title }}</h2>
    <table>
      <tbody>
        <tr>
          <td><i class="cols-3 pi pi-calendar text-gray-400"></i></td>
          <td><p class="cols-1 text-xs pl-4 pr-16 text-gray-400">Created</p></td>
          <td>
            <p class="cols-2 text-xs">{{ props.note.createdAt }}</p>
          </td>
        </tr>
        <tr>
          <td><i class="cols-3 pi pi-calendar text-gray-400"></i></td>
          <td><p class="cols-1 text-xs pl-4 pr-16 text-gray-400">Updated</p></td>
          <td>
            <p class="cols-2 text-xs">{{ props.note.updatedAt }}</p>
          </td>
        </tr>
        <tr>
          <td><i class="cols-3 pi pi-folder text-gray-400"></i></td>
          <td><p class="cols-1 text-xs pl-4 pr-16 text-gray-400">Folder</p></td>
          <td>
            <p class="cols-2 text-xs">{{ folderName }}</p>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
