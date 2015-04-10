var compression = require('compression')
var express = require('express')
var favicon = require('serve-favicon');
var request = require('request')

// Ensure Prerenderer has the ES6 & 7 features it needs
require('babel/polyfill')
require('babel/register')({ optional: ['asyncToGenerator'] })
var prerenderer = require('./prerenderer')

// Server defaults
var server = express()
var port = 3000

// Setup EJS templating
server.set('views', './server/views')
server.set('view engine', 'ejs')

// Middleware Stack
server.use(compression())
// Serve favicon requests from memory
server.use(favicon('./public/favicon.ico'))
// Serve static assets from public, run early to allow file overrides
server.use(express.static('public'))

switch (process.env.NODE_ENV) {
case 'production':
    port = 80
    // protect development builds from exposure on production
    server.get('/build/development/*', function(req,res) { res.redirect('/') })
    server.get('/build/stats.json', function(req,res) { res.redirect('/') })
    // Prerender React on Server-Side (Isomorphic)
    server.use(prerenderer)
    break
default:
    var handleproxyerror = function(err) {
        console.error(err)
        console.log('make sure webpack-dev-server is running on port 3001, run `npm run watch` to start it')
    }
    // proxy requests to /build/development onto webpack-dev-server
    server.use('/build/development/', function(req, res) {
        req.pipe(request('http://0.0.0.0:3001/build/development/' + req.url))
            .on('error', handleproxyerror)
            .pipe(res)
            .on('error', handleproxyerror)
    })
    // Catch-all for all remaining unclaimed routes
    server.use('/*', function(req, res) {
        res.render('index', { production: false, appString: '', hash: 'development' })
    })

}

// And finally, start listening
var listen = server.listen(port, '0.0.0.0', function() {
    console.log('Server listening on http://0.0.0.0:' + port + '/')
})
