import Koa from "koa"
const app = new Koa

app.use(ctx => {
    ctx.body = "hello there"
})

app.listen(3000)
