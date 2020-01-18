'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    let result  = await this.app.mysql.get("article",{type_id: 1})
    this.ctx.body = result
  }
  // 获取文章首页
  async getArticleList() {
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' + 
              'article.introduce as introduce ,' + 
              'article.visit_num as visit_num ,' + 
              // "FROM_UNIXTIME(article.date,'%Y-%m-%d %H:%i:%s' ) as date,"+ //使用sql语法格式化时间戳
              'article.date as date ,' + 
              'type.type_name as type_name ' + 
              'FROM article LEFT JOIN type ON article.type_id = type.id'
  
    let result  = await this.app.mysql.query(sql)
    this.ctx.body = {
      data: result,
      status:0,
    }
  }

  // 通过文章id获取
  async getArticleById() {
    let id = this.ctx.params.id
    let sql = 'SELECT article.id as id ,' +
              'article.title as title ,' + 
              'article.introduce as introduce ,' + 
              'article.content as content ,' + 
              'article.visit_num as visit_num ,' + 
              // "FROM_UNIXTIME(article.date,'%Y-%m-%d %H:%i:%s' ) as date,"+ //使用sql语法格式化时间戳
              'article.date as date ,' + 
              'type.type_name as type_name ,' + 
              'type.id as typeId ' + 
              'FROM article LEFT JOIN type ON article.type_id = type.id ' + 
              'WHERE article.id='+id
  
    let result  = await this.app.mysql.query(sql)
    console.log(result)
    this.ctx.body = {
      data: result,
      status:0,
    }
    
  }
}

module.exports = HomeController;
