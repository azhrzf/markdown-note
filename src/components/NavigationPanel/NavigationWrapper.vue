<script setup>
import BrandTitle from './TitleSection/BrandTitle.vue'
import ButtonWrapper from './ButtonSection/ButtonWrapper.vue'
import RecentsNotes from './NotesSection/RecentsNotes.vue'
import FoldersInside from './FoldersSection/FoldersInside.vue'
import MoreNav from './OthersSection/MoreNav.vue'
import PlaygroundWrapper from './PlaygroundSection/PlaygroundWrapper.vue'
</script>

<template>
  <div class="space-y-6">
    <div class="space-y-5 px-6">
      <BrandTitle />
      <ButtonWrapper />
    </div>
    <PlaygroundWrapper />
    <RecentsNotes />
    <FoldersInside />
    <MoreNav />
  </div>
</template>
