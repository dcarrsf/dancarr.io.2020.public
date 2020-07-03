const Koa = require('koa');
const logger = require('koa-logger');
const Router = require('koa-router');
const send = require('koa-send');

const app = new Koa();
const router = new Router();
const port = 8888;

router.get('/(.*)', async (ctx, next) => {
    let error = null;
    try {
        await send(ctx, '/' === ctx.path ? '/index.html' : ctx.path, { root: __dirname });
    } catch (e) {
        error = e;
    }
    if (error || ctx.status === 404) {
        // todo: error handling goes here...
    }
});

app.use(logger());
app.use(router.routes());

// Start server on 8888
app.listen(port);

console.log('Server running on port ', port);
