const Koa = require('koa') // 引入 koa 构造函数，来创建koa应用
// 引入的 koa-router 是一个函数，需要再调用一次
const router = require('koa-router')()
const koaStatic = require('koa-static')
const app = new Koa() // 创建应用

// 使用静态文件目录
// 指定静态文件目录
// __dirname 可以直接获取当前项目的绝对路径
app.use(koaStatic(__dirname + '/public'))

// D:\Desktop\Learn\warehouse\node\node\koa
console.log('sss', __dirname)

// use 方法，koa 框架的方法，可以引入一个中间件
// 中间件 在 请求和响应之间执行
// app.use(async (ctx) => {
//   // ctx 上下文
//   ctx.body = 'hello Koa'
// })
router.get('/', async (ctx) => {
  // ctx.body = 'home page'
  ctx.body = `
  <h1>标题</h1>
  <p>响应文本可以是 html 标签，普通的引号不支持多行 可以使用 反引号</p>
  <img src="/images/66.jpg" alt="">
  `
})

router.get('/video', async (ctx) => {
  ctx.body = 'video page'
})

app.use(router.routes()) // koa中 使用 router

// 设置监听端口
app.listen(8618, () => {
  console.log('Server is running!!!')
})
