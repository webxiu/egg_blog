/* eslint valid-jsdoc: "off" */

'use strict';

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
  config.keys = appInfo.name + '_1579330158197_8041';

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };


  // mysql连接配置
  config.mysql = {
    client: {
      host: 'localhost',
      port: '3306',
      user: 'root',
      password: '123654',
      database: 'article',
    },
    app: true,
    agent: false,
  };

  // 配置安全
  config.security = {
    csrf: {
      enable: false
    },
    domainWhiteList: ['*']
  };
  // 配置跨域
  config.cors = {
    // origin: 'http://localhost:3000', //只允许这个域进行访问接口
    origin: '*',
    credentials: true,   // 开启认证
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS'
  };


  return {
    ...config,
    ...userConfig,
  };
};
