<template>
  <main class="main">
    <Header></Header>
    <div class="cloudfloating"></div>
    <!-- 注册框 -->
    <div class="frame">
      <div class="title">注册</div>
      <section class="section">
        <input type="text" v-model="phone" placeholder="手机号">
        <input type="password" v-model="password" placeholder="密码">
        <input type="text" v-model="verify" placeholder="识别码">
      </section>
      <div class="btn" @click="login">
        注册
      </div>
    </div>
  </main>
</template>
<script>
import Header from '@/components/Header'
export default {
  name: 'Login',
  data() {
    return {
      phone: '',
      password: '',
      verify: ''
    };
  },
  name: "",
  methods: {
    register(){
      var params = {
        phone: this.phone,
        password: this.password,
        verify: this.verify
      }
      this.axios.post( '/api/users/register', this.$qs.stringify(params) ).then(res=>{
        console.log(res);
      })
    },
  },
  components:{
    Header
  },
  watch: {},
  computed: {},
  mounted(){

  }
};
</script>
<style lang="scss" scoped>
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
      label:first-child{
        display: flex;
        align-items: center;
        cursor: pointer;
        input{
          margin-right: 5px;
        }
      }
      div:nth-child(2){
        color: var(--fontColor);
        cursor: pointer;
        transition: all .3s;
        &:hover{
          color: var(--deepTheme);
        }
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
        color: #333;
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