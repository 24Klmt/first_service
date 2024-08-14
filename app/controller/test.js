const { Controller } = require('egg');

class testController extends Controller {

  constructor(props) {
    super(props);
    this.service = this.ctx.service.test;
  }

  async find() {
    const query = this.ctx.query;
    this.ctx.body = await this.service.find(query);
  }

  async create() {
    const { body } = this.ctx.request;
    this.ctx.body = await this.service.create(body);
  }
}

module.exports = testController;
