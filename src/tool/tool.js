import Vue from 'vue'

Vue.prototype.$admin = (url,query)=>{
  /**
   * url String类型 跳转路径地址
   * query Object类型,需要传输的query
   */
  console.log(url,query);
  var path = `admin/${url}`;
  console.log(this);
  this.$router.push({path,query});
}