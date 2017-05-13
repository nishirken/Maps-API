//const Mockgoose = require('mockgoose').Mockgoose;
//const mongoose = require('mongoose');
//const { updateMarkerCoords } = require('../../app/models');
//const mockgoose = new Mockgoose(mongoose);

//beforeEach(() => {
//  mockgoose.prepareStorage().then(() => {
//    mongoose.connect('mongodb://localhost:27017/maps');
//    mongoose.on('connection', () => 'connected to the database');
//  });
//});
//
//describe('Update marker coords model', () => {
//  const payload = {
//    index: 0,
//    coords: {
//      lat: 299,
//      lng: 300,
//      x: 10,
//      y: 11,
//    },
//  };
//
//  it('Should update existing coords', () => {
//    updateMarkerCoords(payload);
//  });
//});

