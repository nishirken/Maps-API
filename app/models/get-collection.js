const { Marker } = require('../schemas');

/**
 * Function for handle requests,
 * Get current collection of the markers from db, and return it
 * @return {Promise.<array>} current collection on markers
 */
module.exports = async () => {
  const markers = await Marker.find({}, {
    _id: 0,
    __v: 0,
  });

  return markers;
};
