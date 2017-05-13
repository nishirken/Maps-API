const { markerController } = require('../../app/controllers/index');
const models = require('../../app/models');

jest.mock('../../app/models/update-marker-coords');
jest.mock('../../app/models/update-marker-name');
jest.mock('../../app/models/update-marker-objects');

describe('Marker controller', () => {
  const payload = {};

  it('Should return updateMarkerCoordsModel', () => {
    markerController('MARKER_COORDS', payload);
    expect(models.updateMarkerCoords).toHaveBeenCalledWith(payload);
  });

  it('Should return updateMarkerName', () => {
    markerController('MARKER_NAME', payload);
    expect(models.updateMarkerName).toHaveBeenCalledWith(payload);
  });

  it('Should return updateMarkerObjects', () => {
    markerController('OBJECTS', payload);
    expect(models.updateMarkerObjects).toHaveBeenCalledWith(payload);
  });
});
