import Koa from "koa"
const app = new Koa

app.use(async (ctx, next) => {
    console.log(`${ctx.method} ${ctx.path}`)
    await next()
})

const timeRequest = async (ctx, next) => {
    const requestStarted = new Date()
    await next()
    console.log(`took: ${new Date() - requestStarted} ms`)
}
app.use(timeRequest)

app.use(ctx => {
    ctx.body = "hello there"
})

app.listen(3000)
