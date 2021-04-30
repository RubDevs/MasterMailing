const { save } = require("../../../lib/mongo");
const Model = require("../../../models/subscriber");

module.exports = function (injectedStore) {
  let store = injectedStore;

  async function save(subscriber) {
    return store.save(Model, subscriber);
  }

  return {
    save,
  };
};
