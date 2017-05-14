const { markerController } = require('../controllers');

/**
 * Route function for handle request for save client application state
 * @param {object} ctx - Koa object
 */
module.exports = async ctx => {
  const body = ctx.request.body;

  if (body.type && body.payload) {
    markerController(body.type, body.payload);
    ctx.status = 200;
  } else if (!body.type) {
    console.error('wrong body type', body.type);
    ctx.throw(400, 'The body must contain type field, but got empty type field');
  } else if (!body.payload) {
    console.error('wrong body payload', body.payload);
    ctx.throw(400, 'The body must contain payload field, but got empty payload field');
  } else {
    console.error('Something bad with parse body');
    ctx.status = 500;
  }
};

