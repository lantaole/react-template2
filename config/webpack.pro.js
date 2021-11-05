const path = require("path");
const common = require('./webpack.common.js');
const { merge } = require('webpack-merge')

module.exports = merge(common, {
  mode: "production",
  output: {
    filename: "[name].[contenthash].js",
    publicPath: "",
    path: path.resolve(__dirname, "../build"),
    // 打包前清空输出目录
    clean: true,
  },
})



