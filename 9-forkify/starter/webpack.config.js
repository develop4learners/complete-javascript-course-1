const path = require('path'); //built in node module called path..?
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: ['./src/js/index.js'],
  output: { //where we wanna store webpack's bundle output
    path : path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js'
  },
  devServer: {
    contentBase: './dist'
  },
  plugins: [
    new htmlWebpackPlugin({
      filename: 'index.html',
      template: './src/index.html' //some apps just have webpack auto-generate index.html on the fly without template!
    })
  ]
  
};
