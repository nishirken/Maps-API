const { Marker } = require('../schemas');

module.exports = async () => {
  const markers = await Marker.find({}, {
    _id: 0,
    __v: 0,
  });

  return markers;
};
