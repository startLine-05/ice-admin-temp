const path = require('path');

const port = 7101; // dev port

module.exports = {
  publicPath: './',
  lintOnSave: false,
  filenameHashing: false,
  css: {
    extract: true,
  },
  devServer: {
    hot: true,
    disableHostCheck: true,
    open:true,
    port,
    overlay: {
        warnings: false,
        errors: true,
    },
    // 跨域
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
  configureWebpack: {
    resolve: {
      extensions: ['.js', '.json', '.vue'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      },
    },
    output: {
      library: 'icestark-vue-demo',
      libraryTarget: 'umd',
    },
  },
  chainWebpack: (config) => {
    config.optimization.delete('splitChunks');
  },
};
