# Aurora - A React Ecosystem

React, and its various ecosystems, are varied and diverse, so suggesting that there is One True Ecosystem is misleading. Indeed, one of the many benefits of React is its modular approach, allowing a wide variety of libraries and development tools to be used alongside it, fitting the needs of each particular project. However, with such a wide variety of options, and with things changing so fast, it can be overwhelming (and time-consuming) for new-comers to React to get a sense of, let alone build, a complete & cohesive ecosystem on which to build their next project. React Ecosystem Aurora aims to be one such ecosystem, using a selection of (some of) the best libraries and workflow tools currently on offer.

A note on the name: Aurora = A, I fully expect in time for there to be a B, C...

## Features

* React 0.13
* Isomorphic! - Server-side rendering and serving from a Koa web server
* Flummox - Flux-based Architecture
* Webpack - with: -
    * development & production configs extending a shared base config
    * auto cache-busting asset hashing/serving for production
    * shared modules are auto-separated into a common.js
* React Router - with a simple multi-'page', multi component example to get you started
* Babel - auto-transpiles ES6 & JSX
* React Hot Loader
* Autoprefixed Stylus CSS, auto-inserted per-Component require()
* Koa Web Server - for both production & development
* Immutable.js
* No additional build tool (gulp, grunt, etc) - all managed through NPM scripts

## To Fix / Previously Working

* Multiple discreet app entry points (index, admin) with own HTML templates (needs updating after adding Flummox & Isomorphism)

## Roadmap / To Do

* React-ify these docs into the sample app more - seriously start dog-fooding this thing already
* Optimize App folder layout/structure based on real-world best practices
* Add comments throughout explaining what everything is doing
* Tests & Testing!

## Installation

1. Download or git clone the project to your directory of choice.

2. **`cd yourProjectDir`**

3. **`npm install`**

4. **`npm start`**

5. Open **`http://localhost:3000/`** in your favourite web browser

## Usage

### Primary NPM script commands

1. **`npm start`** - Start both the Koa Server under Nodemon in development mode on port 3000, and also the Webpack Dev Server on port 3001 (the Koa server will automatically proxy the necessary requests to the Webpack Dev Server)

2. **`npm run build`** - Make Webpack build all modules ready for production and output stats.json for hashing/asset info.

3. **`npm run build-server`** - Compile a Node compatible version of the Koa web server, so can be run without `Babel`, just needing `node --harmony --harmony-generators` as per usual for Koa apps.

4. **`npm run production`** - Run the Express server under Nodemon in production mode on port 80, runs via sudo for access to port 80.

**IMPORTANT NOTE** - **DO NOT** use **`npm run production`** as a real-world production server, it is a VERY BAD IDEA to run your webserver as root. This command is included *so you can quickly test the production side of the ecosystem, with hashed compiled assets, on a port 80 facing server*. For your proper production environment you should follow more comprehensive instructions, such as [How To Use PM2 to Setup a Node.js Production Environment On An Ubuntu VPS](https://www.digitalocean.com/community/tutorials/how-to-use-pm2-to-setup-a-node-js-production-environment-on-an-ubuntu-vps). Obviously though that is outside the scope of this README.

### Secondary NPM script commands.

(*These are not usally invoked directly, see above commands for daily usage*)

1. **`npm run build-dev`** - Make webpack build all modules in development mode, output to /public/build/development/ - this command is not usually needed (see `npm run watch`) but is useful if you want to build actual files of your assets (alongwith source maps), perhaps if you need to run your development version on a server without webpack-dev-server installed for some reason. Or just to inspect the un-minified compiled files from Webpack.

2. **`npm run server`** - Run the Express server under Nodemon in production mode on port 80. Not usually called directly as needs to be run with root permissions to listen on port 80, see **`npm run build`** and **`npm run production`**

3. **`npm run server-dev`** - Run the Express server under Nodemon in development mode on port 3000. Not usually called directly, see **`npm run start`**, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.

4. **`npm run watch`** - Run Webpack-dev-server in watch mode on port 3001. Not usually called directly, see **`npm run start`**, but useful if for instance you want to run Webpack-dev-server and the Express Development server in different terminal windows/separately.

## Dependencies

Nodemon, Webpack & Webpack Dev Server **used** to need to be installed globally, this dependency has now been removed. Each project is self-contained, utilizing its own local `node_modules` copy of each required NPM binary.

## Contributing

Please open an issue first to discuss potential changes/additions. All suggestions, ideas, recommendations very gratefully received!

## License

The MIT License (MIT). Please see the LICENSE file.
