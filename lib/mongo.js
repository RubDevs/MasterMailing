const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

/**
 * Saves a model to the Database
 * @param {Mongoose model} model - A Mongoose Model
 * @param {Object} data - An object with the model data
 */
async function save(model, data) {
  const record = new model(data);
  await record.save();
}

module.exports = {
  save,
};
