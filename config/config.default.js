/* eslint valid-jsdoc: "off" */

'use strict';

const path = require('path');
const I18n = require('i18n');

I18n.configure({
  locales: [ 'en', 'cn' ],
  defaultLocale: 'cn',
  directory: __dirname + '/locales',
});
/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1622515620853_9970';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };
  // csrf
  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
  };
  // logs
  config.logger = {
    dir: path.join(__dirname, '../logs'),
  };

  config.session = {
    key: 'SESSION_ID', // 设置 Session cookies 里面的 key
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true,
    encrypt: true,
    renew: true, // 每次刷新页面，Session 都会被延期。
  };
  // jwt鉴权配置
  config.jwt = {
    secret: '123456',
    expiresIn: 60 * 60 * 24,
  };
  config.validate = {
    // convert: true,
    // validateRoot: false,
    translate() {
      const args = Array.prototype.slice.call(arguments);
      return I18n.__.apply(I18n, args);
    },
  };

  return {
    ...config,
    ...userConfig,
  };
};
