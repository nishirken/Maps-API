const updateMarkerCoords = require('../models/update-marker-coords');
const updateMarkerName = require('../models/update-marker-name');
const updateMarkerObjects = require('../models/update-marker-objects');

/**
 * Save state handler, checks type and execute relevant model
 * @param {string} type - of current info
 * @param {object} payload - object with info, which needs to be saved in the db
 * @return {Promise.<function>} or {Promise.<null>}
 */
module.exports = async (type, payload) => {
  switch (type) {
    case 'MARKER_COORDS':
      return updateMarkerCoords(payload);
    case 'MARKER_NAME':
      return updateMarkerName(payload);
    case 'OBJECTS':
      return updateMarkerObjects(payload);
  }

  return null;
};
