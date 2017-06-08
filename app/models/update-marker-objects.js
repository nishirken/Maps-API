const { Marker } = require('../schemas');

/**
 * Function for handle requests,
 * Push one object into objects array
 * @param {object} payload - contains markerIndex and object
 * @return {Promise.<undefined>}
 */
module.exports = async payload => {
  const object = payload.object;

  await Marker.findOneAndUpdate(
    { index: payload.markerIndex },
    {
      $push: {
        objects: {
          index: object.index,
          name: object.name,
        },
      },
    }
  );
};
