var config = require('./webpack.shared.config.js')
var ExtractTextPlugin = require("extract-text-webpack-plugin")
var fs = require('fs')
var webpack = require('webpack')

var statsPlugin = function() {
    this.plugin('done', function(stats) {
        fs.writeFileSync( './public/build/stats.json', JSON.stringify(stats.toJson()))
    })
}

config.output.path = './public/build/[hash]'

config.plugins.push(statsPlugin)
config.plugins.push(new ExtractTextPlugin('[name].css'))
config.plugins.push(new webpack.optimize.UglifyJsPlugin())

config.module.loaders[1] = { test: /\.styl$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader!autoprefixer-loader!stylus-loader") }

module.exports = config
