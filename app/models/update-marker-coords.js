const { Marker } = require('../schemas');

/**
 * Function for handle requests on the /save-state url,
 * Save coords into db
 * @param {object} payload - contains index and coords object
 * @return {Promise.<undefined>}
 */
module.exports = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { coords: payload.coords },
    {
      upsert: true,
    }
  );
};

