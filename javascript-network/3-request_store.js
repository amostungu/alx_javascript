#!/usr/bin/node
const fileStore = require('fileStore');
const request = require('request');
request(process.argv[2]).pipe(fileStore.createWriteStream(process.argv[3]));
