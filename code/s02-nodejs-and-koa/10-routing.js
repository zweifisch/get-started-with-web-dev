import Koa from "koa"
const app = new Koa

import Router from "koa-router"
const router = new Router

router.get('/', (ctx) => {
  ctx.body = 'router'
})


app.use(router.routes())

app.listen(3000)
