const { save } = require("../../../lib/mongo");
const Model = require("../../../models/subscriber");
const config = require("../../../config");
const jwt = require("jsonwebtoken");

module.exports = function (injectedStore) {
  let store = injectedStore;

  function save(subscriber) {
    return new Promise(async (resolve, reject) => {
      try {
        await store.save(Model, subscriber);
        resolve(
          jwt.sign(
            {
              email: subscriber.email,
              firstName: subscriber.firstName,
              lastName: subscriber.lastName,
            },
            config.jwt.secret
          )
        );
      } catch (error) {
        reject(error);
      }
    });
  }

  return {
    save,
  };
};
