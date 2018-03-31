const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: 'styles.css',
  },
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            options: {
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      })
    }]
  },
  plugins: [
    new ExtractTextPlugin('styles.css'),
    new HtmlWebpackPlugin({
      title: 'Ben Bjurstrom - Resume',
      template: 'src/views/template.html'
    }),
    new HtmlWebpackPlugin({
      title: 'Ben Bjurstrom - Cover Letter',
      filename: 'cover-letter.html',
      template: 'src/views/cover-letter.html'
    }),
  ]
}