const Koa = require('koa');
const Router = require('koa-router');
const mongoose = require('mongoose');
const cors = require('koa-cors');
const bodyParser = require('koa-bodyparser');
const routes = require('./routes');

const app = new Koa();
const router = new Router();

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://mongo:27017/maps');
mongoose.connection.on('error', console.error);

app
    .use(cors())
    .use(bodyParser())
    .use(router.routes())
    .use(router.allowedMethods());

router.get('/', routes.home);
router.post('/save-state', routes.saveState);
router.post('/get-state', routes.getState);

app.listen(3000);
