<script setup lang="ts">
import { ref } from 'vue'

import Drawer from 'primevue/drawer'
import BrandTitle from '@/components/NavigationPanel/TitleSection/BrandTitle.vue'
import ButtonWrapper from '@/components/NavigationPanel/ButtonSection/ButtonWrapper.vue'
import PlaygroundWrapper from '@/components/NavigationPanel/PlaygroundSection/PlaygroundWrapper.vue'
import RecentsNotes from '@/components/NavigationPanel/NotesSection/RecentsNotes.vue'
import FoldersInside from '@/components/NavigationPanel/FoldersSection/FoldersInside.vue'
import MoreNav from '@/components/NavigationPanel/OthersSection/MoreNav.vue'

const visible = ref(false)
</script>

<template>
  <Drawer v-model:visible="visible">
    <template #header>
      <BrandTitle />
    </template>
    <div class="space-y-5">
      <ButtonWrapper />
      <PlaygroundWrapper />
      <RecentsNotes />
      <FoldersInside />
      <MoreNav />
    </div>
  </Drawer>
  <button @click="visible = true" class="cursor-pointer">
    <i
      class="pi"
      :class="{ 'pi-bars': !visible, 'pi-times': visible }"
      style="font-size: 1.75rem"
    ></i>
  </button>
</template>
