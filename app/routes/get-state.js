const { Marker } = require('../schemas');

/**
 * Route function for getting client preloaded state
 * @param ctx {object} Koa object
 * @return {undefined}
 */
module.exports = async ctx => {
  const markers = await Marker.find({}, {
    _id: 0,
    __v: 0,
    'objects._id': 0,
  });

  ctx.body = JSON.stringify(markers);
};
