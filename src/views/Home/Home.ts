import { Component, Vue } from 'vue-property-decorator';
// import Editor from '@tinymce/tinymce-vue';
import EditorComponent from '@/components/EditorComponent';
import EditorComponentTs from '@/components/EditorComponent/EditorComponent.ts';

@Component({
  components: {
    EditorComponent,
    // editor: Editor,
  },
})
export default class Home extends Vue {
  // @ts-ignore-nextline
  public $refs: Vue['$refs'] & {
    editorComponent: EditorComponentTs;
  };

  public showContent() {
    console.log(this.$refs.editorComponent.content);
  }
}
