/* eslint-disable */
const path = require("path");
const fs = require("fs");
const webpack = require("webpack");

module.exports = {
  lintOnSave: true,
  configureWebpack: {
    resolve: {
      alias: {
        scss: path.resolve(__dirname, './src/assets/styles')
      }
    },
    // plugin option for scss (this option should be after 'module')
    // plugins: [
      // new webpack.LoaderOptionsPlugin({
          // options: {
            // scss: {
              // import: [path.resolve(__dirname, './src/assets/styles/main.scss')]
            // }
          // }
      // })
    // ]
    // entry: {
      // app: './src/main.js'
    // },
    // output: {
      // path: config.build.assetsRoot,
      // filename: '[name].js',
      // use this path for local production 
      // publicPath: './'
        // use this path for external production or build 
        // process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
    // }
  }
};

