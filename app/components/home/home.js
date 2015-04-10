import React from 'react'

export default class Home extends React.Component {
    render() {
        return (
            <article>
            <h2>Features</h2>
            <ul>
            <li><a href="https://facebook.github.io/react/"><strong>React</strong></a> v0.13</li>
            <li><strong>Isomorphic!</strong> - Server-side rendering and serving from an Express web server</li>
            <li><a href="http://acdlite.github.io/flummox"><strong>Flummox</strong></a> - Flux-based Architecture</li>
            <li><a href="http://webpack.github.io/docs/"><strong>Webpack</strong></a> - with: -
            <ul>
            <li>development &amp; production configs extending a shared base config</li>
            <li>auto cache-busting asset hashing/serving for production</li>
            <li>shared modules are auto-separated into a common.js</li>
            </ul>
            </li>
            <li><a href="https://github.com/rackt/react-router"><strong>React Router</strong></a> - with a simple multi-'page', multi component example to get you started</li>
            <li><a href="https://babeljs.io/"><strong>Babel</strong></a> - auto-transpiles ES6 &amp; JSX</li>
            <li><a href="http://gaearon.github.io/react-hot-loader/"><strong>React Hot Loader</strong></a> - Tweak React components in real time</li>
            <li><a href="https://github.com/postcss/autoprefixer"><strong>Autoprefixed</strong></a>, <a href="https://learnboost.github.io/stylus/"><strong>Stylus</strong></a> CSS, auto-inserted per-Component require()</li>
            <li><a href="http://expressjs.com/"><strong>Express</strong></a> Web Server - for both production &amp; development</li>
            <li><a href="http://facebook.github.io/immutable-js/"><strong>Immutable.js</strong></a></li>
            <li>No additional build tool (gulp, grunt, etc) - all managed through NPM scripts</li>
            </ul>
            <h2>To Fix / Previously Working</h2>
            <ul>
            <li>Multiple discreet app entry points (index, admin) with own HTML templates (needs updating after adding Flummox &amp; Isomorphism)</li>
            </ul>
            <h2>Roadmap / To Do</h2>
            <ul>
            <li>React-ify these docs into the sample app more - seriously start dog-fooding this thing already</li>
            <li>Optimize App folder layout/structure based on real-world best practices</li>
            <li>Add comments throughout explaining what everything is doing</li>
            <li>Tests &amp; Testing!</li>
            </ul>
            <h2>Installation</h2>
            <ol>
            <li>
            <p>Download or git clone the project to your directory of choice.</p>
            </li>
            <li>
            <p><strong><code>cd yourProjectDir</code></strong></p>
            </li>
            <li>
            <p><strong><code>npm install</code></strong></p>
            </li>
            <li>
            <p><strong><code>npm start</code></strong></p>
            </li>
            <li>
            <p>Open <strong><code>http://localhost:3000/</code></strong> in your favourite web browser</p>
            </li>
            </ol>
            <h2>Usage</h2>
            <h3>Primary NPM script commands</h3>
            <ol>
            <li>
            <p><strong><code>npm start</code></strong> - Start both the Express Server under Nodemon in development mode on port 3000, and also the Webpack Dev Server on port 3001 (the Express server will automatically proxy the necessary requests to the Webpack Dev Server)</p>
            </li>
            <li>
            <p><strong><code>npm run build</code></strong> - Make Webpack build all modules ready for production and output stats.json for hashing/asset info.</p>
            </li>
            <li>
            <p><strong><code>npm run production</code></strong> - Run the Express server under Nodemon in production mode on port 80, runs via sudo for access to port 80.</p>
            </li>
            </ol>
            <p><strong>IMPORTANT NOTE</strong> - <strong>DO NOT</strong> use <strong><code>npm run production</code></strong> as a real-world production server, it is a VERY BAD IDEA to run your webserver as root. This command is included <em>so you can quickly test the production side of the ecosystem, with hashed compiled assets, on a port 80 facing server</em>. For your proper production environment you should follow more comprehensive instructions, such as <a href="https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps">How To Use PM2 to Setup a Node.js Production Environment On An Ubuntu VPS</a>. Obviously though that is outside the scope of this README.</p>
            <h3>Secondary NPM script commands.</h3>
            <p>(<em>These are not usally invoked directly, see above commands for daily usage</em>)</p>
            <ol>
            <li>
            <p><strong><code>npm run build-dev</code></strong> - Make webpack build all modules in development mode, output to /public/build/development/ - this command is not usually needed (see <code>npm run watch</code>) but is useful if you want to build actual files of your assets (alongwith source maps), perhaps if you need to run your development version on a server without webpack-dev-server installed for some reason. Or just to inspect the un-minified compiled files from Webpack.</p>
            </li>
            <li>
            <p><strong><code>npm run server</code></strong> - Run the Express server under Nodemon in production mode on port 80. Not usually called directly as needs to be run with root permissions to listen on port 80, see <strong><code>npm run build</code></strong> and <strong><code>npm run production</code></strong></p>
            </li>
            <li>
            <p><strong><code>npm run server-dev</code></strong> - Run the Express server under Nodemon in development mode on port 3000. Not usually called directly, see <strong><code>npm run start</code></strong>, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.</p>
            </li>
            <li>
            <p><strong><code>npm run watch</code></strong> - Run Webpack-dev-server in watch mode on port 3001. Not usually called directly, see <strong><code>npm run start</code></strong>, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.</p>
            </li>
            </ol>
            <h2>Dependencies</h2>
            <p>Nodemon, Webpack &amp; Webpack Dev Server <strong>used</strong> to need to be installed globally, this dependency has now been removed. Each project is self-contained, utilizing its own local <code>node_modules</code> copy of each required NPM binary.</p>
            <h2>Contributing</h2>
            <p>Please open an issue first to discuss potential changes/additions. All suggestions, ideas, recommendations very gratefully received!</p>
            <h2>License</h2>
            <p>The MIT License (MIT). Please see the LICENSE file.</p>
            </article>
        )
    }
}
