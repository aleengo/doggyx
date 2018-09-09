'use strict';

const http = require('http');
const https = require('https');
const url = require('url');

const log = require('./log');

module.exports = request;

function request(url) {

    let options = {
        method: 'GET',
        hostname: url.hostname,
        path: url.pathname
    };
    log(options);

    /*return new Promise( (resolve, reject) => {
        let _req = https.get(options, (req, res) => {
        });
        _req.end();
    });*/
}