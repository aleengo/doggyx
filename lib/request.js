'use strict';

const request = require('request');

module.exports = doRequest;

function doRequest(url, options) {

    const _request = request.defaults(options);

    return new Promise( (resolve, reject) => {
        _request
            .get(url)
            .on('response', ( res ) => {

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
                        return resolve({
                            success: parsedData.success,
                            message: parsedData.message,
                            count: parsedData.count,
                            code: parsedData.code,
                            data: parsedData.result
                        });
                    } catch (error) {
                        return reject(error);
                    }
                });
            });
        });
}
