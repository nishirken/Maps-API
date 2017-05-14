const Mockgoose = require('mockgoose').Mockgoose;
const mongoose = require('mongoose');
const mockgoose = new Mockgoose(mongoose);

const beforeSetup = async (mockmongo, mongo) => {
  mockmongo.helper.setDbVersion('3.4.2');
  await mockmongo.prepareStorage();
  mongo.connect('mongodb://localhost:27017/maps');
};
const afterSetup = async () => {
  await mockgoose.helper.reset();
};

module.exports = {
  beforeSetup,
  afterSetup,
  mockgoose,
  mongoose,
};
