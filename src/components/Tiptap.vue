<script setup lang="ts">
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'

const editor = useEditor({
  content: '<p>Hello wrold.</p>',
  extensions: [StarterKit],
})

function getArticle(): void {
  const article = editor.value?.getText()
  console.log(article)
}
</script>

<template>
  <div id="tiptap">
    <EditorContent :editor="editor" />
    <button @click="getArticle">get article</button>
  </div>
</template>
