<template>
  <main class="container">
    <header class="header">
      <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
    </header>
    <section class="section">
      <div class="form">
        <div class="TP">
          <span>接收人:</span>
          <form action method="get">
            <label for="all">
              <input name="target" id="all" type="radio" />全体学员
            </label>
            <label for="student">
              <input name="target" id="student" type="radio" />按学员
            </label>
            <label for="class">
              <input name="target" id="class" type="radio" />按班级
            </label>
          </form>
        </div>
        <div class="input-title">
          <span>标题:</span>
          <input type="text" maxlength="40" class="input" placeholder="40字以内" />
        </div>
        <el-card style="height: 370px;">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            style="height: 260px"
            :options="editorOption"
          ></quill-editor>
        </el-card>
      </div>
      <div class="btn-group">
        <div class="btn-send" >发消息</div>
      </div>
    </section>
  </main>
</template>
<script>
import { quillEditor } from "vue-quill-editor";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

export default {
  name: 'SendMessage',
  data() {
    return {
      content: null,
      editorOption: {},
      dialogVisible: false,
    };
  },
  components: {
    quillEditor,
  },
  methods: {
    
  },
  watch: {},
  computed: {},
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  user-select: none;
  .header {
    font-size: 16px;
    color: var(--fontColor);
    text-align: left;
    margin-bottom: 20px;
    i{
      cursor: pointer;
    }
  }
  .section {
    width: 100%;
    border-radius: 5px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
    box-sizing: border-box;
    .form {
      padding: 20px 100px;
      text-align: left;
      .TP {
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        span {
          display: inline-block;
          width: 46px;
          font-size: 14px;
          color: #333;
          margin-right: 10px;
        }
        form {
          width: 50%;
          display: flex;
          padding: 10px 0;
          label {
            margin-right: 20px;
            color: var(--deepTheme);
            font-size: 12px;
            display: flex;
            align-items: center;
            input[type="radio"] {
              margin-right: 10px;
              display: inline-block;
              vertical-align: middle;
              width: 13px;
              height: 13px;
              background-color: transparent;
              border: 0;
              outline: none;
              line-height: 13px;
              color: #eee;
            }
            input[type="radio"]::after {
              content: "";
              display: block;
              border-radius: 50%;
              width: 13px;
              height: 13px;
              text-align: center;
              line-height: 14px;
              font-size: 12px;
              background-color: #fff;
              border: 1px solid #999;
              box-sizing: border-box;
            }
            input[type="radio"]:checked::after {
              content: "";
              transform: scale(0.6);
              border: 1px solid #999;
              background-color: var(--deepTheme);
            }
          }
        }
      }
      .input-title {
        margin-bottom: 20px;
        span {
          display: inline-block;
          width: 46px;
          font-size: 14px;
          color: #333;
          margin-right: 10px;
          text-align: right;
        }
      }
    }
    .btn-group {
      padding: 20px 100px;
      .btn-send {
        font-size: 14px;
        padding: 5px 20px;
        background-color: var(--deepTheme);
        color: #fff;
        border-radius: 5px;
        transition: all 0.3s linear;
      }
      .btn-send:hover {
        background-color: var(--theme);
        cursor: pointer;
      }
    }
  }
}
</style>