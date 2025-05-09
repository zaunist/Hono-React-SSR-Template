import app from './src/index'

const port = process.env.PORT || 3000

export default {
  port,
  fetch: app.fetch
} 