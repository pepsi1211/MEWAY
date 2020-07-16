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
            <div>
              <i></i>
              <span>选班调班</span>
            </div>
          </div>
        </div>
        <!-- 计划任务 -->
        <div class="plan"></div>
      </div>
      <div class="right">
        <!-- 待办事项 -->
        <div class="backlog">
          <div class="title">
            <span>待办事项</span>
            <i class="el-icon-setting"></i>
          </div>
          <div></div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  name: "",
  methods: {},
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
  padding: 24px;
  .header {
    width: 100%;
    background: #fff;
    padding: 10px 30px;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    margin-bottom: 30px;
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
    width: 80vw;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    .left{
      width: 50vw;
      background: #fff;
      border-radius: 5px;
      display: flex;
      flex-direction: column;
      padding: 10px 30px;
    }
  }
}
</style>