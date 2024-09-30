<script setup>
import { ref, computed } from 'vue'
import { RouterLink } from 'vue-router'
import { trimWords } from '@/stores/helpers'
import { useRoute } from 'vue-router'
import ContextMenu from 'primevue/contextmenu'

const route = useRoute()
const folderSlug = computed(() => route.params.folderSlug)

const props = defineProps({
  folder: Object,
  pinned: Boolean
})

const menu = ref()
const items = ref([
  { label: 'Copy', icon: 'pi pi-copy' },
  { label: 'Rename', icon: 'pi pi-file-edit' }
])

const onImageRightClick = (event) => {
  menu.value.show(event)
}
</script>

<template>
  <RouterLink
    :to="`/${props.folder.slug}`"
    :class="{ 'bg-[#333333] text-white': props.folder.slug === folderSlug }"
    class="px-6 py-2 flex items-center justify-between"
    @contextmenu="onImageRightClick"
    aria-haspopup="true"
  >
    <div class="space-x-2 text-xs flex items-center">
      <i
        class="pi"
        :class="{
          'pi-folder-open': props.folder.slug === folderSlug,
          'pi-folder': props.folder.slug !== folderSlug
        }"
      ></i>
      <span class="font-semibold">{{ trimWords(props.folder.name, 4) }}</span>
    </div>
    <i v-if="pinned" class="pi pi-thumbtack pin"></i>
  </RouterLink>
  <ContextMenu ref="menu" :model="items" />
</template>

<style scoped>
.pin {
  font-size: 0.75rem;
}
</style>
