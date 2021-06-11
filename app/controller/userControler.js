'use strict';

const BasicController = require('./basicController');

class UserController extends BasicController {
  async login() {
    const { ctx } = this;
    try {
      ctx.validate({
        userName: 'userName',
        password: 'password',
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const user = await ctx.service.userService.login(ctx.request.body);
      if (user) {
        return await this.send(user, 200, '获取成功');
      }
      return await this.send(null, 322, '账号或密码错误');
    } catch (e) {
      await this.send(null, 500, e.message);
    }
  }
  async currentUser() {
    const { ctx } = this;
    try {
      const user = await ctx.service.userService.currentUser();
      if (!user) {
        return await this.send(null, 200, '未登录');
      }
      await this.send(user, 200, '获取成功');
    } catch (e) {
      await this.send(null, 500, e.message);
    }
  }
  async logout() {
    this.ctx.session.token = null;
    await this.send(null, 200, '登出成功');
  }
  async register() {
    const { ctx } = this;
    try {
      ctx.validate({
        userName: 'userName',
        password: 'passWord',
        phone: 'string',
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const res = await ctx.service.userService.register(ctx.request.body);
      if (res) {
        return await this.send(null, 200, '新建成功');
      }
      return await this.send(null, 400, '新建失败');
    } catch (e) {
      this.send(null, 500, e.message);
    }
  }
  async edit() {
    const { ctx } = this;
    try {
      ctx.validate({
        password: {
          type: 'password',
          required: false,
        },
        phone: {
          type: 'string',
          required: false,
        },
        avatar: {
          type: 'string',
          required: false,
        },
      });
    } catch (e) {
      return await this.send(null, 322, e.message, e.errors);
    }
    try {
      const res = await ctx.service.userService.edit(ctx.request.body);
      if (res) {
        return await this.send(null, 200, '编辑成功');
      }
      return await this.send(null, 400, '编辑失败');
    } catch (e) {
      this.send(null, 500, e.message);
    }
  }
}

module.exports = UserController;
