const { getCollection } = require('../../app/models');
const { Marker } = require('../../app/schemas');
const { mockgoose, mongoose, beforeSetup, afterSetup } = require('../db-setup');

beforeAll(() => beforeSetup(mockgoose, mongoose));
afterEach(() => afterSetup());
afterAll(() => mongoose.connection.close());

describe('Get collection of markers model', () => {
  const initialState = {
    index: 0,
    coords: {
      lat: 400,
      lng: 500,
      x: 20,
      y: 21,
    },
    objects: [],
  };

  it('Should return existing collection', async () => {
    await Marker.insertMany([initialState]);
    const initial = await Marker.findOne({ index: initialState.index }, { _id: 0, __v: 0 });

    expect(initial.toJSON()).toEqual(initialState);
    const result = await getCollection();

    expect(JSON.stringify(result)).toEqual(JSON.stringify([initialState]));
  });
});

