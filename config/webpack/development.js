const parts = require('./parts')


exports.pugRule = parts.pugRule({pretty: true})
exports.cssRule = parts.cssRule({
  cssLoaderOptions: {
    modules: true,
  },
})

