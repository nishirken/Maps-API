const { Marker } = require('../schemas');

module.exports = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { coords: payload.coords },
    {
      upsert: true,
    }
  );
};

