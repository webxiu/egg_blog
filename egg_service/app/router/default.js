module.exports = app =>{
    const {router,controller} = app
    router.get('/default/index',controller.default.home.index)
    router.get('/default/article/list',controller.default.home.getArticleList)
    router.get('/default/article/detail/:id',controller.default.home.getArticleById)
}