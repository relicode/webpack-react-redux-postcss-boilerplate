const CleanWebpackPlugin = require('clean-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')


exports.pugRule = (options = {}) => ({
  module: {
    rules: [
      {
        test: /\.pug/,
        use: [{
          loader: 'pug-loader',
          options,
        }],
      },
    ],
  },
})

exports.cssRule = ({include, exclude, styleLoaderOptions, cssLoaderOptions, postcssLoaderOptions} = {}) => ({
  module: {
    rules: [
      {
        test: /\.css$/,
        include,
        exclude,
        use: [
          {
            loader: 'style-loader',
            options: styleLoaderOptions,
          }, {
            loader: 'css-loader',
            options: cssLoaderOptions,
          }, {
            loader: 'postcss-loader',
            options: postcssLoaderOptions,
          },
        ],
      },
    ],
  },
})

exports.extractCSS = ({ include, exclude, use }) => {
  const plugin = new ExtractTextPlugin({
    allChunks: true,
    filename: 'styles-[hash].css',
  })

  return {
    module: {
      rules: [
        {
          test: /\.css$/,
          include,
          exclude,

          use: plugin.extract({
            use,
            fallback: 'style-loader',
          }),
        },
      ],
    },
    plugins: [plugin],
  }
}

exports.clean = ({path, options} = {}) => ({
  plugins: [new CleanWebpackPlugin(path, options)],
})

