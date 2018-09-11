'use strict';

const http = require('http');
const https = require('https');
const url = require('url');

const log = require('./log');

module.exports = request;

function request(url) {

    //log(url);
    const path = url.search ? `${url.pathname}${url.search}` : `${url.pathname}`;
    let options = {
        method: 'GET',
        hostname: url.hostname,
        path: path,
        headers: {
            'X-powered-By': 'doggyx'
        }
    };
    //log(options);

    return new Promise( (resolve, reject) => {
        let _req = https.request(options, (res) => {

            if(res.statusCode !== 200) {
                return reject(new Error(`Request failed.\n Status code : ${res.statusCode}`));
            }
            res.setEncoding('utf8');

            let data = '';
            res.on('data', (chunk) => {
                data += chunk;
            });

            res.on('end', () => {
                try {
                    const parsedData = JSON.parse(data);
                    const o = {
                        success: parsedData.success,
                        message: parsedData.message,
                        count: parsedData.count,
                        code: parsedData.code
                    };
                    return resolve({metadata: o, body: parsedData.result});
                } catch (error) {
                    return reject(error);
                }
            });
        });
        _req.on('error', (err) => {
            return reject(err);
        });
        _req.end();
    });
}
