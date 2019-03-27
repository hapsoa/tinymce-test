<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/> -->
    <div class="editor-container">
      <EditorComponent ref="editorComponent"></EditorComponent>
    </div>
    <v-btn @click="showContent">showContent</v-btn>
  </div>
</template>

<script lang="ts" src='./Home.ts' />

<style lang='scss' scoped>


.editor-container {
  margin: 80px;
  width: 500px;
  height: 300px;
  border: 1px solid blue;
}
</style>
