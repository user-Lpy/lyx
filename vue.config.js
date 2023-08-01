module.exports = {
  // 跨域配置
  devServer: {
    // proxy反向代理
    proxy: {
      // http://localhost:8080
      '/api': {
        // 请求真正的地址
        target: 'http://8.140.34.53:3001',
        ws: true,
        changeOrigin: true
        // pathRewrite:{
        //   '^/api':""
        // }
      }
    }
  }
}
