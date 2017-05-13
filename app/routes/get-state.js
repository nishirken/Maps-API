const { getCollection } = require('../models');

/**
 * Route function for getting client preloaded state
 * @param ctx {object} Koa object
 * @return {undefined}
 */
module.exports = async ctx => {
  const markers = await getCollection();

  ctx.body = JSON.stringify(markers);
};
