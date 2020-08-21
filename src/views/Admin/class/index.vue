<template>
  <main class="container">
    <header class="header">学员管理</header>
    <section class="section">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="padding: 0 20px">
        <el-tab-pane label="班课" name="first">
          <div class="search">
            <input v-model="input" class="input" @click="dialogVisible=!0" placeholder="按班级名查找" />
          </div>
          <div class="btn-group">
            <el-button size="mini" @click="dialogVisible = !0">添加班级</el-button>
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
              <el-table-column prop="class_name" label="班级名称" width="120" align="center"></el-table-column>
              <el-table-column prop="course_name" label="课程名称" width="120" align="center"></el-table-column>
              <el-table-column prop="teacher" label="班级老师" show-overflow-tooltip align="center"></el-table-column>
              <el-table-column prop="capacity" label="人数/容量" show-overflow-tooltip align="center"></el-table-column>
              <el-table-column prop="capacity" label="已上/排课课次" show-overflow-tooltip align="center"></el-table-column>
              <el-table-column prop="capacity" label="已授课时" show-overflow-tooltip align="center"></el-table-column>
              <el-table-column prop="class_kind" label="班级分类" show-overflow-tooltip align="center"></el-table-column>
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
        </el-tab-pane>
        <el-tab-pane label="一对一" name="second">配置管理</el-tab-pane>
      </el-tabs>
      <el-dialog title="新增班级" :visible.sync="dialogVisible" width="30%" :before-close="handleClose">
        <div class="form-control">
          <div class="form-row">
            <span>
              所属课程
              <sup>*</sup>:
            </span>
            <el-select v-model="classes.course_name" placeholder="请选择课程">
              <el-option
                v-for="item in options"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="form-row">
            <span>
              班级名称
              <sup>*</sup>:
            </span>
            <el-input type="text" v-model="classes.class_name"></el-input>
          </div>
          <div class="form-row">
            <span>班级容量:</span>
            <el-input type="text" v-model="classes.capacity"></el-input>
          </div>
          <div class="form-row">
            <span>上课教室:</span>
            <el-select v-model="classes.classroom" placeholder="不指定">
              <el-option
                v-for="item in classroom"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="form-row">
            <span>班级老师:</span>
            <el-select v-model="classes.teacher" placeholder="请选择老师">
              <el-option
                v-for="item in teacher"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="form-row">
            <span>默认授课课时:</span>
            <el-input type="text" v-model="classes.default_time"></el-input>
          </div>
          <div class="form-row">
            <span>班级分类:</span>
            <el-select v-model="classes.class_kind" placeholder="不指定">
              <el-option
                v-for="item in classroom"
                :key="item.value"
                :label="item.label"
                :value="item.label"
              ></el-option>
            </el-select>
          </div>
          <div class="form-row">
            <span>备注:</span>
            <el-input type="textarea" autosize v-model="classes.remark"></el-input>
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
      options: [{ value: "选项1", label: "黄金糕" }],
      classroom: [{ value: "选项1", label: "裸画一班" }],
      kind: [{ value: "选项1", label: "裸画一班" }],
      teacher: [{ value: "选项1", label: "苍井空老师" }],
      classes: {
        class_name: "",
        capacity: "",
        course_name: "",
        teacher: "",
        course_name: "不指定",
        default_time: "1",
        class_kind: "",
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
    // 获取班级信息
    getClassesInfo() {
      this.axios.post("/api/class/classList").then((res) => {
        console.log(res);
        var result = res.data;
        if (result.status == 200) {
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
      var { class_name, course_name } = this.classes;
      var params = this.$qs.stringify(this.classes);
      if (course_name && class_name) {
        this.axios.post("/api/class/saveClass", params).then((res) => {
          console.log(res);
          if (res.data.status == 200) {
            this.dialogVisible = false;
            this.getClassesInfo();
            this.$message({
              message: `${res.data.msg}`,
              type: "success",
            });
          }else{
            this.$message({
              message: `${res.data.msg}`,
              type: 'error'
            })
          }
        });
      } else {
        this.$message({
          message: "所属课程或者班级名称不能为空",
          type: "error",
        });
      }
    },
  },
  watch: {},
  computed: {},
  mounted() {
    this.getClassesInfo();
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
    background: #fff;
    border-radius: 5px;
    padding-bottom: 20px;
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