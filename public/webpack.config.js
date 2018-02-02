var path = require('path')

module.exports = {
  entry: {
    app: './js/app.js'
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'app.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, loader: "babel-loader", query: {presets: ['es2015', 'react']}}
    ]
  },
  stats: {
    colors: true
  },
  devtool: 'source-map',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
};