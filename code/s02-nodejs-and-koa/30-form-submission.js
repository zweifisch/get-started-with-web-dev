import Koa from "koa"
import views from 'koa-views'

const app = new Koa()

app.use(views(`${__dirname}/views`, {
  map: {html: 'ejs'}
}))

app.use(async ctx => {
    await ctx.render("login")
})

app.listen(3000)

