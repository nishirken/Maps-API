const { Marker } = require('../schemas');

/**
 * Function for handle requests,
 * Save name into db
 * @param {object} payload - contains index and name string
 * @return {Promise.<undefined>}
 */
module.exports = async payload => {
  await Marker.findOneAndUpdate(
    { index: payload.index },
    { name: payload.name },
    {
      upsert: true,
    }
  );
};
