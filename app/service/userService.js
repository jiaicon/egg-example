/**
 * Created by icon on 2021/6/1
 */
'use strict';

const Service = require('egg').Service;
const crypto = require('crypto');
const _ = require('lodash');

class UserService extends Service {
  async login(data) {
    const { ctx, app } = this;
    const hash = await crypto.createHash('md5').update(data.password);
    const password = await hash.digest('hex');
    const userName = data.userName;
    try {
      const user = await ctx.model.User.findOne({
        where: { userName, password },
        attributes: [ 'id', 'userName', 'phone', 'created_at', 'updated_at' ],
      });
      if (user) {
        // 加密用户名，生成token，服务端session使用token，然后拿token获取用户信息。
        const token = app.jwt.sign({
          userName: data.userName,
        }, app.config.jwt.secret, {
          expiresIn: app.config.jwt.expiresIn,
        });
        const user_copy = _.cloneDeep(user);
        await user.update({
          token,
        });
        ctx.session.token = token;
        return user_copy;
      }
      return null;
    } catch (e) {
      throw e;
    }
  }
  async currentUser() {
    const { ctx } = this;
    try {
      const token = await ctx.session.token;
      return await ctx.model.User.findOne({
        where: { token },
        attributes: [ 'id', 'userName', 'phone', 'created_at', 'updated_at' ],
        include: [
          { model: ctx.model.Interface },
        ],
      });
    } catch (e) {
      throw e;
    }
  }
  async register(data) {
    const { ctx } = this;
    try {
      const user = await ctx.model.User.findOne({ where: { userName: data.userName } });
      if (user) {
        throw new Error('User already exists');
      }
      const hash = await crypto.createHash('md5').update(data.password);
      const password = await hash.digest('hex');
      const res = await ctx.model.User.create({
        ...data,
        password,
      });
      if (res) {
        return true;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
  async edit(data) {
    try {
      // 用户名不允许修改
      delete data.userName;
      if (data.password) {
        const hash = await crypto.createHash('md5').update(data.password);
        data.password = await hash.digest('hex');
      }
      const user = await this.currentUser();
      const res = await user.update({
        ...data,
      });
      if (res) {
        return true;
      }
      return false;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = UserService;

