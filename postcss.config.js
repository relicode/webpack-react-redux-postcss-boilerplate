const {NODE_ENV} = process.env
const isProduction = NODE_ENV === 'production'

const plugins = isProduction ? {
  'postcss-import': {},
  'postcss-cssnext': {},
  'cssnano': {},
} : {
  'postcss-import': {},
  'postcss-cssnext': {},
}

exports.plugins = plugins

