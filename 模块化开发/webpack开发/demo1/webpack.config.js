const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
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
    // 自动清除dist目录
    clean: true,
  },
  // 配置loader模块
  module: {
    rules: [
      // 匹配多个模块规则(配置loader、解析器等选项)
      {
        // 匹配css文件
        test: /\.css$/i,
        // 指定加载器，加载顺序是从左到右或者从上到下
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"], //处理css兼容
      },
      // 配置图片
      {
        // 匹配图片后缀
        test: /\.(png|jpeg|jpg|gif|bmp|webp)$/i,
        // 当成资源
        type: "asset",
        // 匹配生成文件的规则，hash：5，生成5位的hash值
        generator: {
          filename: "img/[hash:5][ext]",
        },
        // base64编码
        parser: {
          // 判断大小, 300kb以下, 转base64, 以上, 不转
          dataUrlCondition: {
            maxSize: 80 * 1024, // 300kb
          },
        },
      },
      // 处理js
      {
        test: /\.js$/i,
        exclude: /node_modules/, // 排除node_modules文件夹里面的js代码不编译
        loader: "babel-loader",
      },
    ],
  },
  // 开发服务器配置
  devServer: {},
  // 插件设置
  plugins: [
    // 设置html-webpack-plugin
    new HtmlWebpackPlugin({
      // 设置html文件模板
      template: "./src/index.html",
      // 设置生成的html文件名称
      filename: "index.html",
      title: "index首页",
      minify: {
        // 清除空格换行
        collapseWhitespace: true,
        // 清除注释
        removeComments: true,
      },
    }),
    // 设置MiniCssExtractPlugin
    new MiniCssExtractPlugin({
      filename: "./css/main.css",
    }),
  ],
};
