<template>
  <header class="header">
    <div class="logo">
      <img src="../../../public/img/logo.png">
    </div>
  </header>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods: {}
}
</script>

<style lang="scss">
  .header{
    width: 100%;
    height: 110px;
    display: flex;
    padding: 0 150px;
    .logo{
      display: flex;
      align-items: center;
      justify-content: center;
      img{
        width: 110px;
      }
    }
  }
</style>