'use strict'

// user require with a reference to bundle the file and use it in this file
// var example = require('./example');

// allows usage of new JS features
require('babel-polyfill')

// load manifests
// scripts
require('./colorGame.js')

// styles
require('./colorGame.css')
