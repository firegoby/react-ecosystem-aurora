var config = require('./webpack.shared.config.js')
var webpack = require('webpack')

config.output.path = './public/build/development'
config.output.publicPath = '/build/development/'

config.module.loaders[0].loaders.unshift('react-hot')

config.plugins.push(new webpack.NoErrorsPlugin())

module.exports = config
