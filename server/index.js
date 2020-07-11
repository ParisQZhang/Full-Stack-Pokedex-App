const Koa = require('koa');
const app = new Koa();
const port = 3055;
const router = require('./routes');
const cors = require('@koa/cors');

app.use(cors());
app.use(router.routes());
app.listen(port, () => {
  console.log(`server is listening at http://localhost:${port} 🚀🚀🚀🥳🥳🤩`);
});
