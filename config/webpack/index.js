const HtmlWebpackPlugin = require('html-webpack-plugin')
const merge = require('webpack-merge')
const path = require('path')


const {NODE_ENV} = process.env
const envConfig = NODE_ENV === 'production' ? require('./production') : require('./development')
const {
  cleanPlugin,
  cssRule,
  pugRule,
} = envConfig
const context = path.resolve(__dirname, '..', '..')

const config = merge({
  context,
  entry: path.resolve(context, 'src'),
  output: {
    filename: 'app-[hash].js',
    path: path.resolve(context, 'dist'),
  },
  devServer: {
    // Display only errors to reduce the amount of output.
    stats: 'errors-only',
    host: process.env.HOST, // Defaults to `localhost`
    port: process.env.PORT, // Defaults to 8080
    overlay: true,
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /(node_modules|bower_components)/,
      use: {
        loader: 'babel-loader',
        options: {

        },
      },
    }],
  },
  resolve: {
    alias: {
      components: path.resolve(context, 'src/components/'),
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(context, 'src/index.pug'),
    }),
  ],
},
cleanPlugin,
cssRule,
pugRule,
)

module.exports = config

