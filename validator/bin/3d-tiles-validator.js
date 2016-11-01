#!/usr/bin/env node
'use strict';

var argv = require('yargs').argv;
var fsExtra = require('fs-extra');
var path = require('path');
var Promise = require('bluebird');

var readTileset = require('../lib/readTileset');
var validateTileset = require('../lib/validateTileset');

var filePath = argv._[0];
var response = validateTileset(readTileset(filePath));

console.log(response.message);
