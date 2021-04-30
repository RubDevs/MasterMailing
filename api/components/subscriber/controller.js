const { save } = require("../../../lib/mongo");
const Model = require("../../../models/subscriber");
const config = require("../../../config");
const jwt = require("jsonwebtoken");

module.exports = function (injectedStore) {
  let store = injectedStore;

  async function save(subscriber) {
    try {
      await store.save(Model, subscriber);
      return jwt.sign({ email: subscriber.email }, config.jwt.secret);
    } catch (error) {
      console.error(error);
    }
  }

  return {
    save,
  };
};
