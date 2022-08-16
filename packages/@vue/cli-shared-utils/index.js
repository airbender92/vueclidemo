/*
 * @Author: wangyunbo
 * @Date: 2022-08-08 16:19:16
 * @LastEditors: wangyunbo
 * @LastEditTime: 2022-08-08 16:19:16
 * @Description: file content
 */
[
'env'
].forEach(m => {
  Object.assign(exports, require(`./lib/${m}`))
})

exports.chalk = require('chalk');
exports.execa = require('execa');
exports.semver = require('semver');

Object.defineProperties(exports, 'installedBrowsers', {
  enumerable: true,
  get() {
    return exports.getInstalledBrowsers()
  }
})
