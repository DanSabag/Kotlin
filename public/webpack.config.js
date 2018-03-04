const path = require('path')
const webpack = require("webpack")

var BUILD_DIR = path.resolve(__dirname, 'app/build');
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
        query: {
          presets: ['es2015', 'react'], 
          cacheDirectory: true,
          plugins: [
            ["import", [{ "libraryName": "antd", "style": true }]],
          ]
        }
      },
      {
        test: /\.css$/,
        include: APP_DIR,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: ['style-loader', 'less-loader']
      }
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  plugins: [
		new webpack.ProvidePlugin({
			'$': 'jquery',
      'jQuery': 'jquery',
      'window.jQuery': 'jquery',
      'Popper': 'popper.js',
      'Waves': 'node-waves',
      'React': 'react'
    })
  ],
  resolve: {
    extensions: ['.js', '.json', '.less']
  }
};

module.exports = config;