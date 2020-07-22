<template>
  <main class="container" ref="main">
    <header class="header">学员管理</header>
    <section class="section">
      <div class="search">
        <input v-model="input" class="input" placeholder="按姓名查找"/>
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
    </section>
  </main>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-08",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-06",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-07",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ],
      multipleSelection: [],
      currentPage: 1,
      pageSize: 4,
      input: ''
    };
  },
  methods: {
    toggleSelection(rows) {
      if (rows) {
        rows.forEach(row => {
          this.$refs.multipleTable.toggleRowSelection(row);
        });
      } else {
        this.$refs.multipleTable.clearSelection();
      }
    },
    handleSelectionChange(val) {
      this.multipleSelection = val;
    },
    deleteRow(index, rows) {
      rows.splice(index, 1);
    }
  },
  watch: {},
  computed: {},
  mounted(){
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      var main = this.$refs.main.offsetHeight;
      main = main + 50 + 'px';
      console.log(main);
      localStorage.setItem('asideHeight',main);
    });
  }
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
      .input{
        width: 25%;
        height: 35px;
        padding: 0 10px;
        box-sizing: border-box;
        color: var(--fontColor);
        border: 1px solid var(--theme);
        border-radius: 5px;
        display: inline-block;
        font-size: 13px;
        outline: none;
        transition: border-color .6s cubic-bezier(.645,.045,.355,1);
        transition: box-shadow .4s cubic-bezier(.645,.045,.355,1);
        &:focus{
          border: 1px solid var(--deepTheme);
          box-shadow: 3px 5px 5px rgba($color: #000000, $alpha: .09);
        }
      }
    }
    .table {
      width: 100%;
      padding: 10px 15px;
      box-sizing: border-box;
    }
  }
  .page {
    margin-top: 20px;
  }
}
</style>