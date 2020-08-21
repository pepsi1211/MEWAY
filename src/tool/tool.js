const GoToAdmin = function(path,query = {}){
  /**
   * path String类型 跳转路径地址
   * query Object类型,需要传输的query
   */
  this.$router.push({path,query});
}

const GoToBack = (num) => {
  this.$router.go(num)
}

export {
  GoToAdmin,
  GoToBack
}