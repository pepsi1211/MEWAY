<template>
  <div class="container" ref="main">
    <header class="header">
      <div class="title">
        <span>机构数据</span>
        <i class="el-icon-setting"></i>
      </div>
      <div class="bottom">
        <div class="box">
          <span>¥ 0.00</span>
          <span>本月实收</span>
        </div>
        <div class="box">
          <span>¥ 0.00</span>
          <span>本月支出</span>
        </div>
        <div class="box">
          <span>0</span>
          <span>本月授课课时</span>
        </div>
        <div class="box">
          <span>¥ 0.00</span>
          <span>本月课消金额</span>
        </div>
      </div>
    </header>
    <section class="section">
      <div class="left">
        <!-- 快捷入口 -->
        <div class="entry">
          <div class="title">
            <span>快捷入口</span>
            <i class="el-icon-setting"></i>
          </div>
          <div class="entry-box">
            <div class="item">
              <i class="icon xbtb"></i>
              <span>选班调班</span>
            </div>
            <div class="item">
              <i class="icon kb"></i>
              <span>课表</span>
            </div>
            <div class="item">
              <i class="icon dmjl"></i>
              <span>点名记录</span>
            </div>
            <div class="item">
              <i class="icon qkjl"></i>
              <span>缺课记录</span>
            </div>
            <div class="item">
              <i class="icon xmx"></i>
              <span>小麦秀</span>
            </div>
            <div class="item">
              <i class="icon zdxy"></i>
              <span>在读学员</span>
            </div>
            <div class="item">
              <i class="icon qzxy"></i>
              <span>潜在学员</span>
            </div>
            <div class="item">
              <i class="icon xfyj"></i>
              <span>续费预警</span>
            </div>
            <div class="item">
              <i class="icon sjqd"></i>
              <span>收据清单</span>
            </div>
          </div>
        </div>
        <!-- 计划任务 -->
        <div class="plan">
          <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane label="今日待跟进" name="first">
              <div class="record">
                <span>
                  未完成
                  <strong>0</strong>
                  条
                </span>
                <span>
                  已完成
                  <strong>0</strong>
                  条
                </span>
              </div>
              <el-table v-loading="loading" :data="tableData" style="width: 100%">
                <el-table-column prop="date" label="日期" width="180"></el-table-column>
                <el-table-column prop="name" label="姓名" width="180"></el-table-column>
                <el-table-column prop="address" label="地址"></el-table-column>
                <el-table-column label="操作" width="100">
                  <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">跟进</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="过去未完成" name="second">过去未完成</el-tab-pane>
            <el-tab-pane label="过去已完成" name="third">过去已完成</el-tab-pane>
            <el-tab-pane label="以后待跟进" name="fourth">以后待跟进</el-tab-pane>
          </el-tabs>
        </div>
        <!-- 销售漏斗 -->
        <div class="echarts-sale">
          <div class="title">
            <span>销售漏斗</span>
            <i></i>
          </div>
          <div class="funnel" ref="funnel"></div>
        </div>
      </div>
      <div class="right">
        <!-- 待办事项 -->
        <div class="backlog">
          <div class="title">
            <span>待办事项</span>
            <i class="el-icon-setting"></i>
          </div>
          <div class="todoList">
            <div class="todoItem" v-for="item in 4" :key="item">
              <span class="icon">续费</span>
              <span>有21位学员需通知续费</span>
            </div>
          </div>
        </div>
        <!-- 学员组成 -->
        <div class="echarts-student">
          <div class="title">
            <span>学员组成</span>
            <i></i>
          </div>
          <div class="pie" ref="pie"></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄",
          zip: 200333
        }
      ],
      loading: true
    };
  },
  name: "",
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    Pie() {
      // 基于准备好的dom，初始化echarts实例
      let chart = this.$echarts.init(this.$refs.pie);
      // console.log(this.$refs.pie);
      chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b}: {c} ({d}%)"
        },
        legend: {
          orient: "vertical",
          left: 10,
          data: ["直接访问", "邮件营销", "联盟广告", "视频广告", "搜索引擎"]
        },
        series: [
          {
            name: "访问来源",
            type: "pie",
            radius: ["45%", "60%"],
            avoidLabelOverlap: false,
            label: {
              show: false,
              position: "center"
            },
            emphasis: {
              label: {
                show: true,
                fontSize: "16",
                fontWeight: "bold"
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 335, name: "直接访问" },
              { value: 310, name: "邮件营销" },
              { value: 234, name: "联盟广告" },
              { value: 135, name: "视频广告" },
              { value: 1548, name: "搜索引擎" }
            ]
          }
        ]
      });
    },
    funnel() {
      let chart = this.$echarts.init(this.$refs.funnel);
      chart.setOption({
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c}%"
        },
        legend: {
          data: ["展现", "点击", "访问", "咨询", "订单"]
        },

        series: [
          {
            name: "漏斗图",
            type: "funnel",
            left: "25%",
            top: 60,
            //x2: 80,
            bottom: 60,
            width: "50%",
            // height: {totalHeight} - y - y2,
            min: 0,
            max: 100,
            minSize: "0%",
            maxSize: "100%",
            sort: "descending",
            gap: 2,
            label: {
              show: true,
              position: "inside"
            },
            labelLine: {
              length: 10,
              lineStyle: {
                width: 1,
                type: "solid"
              }
            },
            itemStyle: {
              borderColor: "#fff",
              borderWidth: 1
            },
            emphasis: {
              label: {
                fontSize: 20
              }
            },
            data: [
              { value: 60, name: "访问" },
              { value: 40, name: "咨询" },
              { value: 20, name: "订单" },
              { value: 80, name: "点击" },
              { value: 100, name: "展现" }
            ]
          }
        ]
      });
    }
  },
  mounted() {
    this.Pie();
    this.funnel();
    this.$nextTick(() => {
      // 页面渲染完成后的回调
      var asideHeight = this.$refs.main.offsetHeight;
      var currentHeight = window.innerHeight;
      console.log(asideHeight,currentHeight);
      if(asideHeight < currentHeight){
        asideHeight = currentHeight - 50 + 'px'
      }else{
        asideHeight = asideHeight + 100 + 'px';
        console.log(asideHeight)
      }
      localStorage.setItem('asideHeight',asideHeight);
      this.$store.commit('admin/ASIDE_HEIGHT',{ asideHeight })
    });
  },
  watch: {},
  computed: {}
};
</script>
<style lang="scss" scoped>
.container {
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-sizing: border-box;
  .header {
    width: 100%;
    background: #fff;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 30px;
    box-sizing: border-box;
    .title {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      span {
        font-size: 16px;
        color: #666;
      }
      i {
        font-size: 20px;
        color: #666;
      }
    }
    .bottom {
      width: 100%;
      display: flex;
      .box {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        padding: 20px 0;
        span:first-child {
          margin-bottom: 10px;
          font-size: 24px;
          color: #333;
        }
        span:last-child {
          color: #999;
          font-size: 15px;
        }
      }
    }
  }
  // 标题公有样式
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    span {
      font-size: 16px;
      color: #666;
    }
    i {
      font-size: 20px;
      color: #666;
    }
  }
  .section {
    width: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    box-sizing: border-box;
    // 快捷入口
    .entry {
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      margin-bottom: 20px;
      .entry-box {
        width: 100%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: flex-start;
        margin-top: 20px;
        .item {
          width: 230px;
          padding: 20px 0;
          display: flex;
          align-items: center;
          .icon {
            display: inline-block;
            width: 42px;
            height: 42px;
            background: url(../../../public/img/gift.png) no-repeat 50%;
            background-size: 100%;
            background-position-x: 0;
            margin-right: 20px;
            // 选班调班
            &.xbtb {
              background-position-y: -42px;
            }
            // 课表
            &.kb {
              background-position-y: -126px;
            }
            // 点名记录
            &.dmjl {
              background-position-y: -214px;
            }
            // 缺课记录
            &.qkjl {
              background-position-y: -299px;
            }
            // 小麦秀
            &.xmx {
              background-position-y: -805px;
            }
            // 在读学员
            &.zdxy {
              background-position-y: -887px;
            }
            // 潜在学员
            &.qzxy {
              background-position-y: -973px;
            }
            // 续费预警
            &.xfyj {
              background-position-y: -1058px;
            }
            // 收据清单
            &.sjqd {
              background-position-y: -467px;
            }
            // 欠费收据
            &.qfsj {
              background-position-y: -549px;
            }
            // 报名续费
            &.bmxf {
              background-position-y: -636px;
            }
            // 快速收款
            &.kssk {
              background-position-y: -467px;
            }
            // 工资结算
            &.gzjs {
              background-position-y: -720px;
            }
            // 充值管理
            &.czgl {
              background-position-y: -467px;
            }
          }
        }
      }
    }
    // 计划任务
    .plan {
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      margin-bottom: 20px;
      .el-tabs__item.is-active {
        color: var(--deepTheme);
      }
      .el-tabs__item:hover {
        color: var(--deepTheme);
      }
      .el-tabs__active-bar {
        background-color: var(--deepTheme);
      }
      .record {
        width: 100%;
        border-radius: 5px;
        color: #333;
        background-color: var(--deepTheme);
        padding: 5px 10px;
        text-align: left;
        font-size: 12px;
        box-sizing: border-box;
        span:first-child {
          margin-right: 10px;
        }
      }
    }
    // 销售漏斗
    .echarts-sale {
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      margin-bottom: 20px;
      .funnel {
        width: 100%;
        height: 330px;
        margin-top: 20px;
      }
    }
    // 待办事项
    .backlog {
      width: 29vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      margin-bottom: 20px;
      .todoList {
        width: 100%;
        margin-top: 20px;
        .todoItem {
          padding: 10px 0;
          text-align: left;
          .icon {
            display: inline-block;
            padding: 1px 12px;
            border-radius: 20px;
            border: 1px solid var(--theme);
            font-size: 12px;
            color: var(--fontColor);
            margin-right: 10px;
          }
          span:last-child {
            font-size: 14px;
            color: #666;
          }
        }
      }
    }
    .echarts-student {
      width: 29vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
      margin-bottom: 20px;
      .pie {
        width: 100%;
        height: 300px;
        margin-top: 20px;
      }
    }
  }
}
</style>