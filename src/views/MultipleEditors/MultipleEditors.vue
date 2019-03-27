<template>
  <div class="multiple-editors">
    <div class="editor-container">
      <EditorComponent ref="editorComponent"></EditorComponent>
    </div>
    <v-btn @click="showContent">showContent</v-btn>
    <div class="editor-container">
      <EditorComponent ref="editorComponent"></EditorComponent>
    </div>
  </div>
</template>

<script src='./MultipleEditors.ts' lang='ts' />

<style scoped lang='scss'>
.editor-container {
  margin: 80px;
  width: 500px;
  height: 300px;
  border: 1px solid blue;
}
</style>