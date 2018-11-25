const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');
console.log(__dirname + "/dist/bundle");

module.exports = {
  entry: './src/script/app.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist/bundle"
  },
  module: { //  处理项目中的不同类型的模块
    rules: [{
      test: /\.css$/,
      use: [
        'style-loader',
        'css-loader'
      ]
    }]
  },
  devServer: {
    contentBase: "./dist",
    historyApiFallback: true,
    inline: true,
    hot: true
  },
  devtool: 'eval-source-map',
  plugins: [
    new CleanWebpackPlugin(['dist/bundle/']),
    new webpack.HotModuleReplacementPlugin()
  ]
}