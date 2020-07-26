module.exports = {
  // publicPath: '/Letu',
  devServer: {
    // 配置服务
    open: true, // 项目启动完毕之后是否自动打开浏览器页面
    proxy: {
      // 配置跨域
      "/api": {
        target: 'http://localhost:3000',
        changeOrigin: true
      }
    }
  }
}