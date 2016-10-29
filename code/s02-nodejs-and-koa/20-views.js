import Koa from "koa"
import views from 'koa-views'

const app = new Koa

app.use(views(`${__dirname}/views`, {
  map: {html: 'ejs'}
}))

app.use(async ctx => {
    await ctx.render("index", {date: "2016-12-31"})
})

app.listen(3000)

