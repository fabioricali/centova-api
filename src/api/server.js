const request = require('../request');
const defaulty = require('defaulty');

module.exports = {
    create: function (opt) {

        return new Promise(function (resolve, reject) {
            opt = opt || {};

            const _opt = {
                xm: 'system.provision',
                f: 'json',
                a: {
                    password: opt.centovaPassword,
                    username: opt.username || null,
                    adminpassword: opt.adminpassword || null,
                    sourcepassword: opt.sourcepassword || null,
                    email: opt.email || null,
                    template: opt.template || null,
                    autostart: opt.autostart || 1,
                    hostname: opt.hostname || null,
                    ipaddress: opt.ipaddress || null,
                    port: opt.port || null,
                    rpchostid: opt.rpchostid || null,
                    maxbitrate: opt.maxbitrate || null,
                    transferlimit: opt.transferlimit || null,
                    diskquota: opt.diskquota || null,
                    title: opt.title || null,
                    genre: opt.genre || null,
                    url: opt.url || null,
                    introfile: opt.introfile || null,
                    fallbackfile: opt.fallbackfile || null,
                    autorebuildlist: opt.autorebuildlist || null,
                    charset: opt.charset || null,
                    servertype: opt.servertype || null,
                    apptypes: opt.apptypes || null,
                    resellerbandwidth: opt.resellerbandwidth || null,
                    resellerusers: opt.resellerusers || null,
                    resellersenderemail: opt.resellersenderemail || null,
                    resellerdefcharset: opt.resellerdefcharset || null,
                    maxclients: opt.maxclients || null,
                    timezone: opt.timezone || null
                }
            };

            request(opt.centovaUrl, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Destroy service
     * @param username
     * @param opt
     * @returns {Promise}
     */
    destroy: function (username, opt) {

        return new Promise(function (resolve, reject) {
            if (typeof username !== 'string') reject(new Error('Username required'));

            opt = opt || {};

            const _opt = {
                xm: 'system.terminate',
                f: 'json',
                a: {
                    password: opt.centovaPassword,
                    username: username,
                    clientaction: 'delete'
                }
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Set status service
     * @param username
     * @param status enabled or disabled
     * @param opt
     * @returns {Promise}
     */
    setAccountStatus: function (username, status, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof status !== 'string' && (status === 'enabled' || status === 'disabled')) reject(new Error('Status required'));

            opt = opt || {};

            const _opt = {
                xm: 'system.setstatus',
                f: 'json',
                a: {
                    password: opt.centovaPassword,
                    username: username,
                    status: status
                }
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Get resource usage
     * @param opt
     * @returns {Promise}
     */
    usage: function (opt) {

        return new Promise(function (resolve, reject) {

            opt = opt || {};

            const _opt = {
                xm: 'system.usage',
                f: 'json',
                a: {
                    password: opt.centovaPassword
                }
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Perform Batch Operations
     * @param username
     * @param opt
     * @returns {Promise}
     */
    batch: function (username, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));

            opt = opt || {};

            const _opt = {
                xm: 'system.usage',
                f: 'json',
                a: {
                    password: opt.centovaPassword,
                    username: username
                }
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    }
};