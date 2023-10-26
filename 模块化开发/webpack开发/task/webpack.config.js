const { resolve } = require("path");
// 导入 html-webpack-plugin
const HtmlWebpackPlugin = require("html-webpack-plugin");
// 导入 mini-css-extract-plugin
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  // 设置打包模式为开发环境
  mode: "development",
  // 设置入口文件
  entry: "./src/index.js",
  // 设置出口
  output: {
    // 文件路径，绝对路径
    path: resolve(__dirname, "dist"),
    // 设置文件名称
    filename: "bundle.js",
    // 自动清除dist目录
    clean: true,
  },
  // 配置loader模块
  module: {
    rules: [
      // 配置多个模块规则（配置loader、解析器等选项）
      // 匹配css文件
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
      // 匹配图片后缀
      {
        test: /\.(png|jpeg|jpg|gif|bmp|webp)$/i,
        // 当成资源
        type: "asset",
        // 配置生成文件的规则, hash:5, 生成5位的hash值
        generator: {
          filename: "img/[hash:5][ext]",
        },
        // base64编码的阈值，当图片大于阈值时，会生成图片文件，否则生成base64编码
        parser: {
          dataUrlCondition: {
            maxSize: 80 * 1024,
          },
        },
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
      // 配置html文件压缩
      minify: {
        // 清除空格
        collapseWhitespace: true,
        // 清除注释
        removeComments: true,
      },
    }),
    // 设置mini-css-extract-plugin
    new MiniCssExtractPlugin({
      // 设置输出的css文件名称
      filename: "./css/main.css",
    }),
  ],
};
