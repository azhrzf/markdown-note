<script setup>
import { RouterLink } from 'vue-router'
import { formatTimestamp } from '@/stores/helpers'
import { trimWords } from '@/stores/helpers'
import removeMd from 'remove-markdown'
import { useNoteUpdaterStore } from '@/stores/updater'
import { Timestamp } from 'firebase/firestore'

const props = defineProps({
  note: {
    type: Object,
    required: true,
    default: () => ({
      title: '',
      content: '',
      updatedAt: Timestamp.now()
    })
  }
})
</script>

<template>
  <article
    class="bg-[#232323] p-4 rounded-sm transition ease-in-out duration-200 hover:bg-[#333333]"
  >
    <RouterLink :to="`/${props.note.folder}/${props.note.id}`">
      <h2 class="font-semibold">{{ trimWords(props.note.title, 8) }}</h2>
      <p class="mt-2 text-xs text-gray-400">
        {{ formatTimestamp(props.note.updatedAt) }}
      </p>
      <p class="mt-2 text-sm break-words">
        {{ trimWords(removeMd(props.note.content), 15) }}
      </p>
    </RouterLink>
  </article>
</template>
