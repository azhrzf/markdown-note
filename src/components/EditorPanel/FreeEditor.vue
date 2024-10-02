<script setup lang="ts">
import { ref } from 'vue'
import { MdEditor } from 'md-editor-v3'
import { useFreeEditorStore } from '@/stores/updater'
import 'md-editor-v3/lib/style.css'

const { text, setText } = useFreeEditorStore()
const textPlaceholder = ref(text)

const handleTextPlaceholderChange = (newContent: string) => {
  textPlaceholder.value = setText(newContent)
}
</script>

<template>
  <div class="space-y-6 h-screen w-full">
    <MdEditor
      class="markdown-editor"
      v-model="textPlaceholder"
      language="en-US"
      theme="dark"
      @change="handleTextPlaceholderChange"
    />
  </div>
</template>

<style scoped>
.markdown-editor {
  height: 100%;
  background-color: #1c1c1c;
}
</style>
