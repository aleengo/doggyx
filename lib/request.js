'use strict';

const http = require('http');
const https = require('https');
const url = require('url');

const log = require('./log');

module.exports = request;

function request(url) {

    log(url);
    let options = {
        hostname: url.hostname,
        path: `${url.pathname}${url.search}`,
        headers: {
            'X-powered-By': 'doggyx'
        }
    };
    //log(options);

    return new Promise( (resolve, reject) => {
        let _req = https.get(options, (res) => {
            
            if(res.statusCode !== 200) {
                reject(new Error(`Request failed.\n Status code : ${res.statusCode}`));
            }

            let data = '';
            res.setEncoding('utf8');
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
                    log('length', parsedData.result.length);
                    resolve({result: o, body: parsedData.result}); 
                } catch (error) {
                    reject(error);
                }
            });
        });
        _req.on('error', (err) => reject(err));;
        _req.end();
    });
}