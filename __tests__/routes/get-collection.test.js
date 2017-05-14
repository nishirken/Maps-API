const { getState } = require('../../app/routes');
const { getCollection } = require('../../app/models');

jest.mock('../../app/models', () => {
  const markers = [
    {
      index: 0,
      coords: {
        lat: 299,
        lng: 300,
        x: 10,
        y: 11,
      },
      name: 'Marker',
      objects: [
        {
          index: 1,
          name: 'Object',
        },
      ],
    },
  ];

  return {
    getCollection: jest.fn(async () => markers),
  };
});

describe('Get collection route handler', () => {
  it('Should save in body collection from database', () => {
    const ctx = {};
    const markers = [
      {
        index: 0,
        coords: {
          lat: 299,
          lng: 300,
          x: 10,
          y: 11,
        },
        name: 'Marker',
        objects: [
          {
            index: 1,
            name: 'Object',
          },
        ],
      },
    ];

    getState(ctx);
  });
});
