var path = require('path')
var webpack = require('webpack')

var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('common.js')

var definePlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV !== 'production')),
    __PRODUCTION__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'production'))
})

module.exports = {
    entry: {
        main: ['./app/main.js'],
        admin: ['./app/admin.js']
    },
    output: {
        filename: '[name].js',
    },
    module: {
        loaders: [
            { test: /\.js$/, loaders: ['babel'], include: path.join(__dirname, 'app') },
            { test: /\.styl$/, loaders: ['style', 'css', 'autoprefixer', 'stylus'] }
        ]
    },
    plugins: [
        commonsPlugin,
        definePlugin,
        new webpack.optimize.DedupePlugin(),
    ]
}
