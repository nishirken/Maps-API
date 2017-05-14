const { getCollection } = require('../models');

/**
 * Route function for getting client preloaded state
 * @param {object} ctx - Koa object
 */
module.exports = async ctx => {
  const markers = await getCollection();

  ctx.body = JSON.stringify(markers);
};
