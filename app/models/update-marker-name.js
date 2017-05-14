const { Marker } = require('../schemas');

module.exports = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { name: payload.name },
    {
      upsert: true,
    }
  );
};
