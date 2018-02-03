var path = require('path')

var BUILD_DIR = path.resolve(__dirname, 'build');
var APP_DIR = path.resolve(__dirname, 'app');

var config = {
  entry: {
    app: path.resolve(APP_DIR, 'js/index.js')
  },
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        include: APP_DIR,
        loader: "babel-loader", 
        query: {presets: ['es2015', 'react']}},
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map'
};

module.exports = config;