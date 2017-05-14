const { updateMarkerCoords } = require('../../app/models');
const { Marker } = require('../../app/schemas');
const { mockgoose, mongoose, beforeSetup, afterSetup } = require('../db-setup');

beforeAll(() => beforeSetup(mockgoose, mongoose));
afterEach(() => afterSetup());
afterAll(() => mongoose.connection.close());

describe('Update marker coords model', () => {
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

  const payload = {
    index: 0,
    coords: {
      lat: 299,
      lng: 300,
      x: 10,
      y: 11,
    },
  };

  it('Should update existing coords', async () => {
    await Marker.insertMany([initialState]);
    const initial = await Marker.findOne({ index: initialState.index }, { _id: 0, __v: 0 });

    expect(initial.toJSON()).toEqual(initialState);
    await updateMarkerCoords(payload);
    const expected = await Marker.findOne({ index: payload.index }, { _id: 0, __v: 0 });

    expect(expected.toJSON()).toEqual(Object.assign({}, payload, { objects: [] }));
  });

  it('Should create a new document, if it doesn\'t exists', async () => {
    const initial = await Marker.find();

    expect(initial.length).toBe(0);
    await updateMarkerCoords(payload);
    const expected = await Marker.findOne({ index: payload.index }, { _id: 0, __v: 0 });

    expect(expected.toJSON()).toEqual(Object.assign({}, payload, { objects: [] }));
  });
});
