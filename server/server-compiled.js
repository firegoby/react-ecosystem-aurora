'use strict';

require('babel/polyfill');
require('babel/register')({
    optional: ['asyncToGenerator']
});
require('./koa');
