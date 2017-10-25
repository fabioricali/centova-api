const request = require('../request');
const defaulty = require('defaulty');

module.exports = {

    /**
     * Start service
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    start: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.start',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Start service
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    restart: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.restart',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Stop service
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    stop: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.stop',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Reload service
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    reload: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.reload',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Get service status
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    status: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.getstatus',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Reconfigure account
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    reconfigure: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.reconfigure',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    },

    /**
     * Get song history from service
     * @param username
     * @param password
     * @param opt
     * @returns {Promise}
     */
    songHistory: function (username, password, opt) {

        return new Promise(function (resolve, reject) {

            if (typeof username !== 'string') reject(new Error('Username required'));
            if (typeof password !== 'string') reject(new Error('Password required'));

            opt = opt || {};

            opt.username = username;
            opt.password = password;

            const _opt = {
                xm: 'server.getsongs',
                f: 'json',
                a: opt
            };

            request(opt, _opt).then(function (response) {
                resolve(response)
            }).catch(function (error) {
                reject(error)
            });

        });
    }
};