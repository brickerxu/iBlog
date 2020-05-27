<template>
    <div ref="editorElem" style="text-align:left;height:100%"></div>
</template>

<script>
import E from 'wangeditor'
export default {
    name: "ArticleEditor",
    data () {
        return {
        editor: null,
        editorContent: ''
        }
    },
    mounted() {
        this.editor = new E(this.$refs.editorElem);
        this.editor.customConfig.onchange = (html) => {
          this.editorContent = html
        }
        this.editor.create();
    }
}
</script>