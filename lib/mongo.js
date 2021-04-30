const mongoose = require("mongoose");
const config = require("../config");

mongoose.connect(config.mongo.url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

async function save(model, data) {
  const record = new model(data);
  await record.save();
}

module.exports = {
  save,
};
