var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports ={
  entry:'./src/index.js',
  output:{
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      { test: /\.css$/, use: ['style-loader', 'css-loader']},
      { test: /\.(gif|eot|woff|woff2|ttf|svg)$/, use: ['url-loader'] }
    ]
  },
  mode: process.env.NODE_ENV === 'production' ? 'production':'development',
  plugins: [
    new HtmlWebpackPlugin ({
      template: 'src/index.html'
    })
  ]
}
