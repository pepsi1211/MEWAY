<template>
  <main class="main">
    <Header></Header>
    <div class="cloudfloating"></div>
    <!-- 登录框 -->
    <div class="frame">
      <div class="title">账号密码</div>
      <section class="section">
        <input type="text" placeholder="手机号">
        <input type="password" placeholder="密码">
      </section>
      <div class="able">
        <div>
          <input type="radio">记住手机号
        </div>
        <div>忘记密码?</div>
      </div>
      <div class="btn">
        登录
      </div>
    </div>
  </main>
</template>
<script>
import Header from '@/components/Header'
export default {
  data() {
    return {};
  },
  name: "",
  methods: {},
  components:{
    Header
  },
  watch: {},
  computed: {}
};
</script>
<style lang="scss">
// @import '../../../public/css/StyleSheet.scss';
.main {
  display: block;
  min-width: 1024px;
  max-width: 1920px;
  overflow: hidden;
  margin: 0 auto;
  position: relative;
  background: url(../../../public/img/cloud.jpg) no-repeat;
  background-size: auto 1000px;
  color: var(--fontColor);
  height: 100vh;
  .cloudfloating {
    background: url(../../../public/img/cloud.jpg);
    width: 3840px;
    height: 1000px;
    animation: cloudfloating 120s linear 0s infinite forwards;
    position: absolute;
  }
  .frame{
    background-color: #fff;
    width: 350px;
    padding: 30px 20px;
    position: absolute;
    top: 270px;
    right: 250px;
    opacity: .9;
    border-radius: 5px;
    box-shadow: 0 10px 10px rgba($color: #000000, $alpha: .09);
    .title{
      display: inline-block;
      font-size: 15px;
      padding: 10px 20px;
      border-bottom: 2px solid var(--fontColor);
      margin-bottom: 30px;
    }
    .section{
      width: 100%;
      display: flex;
      flex-direction: column;
      input{
        padding: 10px;
        border-radius: 5px;
        outline: none;
        border: 1px solid #f1f1f0;
        font-size: 13px;
      }
      input:not(:last-child){
        margin-bottom: 20px;
      }
    }
    .able{
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 12px 0;
      font-size: 12px;
      div:first-child{
        display: flex;
        align-items: center;
        input{
          margin-right: 5px;
        }
      }
      div:nth-child(2){
        color: var(--fontColor);
      }
    }
    .btn{
      width: 80%;
      color: var(--fontColor);
      user-select: none;
      font-size: 13px;
      background: var(--theme);
      text-align: center;
      padding: 10px 0;
      border-radius: 5px;
      margin: 30px auto 0 auto;
      opacity: 1;
      transition: all 1s;
      cursor: pointer;
      &:hover{
        transform: scale(1.1);
      }
    }
  }
}

@keyframes cloudfloating {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(-1920px);
  }
}
</style>