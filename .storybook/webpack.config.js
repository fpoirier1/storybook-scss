const path = require('path')
const webpack = require('webpack')

const includePath = path.resolve(__dirname, '../');

module.exports = {
  resolve: {
    modules: [
      path.join(__dirname, '../'),
      'node_modules'
    ],
    extensions: [
      '.js',
      '.jsx',
      '.scss'
    ]
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
          },
          { loader: 'sass-loader' },
          // { loader: 'postcss-loader' }
        ]
      }, 	
      { test: /\.(png|jpg|gif)$/, use: 'url-loader?limit=15000&name=[hash:base64:5].[ext]' },
      { test: /\.eot(\?v=\d+.\d+.\d+)?$/, use: 'file-loader' },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, use: 'url-loader?limit=10000&mimetype=application/font-woff' },
      { test: /\.(woff|woff2|eot|ttf)?$/, use: 'url-loader?limit=10000&mimetype=application/octet-stream' },
      { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, use: 'url-loader?limit=10000&mimetype=image/svg+xml' }
    ]
  },

  plugins: [
    new webpack.ProvidePlugin({
      React: 'react',
      PropTypes: 'prop-types'
    })
  ],
}