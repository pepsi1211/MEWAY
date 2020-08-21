<template>
  <main class="container">
    <header class="header">
      <i class="el-icon-arrow-left" @click="$router.go(-1)">返回</i>
    </header>
    <section class="section">
      <div class="student-base-info">
        <div class="avatar-box">
          <em class="avatar"></em>
        </div>
        <div class="base-info">
          <div class="student_name">
            <div class="name">{{detail.students_name}}</div>
            <div class="btn_group">
              <el-button size="mini" icon="el-icon-edit">编辑学员资料</el-button>
              <el-button size="mini">报名</el-button>
              <el-button size="mini">试听</el-button>
              <el-button size="mini">删除学生</el-button>
            </div>
          </div>
          <div class="row">
            <div class="text">
              <div>出生日期: {{detail.birthday}}</div>
              <div>就读学校: {{detail.school_name}}</div>
              <div>当前年级: {{detail.grade}}</div>
            </div>
            <div class="text">
              <div>手机: {{detail.phone}}</div>
              <div>备用手机: </div>
              <div>家庭住址: </div>
            </div>
            <div class="text">
              <div>学生来源:</div>
              <div>跟进人: {{detail.follow_up}}</div>
              <div>学管师: {{detail.teacher}}</div>
              <div>标签:</div>
              <div>备注:</div>
            </div>
          </div>
        </div>
      </div>
      <div class="content-body">
        <el-tabs v-model="active" @tab-click="handleClick">
          <el-tab-pane label="报读班级" name="1">报读班级</el-tab-pane>
          <el-tab-pane label="跟进管理" name="2">跟进管理</el-tab-pane>
          <el-tab-pane label="消费记录" name="3">消费记录</el-tab-pane>
          <el-tab-pane label="上课记录" name="4">上课记录</el-tab-pane>
          <el-tab-pane label="成长档案" name="5">成长档案</el-tab-pane>
          <el-tab-pane label="成绩单" name="6">成绩单</el-tab-pane>
        </el-tabs>
      </div>
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      active: "1",
      detail: {},
    };
  },
  name: "student_detail",
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 获取单个学生信息
    getStudentDetail() {
      var { id } = this.$route.query;
      this.axios.post("/api/students/singleStudent", { id }).then((res) => {
        var result = res.data;
        if (result.status == 200) {
          this.detail = result.data;
        } else {
          this.$message({
            message: `${result.msg}`,
            type: "error",
          });
        }
      });
    },
  },
  watch: {},
  computed: {},
  mounted() {
    this.getStudentDetail();
  },
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
    .student-base-info {
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      padding: 20px 30px;
      display: flex;
      box-sizing: border-box;
      margin-bottom: 20px;
      .avatar {
        display: inline-block;
        width: 60px;
        height: 60px;
        background-color: var(--theme);
        border-radius: 50%;
        margin-right: 30px;
      }
      .base-info {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 10px;
        .student_name {
          display: flex;
          justify-content: space-between;
          width: 100%;
          .name {
            color: #333;
          }
        }
        .row {
          width: 100%;
          margin-top: 30px;
          display: flex;
          .text:not(:last-child) {
            margin-right: 450px;
          }
          .text {
            color: #666;
            font-size: 14px;
            line-height: 30px;
            text-align: left;
          }
        }
      }
    }
    .content-body {
      width: 100%;
      background-color: #fff;
      border-radius: 5px;
      padding: 10px 30px 20px;
      box-sizing: border-box;
      ::v-deep .el-tabs__item {
        color: var(--fontColor);
      }
      ::v-deep .el-tabs__active-bar {
        background-color: var(--deepTheme);
      }
    }
  }
}
</style>