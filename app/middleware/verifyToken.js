'use strict';

module.exports = () => {
  return async function verifyToken(ctx, next) {
    const token = ctx.session.token;
    if (token) {
      await next();
    } else {
      ctx.status = 401;
      ctx.body = {
        data: null,
        status: true,
        msg: '未登录',
      };
      return;
    }
  };
};
