import { Hono } from 'hono'
import * as services from '../services'

export const user = new Hono()

// Login
user.post('/login', async (c) => {
    const { username, password } = await c.req.json();
    const user = await services.login(username, password)
    if (user) {
        return c.json({
            success: true,
            message: '登录成功',
            data: user
        })
    } 
    return c.json({
        success: false,
        message: '登录失败',
        data: null
    })
  })

// Register
user.post('/register', async (c) => {
    const { username, password, email } = await c.req.json();
    const user = await services.register(username, password, email)
    if (user) {
        return c.json({
            success: true,
            message: '注册成功',
            data: user
        })
    }
    return c.json({
        success: false,
        message: '注册失败',
        data: null
    })
  })

