'use strict';

const BasicController = require('./basicController');

class UnitController extends BasicController {
  async list() {
    try {
      const units = await this.ctx.model.Unit.findAll();
      const ips = await this.ctx.model.Ip.findAll();
      return this.send(units.concat(ips), 200, '获取成功');
    } catch (e) {
      return this.send(null, 500, e.message);
    }
  }
}

module.exports = UnitController;
