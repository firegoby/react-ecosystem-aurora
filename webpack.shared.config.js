var path = require('path')
var webpack = require('webpack')

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.js')

var env = process.env.NODE_ENV || 'development'
var definePlugin = new webpack.DefinePlugin({
    "process.env": {
        BROWSER: JSON.stringify(true),
        NODE_ENV: JSON.stringify(env)
    }
})

module.exports = {
    entry: {
        main: ['./app/main.js'],
        vendor: ['react', 'react-router', 'immutable', 'flummox']
    },
    output: {
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel-loader?stage=1&optional=runtime'], include: path.join(__dirname, 'app') },
            { test: /\.styl$/, loaders: ['style', 'css', 'autoprefixer', 'stylus'] }
        ]
    },
    plugins: [
        commonsPlugin,
        definePlugin,
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurenceOrderPlugin()
    ]
}
