<template>
  <main class="container">
    <header class="header">
      <i class="el-icon-arrow-left"></i>
      返回
    </header>
    <section class="section">
      <div class="form">
        <el-form>
          <el-form-item label="接收人" prop="resource">
            <el-radio-group>
              <el-radio label="全体学员"></el-radio>
              <el-radio label="按学员"></el-radio>
              <el-radio label="按班级"></el-radio>
            </el-radio-group>
            <button>选择学员</button>
          </el-form-item>
          <div class="input-title">
            <span>标题</span>
            <input type="text" maxlength="40" class="input" />
          </div>
          <el-card style="height: 370px;">
            <quill-editor
              v-model="content"
              ref="myQuillEditor"
              style="height: 300px"
              :options="editorOption"
            ></quill-editor>
          </el-card>
        </el-form>
      </div>
      <div class="btn-group"></div>
    </section>
  </main>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  data() {
    return {
      content: null,
      editorOption: {}
    };
  },
  components: {
    quillEditor
  },
  methods: {},
  watch: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  user-select: none;
  .header {
    font-size: 16px;
    color: var(--fontColor);
    text-align: left;
    margin-bottom: 20px;
  }
  .section{
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
  }
}
</style>