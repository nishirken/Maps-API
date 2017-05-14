const { updateMarkerObjects } = require('../../app/models');
const { Marker } = require('../../app/schemas');
const { mockgoose, mongoose, beforeSetup, afterSetup } = require('../db-setup');

beforeAll(() => beforeSetup(mockgoose, mongoose));
afterEach(() => afterSetup());
afterAll(() => mongoose.connection.close());

describe('Update marker objects', () => {
  const initialState = {
    index: 0,
    objects: [],
  };

  const payload = {
    markerIndex: 0,
    object: {
      index: 1,
      name: 'Object 1',
    },
  };

  it('Should push in the existing objects array', async () => {
    await Marker.insertMany([initialState]);
    await updateMarkerObjects(payload);
    const expected = await Marker
      .findOne({ index: initialState.index }, { _id: 0, __v: 0, index: 0 });

    expect(expected.toJSON())
      .toEqual({ objects: [payload.object] });
  });
});
