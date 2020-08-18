<template>
  <main class="container">
    <header class="header">
      <i class="el-icon-arrow-left"></i>
      返回
    </header>
    <section class="section">
      <div class="student-base-info">
        <div class="avatar-box">
          <em class="avatar"></em>
        </div>
        <div class="base-info">
          <div class="student_name">
            <div class="name"></div>
            <div class="btn_group">
              <el-button size="mini" icon="el-icon-edit">编辑学员资料</el-button>
              <el-button size="mini">报名</el-button>
              <el-button size="mini">试听</el-button>
              <el-button size="mini">删除学生</el-button>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "student_detail",
  methods: {},
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
  }
}
</style>