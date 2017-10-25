const requestify = require('requestify');

/**
 * Build http query string
 * @param params
 * @param owner
 * @returns {*}
 */
function httpBuildQuery(params, owner) {
    if (typeof params === 'undefined' || typeof params !== 'object') {
        params = {};
        return params;
    }

    let query = '';

    for (let param in params) {
        if (params.hasOwnProperty(param)) {
            let value = params[param];
            if (typeof value === 'object') {
                query += httpBuildQuery(value, param);
            } else {
                if (!owner)
                    query += param + '=';
                else
                    query += owner + '[' + param + ']=';

                query += encodeURIComponent(value) + '&';
            }
        }
    }
    return query.replace(/&+$/, '');
}

/**
 * Requestify wrapper
 * @param url
 * @param _opt
 * @returns {Promise}
 */
function request(url, _opt) {
    return new Promise(function (resolve, reject) {
        requestify.request(url + '?' + httpBuildQuery(_opt), {
            method: 'POST'
        }).then(function (res) {
            let response = JSON.parse(res.body) || {type: "error", response: {message: "JSON response error"}};
            if (response.type === 'success')
                resolve(response);
            else {
                reject(new Error(response.response.message));
            }
        }).fail(function (res) {
            reject(res.body);
        });
    });
}

module.exports = request;