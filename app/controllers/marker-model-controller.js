const { Marker } = require('../schemas');

const updateMarkerCoords = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { coords: payload.coords },
    {
      new: true,
      upsert: true,
    }
  );
};

const updateMarkerName = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { name: payload.name },
    {
      new: true,
      upsert: true,
    }
  );
};

const updateMarkerObjects = async payload => {
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
    { new: true }
  );
};

module.exports = async (type, payload) => {
  switch (type) {
    case 'MARKER_COORDS':
      updateMarkerCoords(payload);
      break;
    case 'MARKER_NAME':
      updateMarkerName(payload);
      break;
    case 'OBJECTS':
      updateMarkerObjects(payload);
      break;
  }
};
