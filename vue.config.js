/*const { defineConfig } = require('@vue/cli-service')
module.exports = {
  defineConfig({
    transpileDependencies: true
  })
}*/
module.exports = {
  devServer: {
    proxy: "https://sensor-backend.onrender.com",
    /*ws: true,
    changeOrigin: true*/
  }
}
