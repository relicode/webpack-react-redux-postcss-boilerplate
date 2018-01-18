const path = require('path')

const parts = require('./parts')


exports.pugRule = parts.pugRule({pretty: false})
exports.cssRule = parts.extractCSS({
  use: ['css-loader?modules', 'postcss-loader'],
})

exports.cleanPlugin = parts.clean({path: 'dist', options: {
  root: path.resolve(__dirname, '..', '..'),
  // exclude:  ['shared.js'],
  verbose: true,
  dry: false, 
}})

