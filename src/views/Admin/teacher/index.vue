<template>
  <main class="container">
    <header class="header">老师管理</header>
    <section class="section">
      <div class="search">
        <input v-model="input" class="input" @click="dialogVisible=!0" placeholder="按老师姓名查找" />
      </div>
      <div class="btn-group">
        <el-button size="mini" @click="dialogVisible = !0">添加老师</el-button>
      </div>
      <div class="table">
        <el-table
          stripe
          border
          v-loading="loading"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
        >
          <el-table-column prop="teacher_name" label="老师姓名" width="120" align="center"></el-table-column>
          <el-table-column prop="gender" label="性别" align="center"></el-table-column>
          <el-table-column prop="subject" label="科目" align="center"></el-table-column>
          <el-table-column prop="phone" label="手机号" show-overflow-tooltip align="center"></el-table-column>
          <el-table-column prop="phone" label="上月店名率" align="center"></el-table-column>
          <el-table-column prop="previous_mouth" label="上月课时" align="center"></el-table-column>
          <el-table-column prop="current_mouth" label="本月课时" align="center"></el-table-column>
          <el-table-column label="启用状态" align="center">
            <template slot-scope="scope">
              <el-switch
                v-model="scope.row.is_on"
                active-color="#dac8c0"
                inactive-color="#AFAFB1"
              ></el-switch>
            </template>
          </el-table-column>
          <el-table-column fixed="right" label="操作" width="120">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData)"
                type="text"
                size="small"
              >移除</el-button>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <el-pagination
        background
        class="page"
        layout="prev, pager, next"
        :total="tableData.length"
        :page-size="pageSize"
        :current-page.sync="currentPage"
      ></el-pagination>
      <el-dialog title="新增老师" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="form-control">
          <div class="form-row">
            <span>
              姓名
              <sup>*</sup>:
            </span>
            <el-input type="text" v-model="teacher.teacher_name"></el-input>
          </div>
          <div class="form-row">
            <span>性别:</span>
            <div class="form-radio">
              <el-radio v-model="teacher.gender" label="1">男</el-radio>
              <el-radio v-model="teacher.gender" label="0">女</el-radio>
            </div>
          </div>
          <div class="form-row">
            <span>
              联系手机号
              <sup>*</sup>:
            </span>
            <el-input type="text" v-model="teacher.phone"></el-input>
          </div>
          <div class="form-row">
            <span>擅长科目:</span>
            <el-select v-model="teacher.subject" placeholder="请选择">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="form-row">
            <span>备注:</span>
            <el-input type="textarea" autosize v-model="teacher.remark"></el-input>
          </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button class="cancel" @click="dialogVisible = false">取 消</el-button>
          <el-button class="save" @click="handleToSubmit">保 存</el-button>
        </span>
      </el-dialog>
    </section>
  </main>
</template>
<script>
export default {
  name: "Class",
  data() {
    return {
      tableData: [],
      activeName: "first",
      multipleSelection: [],
      currentPage: 1,
      pageSize: 4,
      input: "",
      loading: true,
      dialogVisible: false,
      options: [{ value: "选项1", label: "水彩" }],
      teacher: {
        teacher_name: "",
        gender: "",
        phone: "",
        subject: "",
        previous_mouth: "0",
        current_mouth: "0",
        total_time: "0",
        is_on: true,
        remark: "",
      },
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    // 确认关闭模态提示框
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then((_) => {
          done();
        })
        .catch((_) => {});
    },
    // 获取老师信息
    getTeacherInfo() {
      this.axios.post("/api/teachers/teacherList").then((res) => {
        var result = res.data;
        if (result.status == 200) {
          console.log(result);
          result.data = result.data.map((item) => {
            item.gender = item.gender ? "男" : "女";
            return item;
          });
          this.tableData = result.data;
          this.loading = false;
        } else {
          this.$message({
            message: `${result.msg}`,
            type: "error",
          });
        }
      });
    },
    // 提交表单
    handleToSubmit() {
      let { teacher_name, phone, gender } = this.teacher;
      this.teacher.gender = gender == "1" ? true : false;
      let params = this.$qs.stringify(this.teacher);
      console.log(this.teacher);
      if (teacher_name && phone) {
        this.axios.post("/api/teachers/saveTeacher", params).then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            this.dialogVisible = false;
            this.getTeacherInfo();
            this.$message({
              message: `${res.data.msg}`,
              type: "success",
            });
          } else {
            this.$message({
              message: `${res.data.msg}`,
              type: "error",
            });
          }
        });
      } else {
        this.$message({
          message: "老师姓名或者联系手机号不能为空",
          type: "error",
        });
      }
    },
  },
  watch: {},
  computed: {},
  mounted() {
    this.getTeacherInfo();
  },
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  .header {
    font-size: 16px;
    color: var(--fontColor);
    text-align: left;
    margin-bottom: 20px;
  }
  .section {
    width: 100%;
    padding: 20px;
    background: #fff;
    border-radius: 5px;
    box-sizing: border-box;
    ::v-deep .el-tabs__item {
      color: var(--fontColor);
    }
    ::v-deep .el-tabs__active-bar {
      background-color: var(--deepTheme);
    }
    .btn-group {
      text-align: left;
      padding-top: 5px;
      margin-bottom: 10px;
      ::v-deep .el-button:focus,
      .el-button:hover {
        color: var(--fontColor);
        border-color: var(--deepTheme);
        background-color: var(--theme);
        opacity: 0.75;
      }
    }
    .search {
      width: 100%;
      padding: 10px 0px;
      box-sizing: border-box;
      text-align: left;
    }
    .form-control {
      width: 100%;
      .form-row:not(:last-child) {
        margin-bottom: 20px;
      }
      .form-row {
        text-align: left;
        padding-left: 40px;
        ::v-deep .el-input,
        .el-textarea,
        .el-select {
          width: 217px;
        }
        .form-radio {
          display: inline-block;
          width: 217px;
        }
        span {
          display: inline-block;
          width: 120px;
          color: var(--deepTheme);
          user-select: none;
          sup {
            color: #f00;
          }
        }
      }
    }
    .dialog-footer {
      ::v-deep .el-button.save:hover,
      .el-button.save:focus {
        color: #fff;
        background-color: var(--deepTheme);
        border-color: var(--deepTheme);
      }
      ::v-deep .el-button.cancel:hover,
      .el-button.cancel:focus {
        color: #e8e8e8;
        background-color: #c4c4c4;
        border-color: #c4c4c4;
      }
    }
  }
  .page {
    margin-top: 20px;
  }
}
</style>