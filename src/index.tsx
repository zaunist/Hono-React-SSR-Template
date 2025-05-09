import { Hono } from 'hono'
import { renderer } from './renderer'
import initView from './view'
import * as middleware from './middleware'
import * as api from './api'
import * as router from './router'
import { initDb } from './db';
import isProd from './config/is_prod'; 

initView()
const app = new Hono()

// 初始化数据库
initDb(process.env.DATABASE_URL)

// 挂载中间件
app.use(renderer)
app.use(middleware.ViewRenderer)

// 挂载静态资源文件 - 仅在生产环境
if (isProd) {
    const { serveStatic } = await import('hono/bun')
    app.use('/static/*', serveStatic({ root: './dist/' }))
  }

// 挂载前端路由
app.route('/', router.router)

// 挂载后端路由
app.route('/api/user', api.user)
export default app
