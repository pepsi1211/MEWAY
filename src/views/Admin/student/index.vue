<template>
  <main class="container">
    <header class="header">学员管理</header>
    <section class="section">
      <div class="search">
        <input v-model="input" class="input" placeholder="按姓名查找" />
      </div>
      <div class="btn-group">
        <el-button size="mini" icon="el-icon-edit" @click="$admin('sendMessage')">发消息</el-button>
      </div>
      <div class="table">
        <el-table
          stripe
          border
          v-loading="loading"
          ref="multipleTable"
          :data="tableData"
          tooltip-effect="dark"
          style="width: 100%"
          @selection-change="handleSelectionChange"
        >
          <el-table-column type="selection" width="55" header-align="center" align="center"></el-table-column>
          <el-table-column label="学生姓名" width="120" header-align="center" align="center">
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="goDetail(scope)"
                type="text"
                size="small"
              >{{scope.row.students_name}}</el-button>
            </template>
          </el-table-column>
          <el-table-column
            prop="time"
            label="购买课时"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="gift_time"
            label="赠送课时"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="already_time"
            label="已消耗课时"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="odd_time"
            label="剩余课时"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="integral"
            label="积分"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="lack_time"
            label="缺课次数"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="birthday"
            label="出生日期"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="age"
            label="年龄"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="grade"
            label="年级"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="school_name"
            label="学校"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="follow_up"
            label="跟进人"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            prop="teacher"
            label="学管师"
            show-overflow-tooltip
            header-align="center"
            align="center"
          ></el-table-column>
          <el-table-column
            fixed="right"
            label="操作"
            width="120"
            header-align="center"
            align="center"
          >
            <template slot-scope="scope">
              <el-button
                @click.native.prevent="deleteRow(scope.$index, tableData, scope)"
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
    </section>
  </main>
</template>
<script>
export default {
  name: "student",
  data() {
    return {
      tableData: [],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 4,
      input: "",
      loading: true,
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach((row) => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(index, rows, scope) {
      console.log(scope);
      rows.splice(index, 1);
    },
    goDetail(scope) {
      // console.log(scope);
      var id = scope.row._id;
      // this.$admin('student-detail',id);
      this.$router.push({ path: "student-detail", query: { id } });
    },
    getStudentsData() {
      this.axios.post("/api/students/studentList").then((res) => {
        console.log(res);
        var result = res.data;
        if (res.data.status == 200) {
          this.tableData = res.data.data;
          this.loading = false;
        }else{
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
    this.getStudentsData();
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
    background-color: #fff;
    border-radius: 5px;
    padding-bottom: 20px;
    box-sizing: border-box;
    .search {
      width: 100%;
      padding: 10px 20px;
      box-sizing: border-box;
      text-align: left;
    }
    .btn-group {
      text-align: left;
      padding: 5px 20px;
      ::v-deep .el-button:focus,
      .el-button:hover {
        color: var(--fontColor);
        border-color: var(--deepTheme);
        background-color: var(--theme);
        opacity: .75;
      }
    }
    .table {
      width: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
    }
    ::v-deep .el-button--text {
      color: var(--deepTheme);
    }
  }
  .page {
    margin-top: 20px;
  }
}
</style>