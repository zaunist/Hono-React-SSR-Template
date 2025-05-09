import { Hono } from 'hono'

export const router = new Hono()

router.get('/', (c) => {
    return c.view('home', {
        meta: {
          title: 'Honojs demo with react SSR and shadcn UI.',
        },
        props: {
          tp: 'index'
        }
      })
})

router.get('/login', (c) => {
  return c.view('login', {
    meta: {
      title: 'Login page',
    },
    props: {
      tp: 'Login'
    }
  })
})

router.get('/register', (c) => {
  return c.view('register', {
    meta: {
      title: 'Register page',
    },
    props: {
      tp: 'Register'
    }
  })
})