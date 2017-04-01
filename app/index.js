const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const cors = require('kcors');
const bodyParser = require('koa-bodyparser');
const { resolve } = require('path');
const routes = require('./routes');

const app = new Koa();
const router = new Router();

mongoose.connect('mongodb://mongo:27017/users');
mongoose.connection.on('error', console.error);

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/', routes.home);
router.post('/save-state', routes.saveState);

app.listen(3000);
