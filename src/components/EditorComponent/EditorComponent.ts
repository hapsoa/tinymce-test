import { Component, Vue } from 'vue-property-decorator';
import Editor from '@tinymce/tinymce-vue';

@Component({
  components: {
    // HelloWorld,
    editor: Editor,
  },
})
export default class Home extends Vue {
  public content: string = '';

  private editorInit = {
    menubar: false,
  };

  public showContent() {
    console.log(this.content);
  }
}
