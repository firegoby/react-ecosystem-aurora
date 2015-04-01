var debug = require('debug')
var express = require('express')
var request = require('request')

// Debug & logging shortcuts
var log = debug('server')
var error = debug('server:error')

// App defaults
var app = express()
var port = 3000
var hash = 'development' // to match output path in config.output.path

// Setup EJS templating
app.set('views', './server/views')
app.set('view engine', 'ejs')

switch (process.env.NODE_ENV) {
    case 'production':
        port = 80
        // let's just assume `npm run build` has been run at least once
        hash = require('../public/build/stats.json').hash
        // protect development builds from exposure on production
        app.get('/build/development/*', function(req,res) { res.redirect('/') })
        app.get('/build/stats.json', function(req,res) { res.redirect('/') })
        break
    default:
        var handleProxyError = function(err) {
            error(err)
            log('make sure webpack-dev-server is running on port 3001, run `npm run watch` to start it')
        }
        // Proxy requests to /build/development onto webpack-dev-server
        app.use('/build/development/', function(req, res) {
            req.pipe(request('http://0.0.0.0:3001/build/development/' + req.url))
               .on('error', handleProxyError)
               .pipe(res)
               .on('error', handleProxyError)
        })
}

// Serve static assets from public, run first to allow file overrides
app.use(express.static('public'))

// Route all /admin* requests first, before catch-all
app.use('/admin*', function(req, res) {
    res.render('admin', { hash: hash })
})

// Catch-all for all remaining unclaimed routes
app.use('/*', function(req, res) {
    res.render('index', { hash: hash })
})

// And finally, start listening
var server = app.listen(port, '0.0.0.0', function() {
    log('is now listening on http://0.0.0.0:' + port + '/')
})
