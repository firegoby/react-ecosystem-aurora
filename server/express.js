var express = require('express')
var request = require('request')

// Server defaults
var server = express()
var port = 3000
var hash = 'development' // to match output path in config.output.path

// Setup EJS templating
server.set('views', './server/views')
server.set('view engine', 'ejs')

switch (process.env.NODE_ENV) {
case 'production':
    port = 80
    // let's just assume `npm run build` has been run at least once
    hash = require('../public/build/stats.json').hash
    // protect development builds from exposure on production
    server.get('/build/development/*', function(req,res) { res.redirect('/') })
    server.get('/build/stats.json', function(req,res) { res.redirect('/') })
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
}

// Serve static assets from public, run first to allow file overrides
server.use(express.static('public'))

// Route all /admin* requests first, before catch-all
server.use('/admin*', function(req, res) {
    res.render('admin', { hash: hash })
})

// Catch-all for all remaining unclaimed routes
server.use('/*', function(req, res) {
    res.render('index', { hash: hash })
})

// And finally, start listening
var listen = server.listen(port, '0.0.0.0', function() {
    console.log('Server listening on http://0.0.0.0:' + port + '/')
})
