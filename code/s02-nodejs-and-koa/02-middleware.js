import Koa from "koa"
const app = new Koa

app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.path}`)
    await next()
})

app.use(ctx => {
    ctx.body = "hello there"
})

app.listen(3000)
