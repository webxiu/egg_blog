'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result  = await this.app.mysql.get("article",{type_id: 1})
    this.ctx.body = result
  }
  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' + 
              'article.introduce as introduce ,' + 
              'article.visit_num as visit_num ,' + 
              'article.date as date ,' + 
              'type.type_name as type_name ' + 
              'FROM article LEFT JOIN type ON article.type_id = type.id'
  
    let result  = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result,
      status:0,
    }
    
  }
}

module.exports = HomeController;
