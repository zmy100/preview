const { resolve } = require("path");
module.exports = {
  // 设置打包的模式为开发环境
  mode: "development",
  // 设置入口文件
  entry: "./src/index.js",
  // 设置出口
  output: {
    // 输出路径，绝对路径
    path: resolve(__dirname, "dist"),
    // 文件名称
    filename: "bundle.js",
  },
  // 配置loader模块
  module: {
    rules: [
      // 设置规则
    ],
  },
  // 开发服务器配置
  devServer: {},
  // 插件设置
  plugins: [],
};
