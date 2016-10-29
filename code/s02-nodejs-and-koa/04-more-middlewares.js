import Koa from "koa"
const app = new Koa

app.use(async (ctx, next) => {
  console.log('>> one')
  await next()
  console.log('<< one')
})

app.use(async (ctx, next) => {
  console.log('>> two')
  ctx.body = 'two'
  await next()
  console.log('<< two')
});

app.use(async (ctx, next) => {
  console.log('>> three')
  await next()
  console.log('<< three')
})

app.listen(3000)

