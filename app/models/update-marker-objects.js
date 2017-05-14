const { Marker } = require('../schemas');

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
    },
  );
};
