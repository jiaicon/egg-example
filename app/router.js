'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const verifyToken = middleware.verifyToken();

  router.get('/', controller.home.index);

  // 用户相关
  router.post('/api/login', controller.userControler.login);
  router.post('/api/register', controller.userControler.register);
  router.put('/api/user', controller.userControler.edit);
  router.get('/api/currentUser', verifyToken, controller.userControler.currentUser);
  router.get('/api/logout', controller.userControler.logout);

  //
  router.get('/api/unit', verifyToken, controller.unitController.list);
};

