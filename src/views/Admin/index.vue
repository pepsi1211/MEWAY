<template>
  <div>
    <el-container>
      <el-header height="65px">
        <img src="../../../public/img/logo.png" class="logo" />
        <div class="user">
          <i class="el-icon-s-custom"></i>
          <span class="user-name">MEWAY米绘艺术空间</span>
        </div>
      </el-header>
      <el-container>
        <div class="aside" :style="{height: $store.state.admin.asideHeight}">
          <el-aside width="200px">
            <el-menu
              default-active="1"
              class="el-menu-vertical-demo"
              background-color="#eeddd5"
              text-color="#AFAFB1"
              active-text-color="#333"
            >
              <el-menu-item index="1">
                <i class="el-icon-s-home"></i>
                <router-link to="/admin/home" tag="span" slot="title">中心首页</router-link>
              </el-menu-item>
              <el-submenu index="2">
                <template slot="title">
                  <i class="el-icon-s-cooperation"></i>
                  <span slot="title">教务中心</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">
                    <router-link to="/admin/users" tag="span">学员管理</router-link>
                  </el-menu-item>
                  <el-menu-item index="2-2">班级管理</el-menu-item>
                  <el-menu-item index="2-3">老师管理</el-menu-item>
                  <el-menu-item index="2-4">课程/收费</el-menu-item>
                  <el-menu-item index="2-5">上课记录</el-menu-item>
                  <el-menu-item index="2-6">家校互动</el-menu-item>
                  <el-menu-item index="2-7">电子相册</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-menu-item index="3">
                <i class="el-icon-s-claim"></i>
                <span slot="title">销售中心</span>
              </el-menu-item>
              <el-menu-item index="4">
                <i class="el-icon-coin"></i>
                <span slot="title">财务中心</span>
              </el-menu-item>
              <el-menu-item index="5">
                <i class="el-icon-data-line"></i>
                <span slot="title">数据中心</span>
              </el-menu-item>
              <el-menu-item index="6">
                <i class="el-icon-setting"></i>
                <span slot="title">机构设置</span>
              </el-menu-item>
              <el-menu-item index="7">
                <i class="el-icon-attract"></i>
                <span slot="title">增值服务</span>
              </el-menu-item>
            </el-menu>
          </el-aside>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      scrollerHeight: "",
    };
  },
  name: "admin",
  methods: {},
  mounted() {},
  watch: {},
  computed: {},
};
</script>
<style lang="scss">
.el-header {
  background-color: var(--fontColor);
  color: #333;
  text-align: center;
  line-height: 60px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 60px;
  .logo {
    width: 75px;
  }
  .user {
    font-size: 20px;
    display: flex;
    align-items: center;
    .user-name {
      font-size: 15px;
      color: var(--theme);
      margin-left: 10px;
    }
  }
}
.aside {
  height: 100%;
  background-color: var(--theme);
}
.el-aside {
  background-color: var(--theme);
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>