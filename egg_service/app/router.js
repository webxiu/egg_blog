'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  // const { router, controller } = app;
  // router.get('/home', controller.default.home.index);
  // router.get('/admin', controller.admin.api.index);
  require('./router/default')(app)
};
