<template>
  <div class="container">
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
            <el-tab-pane label="用户管理" name="first">今日待跟进</el-tab-pane>
            <el-tab-pane label="配置管理" name="second">过去未完成</el-tab-pane>
            <el-tab-pane label="角色管理" name="third">过去已完成</el-tab-pane>
            <el-tab-pane label="定时任务补偿" name="fourth">以后待跟进</el-tab-pane>
          </el-tabs>
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
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeName: "first"
    };
  },
  name: "",
  methods: {
    handleClick(tab,event){
      console.log(tab,event)
    }
  },
  watch: {},
  computed: {}
};
</script>
<style lang="scss">
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
      .el-tabs__item.is-active{
        color: var(--theme);
      }
      .el-tabs__item:hover{
        color: var(--theme);
      }
      .el-tabs__active-bar{
        background-color: var(--deepTheme);
      }
    }
    // 待办事项
    .backlog {
      width: 30vw;
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
  }
}
</style>