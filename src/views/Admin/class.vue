<template>
  <main class="container">
    <header class="header">学员管理</header>
    <section class="section">
      <el-tabs v-model="activeName" @tab-click="handleClick" style="padding: 0 20px">
        <el-tab-pane label="班课" name="first">
          <div class="search">
            <input v-model="input" class="input" @click="dialogVisible=!0" placeholder="按姓名查找" />
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
              <el-table-column type="selection" width="55"></el-table-column>
              <el-table-column label="日期" width="120">
                <template slot-scope="scope">{{ scope.row.date }}</template>
              </el-table-column>
              <el-table-column prop="name" label="姓名" width="120"></el-table-column>
              <el-table-column prop="address" label="地址" show-overflow-tooltip></el-table-column>
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
    </section>
  </main>
</template>
<script>
export default {
  name: "Class",
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
      ],
      activeName: "first",
      multipleSelection: [],
      currentPage: 1,
      pageSize: 4,
      input: "",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
  watch: {},
  computed: {},
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
    .search {
      width: 100%;
      padding: 10px 0px;
      box-sizing: border-box;
      text-align: left;
    }
  }
  .page {
    margin-top: 20px;
  }
}
</style>