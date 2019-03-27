<template>
  <editor
    class="basic-editor"
    api-key="ir8ey2yssc2k22b011w8jtu3yzt59cjkir7zbblwrzg5kgj7"
    inline
    :init="editorInit"
    v-model="content"
  ></editor>
</template>

<script src='./EditorComponent.ts' lang='ts' />

<style scoped lang='scss'>
.basic-editor {
  // margin-top: 100px;
  width: 100%;
  height: 100%;
}
</style>