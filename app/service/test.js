const Service = require('egg').Service;

class testService extends Service {

  constructor(props) {
    super(props);
    // this.service = this.ctx.service.test;
  }

  async find() {
    // 获取tests表的所有数据
    const data = await this.ctx.model.Tests.find({});
    return { code: 1, data };
  }

  async create() {
    await this.ctx.model.Tests.create({ timestamp: new Date().getTime() });
    return { code: 1, msg: 'success' };
  }
}

module.exports = testService;
