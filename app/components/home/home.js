import React from 'react'
import './home.styl'

export default class Home extends React.Component {
    render() {
        return (
            <article>
            <h2 id="features">Features</h2>
            <ul>
            <li>React 0.13</li>
            <li>Webpack, with: -<ul>
            <li>development &amp; production configs extending a shared base config</li>
            <li>auto cache-busting asset hashing/serving for production</li>
            <li>shared modules are auto-separated into a common.js</li>
            </ul>
            </li>
            <li>React Router, with a simple multi-'page', multi component example to get you started</li>
            <li>Babel - auto-transpiles ES6 &amp; JSX</li>
            <li>React Hot Loader</li>
            <li>Autoprefixed Stylus CSS, auto-inserted per-Component require</li>
            <li>Express web server for both production &amp; development</li>
            <li>No additional build tool (gulp, grunt, etc) - all managed through NPM scripts</li>
            <li>Multiple discreet app entry points (index, admin) with own HTML templates</li>
            <li>Immutable.js</li>
            </ul>
            <h2 id="roadmap-to-do">Roadmap / To Do</h2>
            <ul>
            <li>Add Flux architecture - Reflux, Flummox, Alt, Fluxible?</li>
            <li>Make 'Isomorphic' a.k.a Server-Side Rendering</li>
            <li>React-ify these docs into the sample app more - seriously start dog-fooding this thing already</li>
            <li>Optimize App folder layout/structure based on real-world best practices</li>
            <li>Tests &amp; Testing!</li>
            </ul>
            <h2 id="dependencies">Dependencies</h2>
            <p>Most things are installed locally via NPM, but a few modules are expected to be available globally</p>
            <ol>
            <li><p>Nodemon - <code>npm install -g nodemon</code></p>
            </li>
            <li><p>Webpack - <code>npm install -g webpack</code></p>
            </li>
            <li><p>Webpack Dev Server - <code>npm install -g webpack-dev-server</code></p>
            </li>
            </ol>
            <p><strong>Note:</strong> Some setups may require global installs to be run with <code>sudo</code> e.g. <code>sudo -E npm install -g nodemon</code></p>
            <h2 id="installation">Installation</h2>
            <ol>
            <li><p>Download or git clone the project to your directory of choice.</p>
            </li>
            <li><p><strong><code>cd yourProjectDir</code></strong></p>
            </li>
            <li><p><strong><code>npm install</code></strong></p>
            </li>
            <li><p><strong><code>npm start</code></strong></p>
            </li>
            <li><p>Open <strong><code>http://localhost:3000/</code></strong> in your favourite web browser</p>
            </li>
            </ol>
            <h2 id="usage">Usage</h2>
            <h3 id="primary-npm-script-commands">Primary NPM script commands</h3>
            <ol>
            <li><p><strong><code>npm start</code></strong> - Start both the Express Server under Nodemon in development mode on port 3000, and also the Webpack Dev Server on port 3001 (the Express server will automatically proxy the necessary requests to the Webpack Dev Server)</p>
            </li>
            <li><p><strong><code>npm run build</code></strong> - Make Webpack build all modules ready for production and output stats.json for hashing/asset info</p>
            </li>
            <li><p><strong><code>npm run production</code></strong> - Run the Express server under Nodemon in production mode on port 80, runs via sudo for access to port 80</p>
            </li>
            </ol>
            <p><strong>IMPORTANT NOTE</strong> - <strong>DO NOT</strong> use <strong><code>npm run production</code></strong> as a real-world production server, it is a VERY BAD IDEA to run your webserver as root. This command is included <em>so you can quickly test the production side of the ecosystem, with hashed compiled assets, on a port 80 facing server</em>. For your proper production environment you should follow more comprehensive instructions, such as <a href="https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps">How To Use PM2 to Setup a Node.js Production Environment On An Ubuntu VPS</a>. Obviously though that is outside the scope of this README.</p>
            <h3 id="secondary-npm-script-commands-">Secondary NPM script commands.</h3>
            <p>(<em>These are not usally invoked directly, see above commands for daily usage</em>)</p>
            <ol>
            <li><p><strong><code>npm run build-dev</code></strong> - Make webpack build all modules in development mode, output to /public/build/development/ - this command is not usually needed (see <code>npm run watch</code>) but is useful if you want to build actual files of your assets (alongwith source maps), perhaps if you need to run your development version on a server without webpack-dev-server installed for some reason. Or just to inspect the un-minified compiled files from Webpack.</p>
            </li>
            <li><p><strong><code>npm run server</code></strong> - Run the Express server under Nodemon in production mode on port 80. Not usually called directly as needs to be run with root permissions to listen on port 80, see <code>npm run build</code> and npm run production`</p>
            </li>
            <li><p><strong><code>npm run server-dev</code></strong> - Run the Express server under Nodemon in development mode on port 3000. Not usually called directly, see <code>npm run start</code>, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.</p>
            </li>
            <li><p><strong><code>npm run watch</code></strong> - Run Webpack-dev-server in watch mode on port 3001. Not usually called directly, see <code>npm run start</code>, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.</p>
            </li>
            </ol>
            <h2 id="contributing">Contributing</h2>
            <p>Please open an issue first to discuss potential changes/additions. All suggestions,ideas, recommendations gratefully received.</p>
            <h2 id="license">License</h2>
            <p>The MIT License (MIT). Please see the LICENSE file.</p>
            </article>
        )
    }
}
