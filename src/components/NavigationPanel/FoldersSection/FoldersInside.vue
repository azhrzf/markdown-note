<script setup>
import { computed } from 'vue'
import { useFolderUpdaterStore } from '@/stores/updater'
import FolderButton from './FolderButton.vue'

const pinnedFolders = computed(() =>
  useFolderUpdaterStore()
    .folders.filter((folder) => folder.pinned)
    .sort((a, b) => b.updatedAt - a.updatedAt)
)
const insideFolders = computed(() =>
  useFolderUpdaterStore()
    .folders.filter((folder) => !folder.pinned)
    .sort((a, b) => b.updatedAt - a.updatedAt)
)
</script>

<template>
  <div class="space-y-2 text-gray-400">
    <p class="text-xs px-6">Folders</p>
    <div>
      <div class="px-6 py-2 flex items-center justify-between">
        <div class="space-x-2 text-xs flex items-center">
          <i class="pi pi-cloud"></i>
          <span class="font-semibold">Lorem ipsum dolor, sit amet.</span>
        </div>
        <i class="pi pi-thumbtack pin"></i>
      </div>
      <FolderButton
        v-for="folder in pinnedFolders"
        :key="folder.id"
        :folder="folder"
        :pinned="true"
      />
      <FolderButton
        v-for="folder in insideFolders"
        :key="folder.id"
        :folder="folder"
        :pinned="false"
      />
    </div>
  </div>
</template>

<style scoped>
.pin {
  font-size: 0.75rem;
}
</style>
