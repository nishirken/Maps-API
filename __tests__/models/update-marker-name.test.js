const { updateMarkerName } = require('../../app/models');
const { Marker } = require('../../app/schemas');
const { mockgoose, mongoose, beforeSetup, afterSetup } = require('../db-setup');

beforeAll(() => beforeSetup(mockgoose, mongoose));
afterEach(() => afterSetup());
afterAll(() => mongoose.connection.close());

describe('Update marker name model', () => {
  const initialState = {
    index: 0,
    name: 'Marker',
    objects: [],
  };

  const payload = {
    index: 0,
    name: 'Edited Marker Name',
  };

  it('Should update existing name', async () => {
    await Marker.insertMany([initialState]);
    const initial = await Marker.findOne({ index: initialState.index }, { _id: 0, __v: 0 });

    expect(initial.toJSON()).toEqual(initialState);
    await updateMarkerName(payload);
    const expected = await Marker.findOne({ index: payload.index }, { _id: 0, __v: 0 });

    expect(expected.toJSON()).toEqual(Object.assign({}, payload, { objects: [] }));
  });

  it('Should create a new document, if it doesn\'t exists', async () => {
    const initial = await Marker.find();

    expect(initial.length).toBe(0);
    await updateMarkerName(payload);
    const expected = await Marker.findOne({ index: payload.index }, { _id: 0, __v: 0 });

    expect(expected.toJSON()).toEqual(Object.assign({}, payload, { objects: [] }));
  });
});
