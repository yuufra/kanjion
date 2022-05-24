const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  outputDir: 'docs', // github pagesで表示するための設定
  publicPath: './'
})
