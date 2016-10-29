import Koa from "koa"
const app = new Koa

import Router from "koa-router"
const router = new Router

router.get('/', (ctx) => {
  ctx.body = 'router'
})

router.get('/hello/:name', ctx => {
  ctx.body = `hello ${ctx.params.name}`
})

app.use(router.routes())

app.listen(3000)
