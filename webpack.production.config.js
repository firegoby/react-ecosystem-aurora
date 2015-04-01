var config = require('./webpack.shared.config.js')
var fs = require('fs')
var webpack = require('webpack')

var statsPlugin = function() {
    this.plugin('done', function(stats) {
        fs.writeFileSync( './public/build/stats.json', JSON.stringify(stats.toJson()))
    })
}

config.output.path = './public/build/[hash]'

config.plugins.push(statsPlugin)
config.plugins.push(new webpack.optimize.UglifyJsPlugin())

module.exports = config
