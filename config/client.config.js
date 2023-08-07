const path  = require('path')
const { VueLoaderPlugin } = require('vue-loader/dist/index')

module.exports = {
  target: 'web',
  mode: 'development',
  entry: './src/client/index.js',
  output: {
    filename: 'client_bundle.js',
    path: path.resolve(__dirname, '../build/client')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  }, 
  plugins: [ new VueLoaderPlugin() ],
  resolve: {
    extensions: ['.js', '.json', '.vue']
  },
}