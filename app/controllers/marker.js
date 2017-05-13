const updateMarkerCoords = require('../models/update-marker-coords');
const updateMarkerName = require('../models/update-marker-name');
const updateMarkerObjects = require('../models/update-marker-objects');

module.exports = async (type, payload) => {
  switch (type) {
    case 'MARKER_COORDS':
      return updateMarkerCoords(payload);
    case 'MARKER_NAME':
      return updateMarkerName(payload);
    case 'OBJECTS':
      return updateMarkerObjects(payload);
  }
};
